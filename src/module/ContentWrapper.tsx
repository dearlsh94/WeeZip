import * as React from 'react'
import '../scss/components.scss'
import { BlockType, Children } from '../types'
import ContentChildren from '../module/ContentChildren'

interface Props {
  childrens: Children[]
}

const ContentWrapper = ({ childrens }: Props) => {
  let numberedList: Children[] = []
  return (
    <section>
      {childrens.map((block, i) => {
        /** NOTE numbered_list 타입의 경우
         * 항목별 별도의 block으로 나뉘어져 응답이 와서 별도 처리로 합쳐준다.
         */
        if (block.type === BlockType.NUMBERED_LIST_ITEM) {
          numberedList.push(block)

          // 다음 block이 numbered_list가 아닐 경우 렌더링.
          if (
            numberedList?.length > 0 &&
            childrens[Math.min(i + 1, childrens.length)]?.type !== BlockType.NUMBERED_LIST_ITEM
          ) {
            return (
              <ol key={i}>
                {numberedList?.map((item, i) => {
                  return (
                    <li key={`numbered-list-${i}`}>
                      <ContentChildren block={item} />
                    </li>
                  )
                })}
              </ol>
            )
          } else {
            return
          }
        }

        return (
          <div key={i} className={`content-wrapper`}>
            <ContentChildren block={block} />
          </div>
        )
      })}
    </section>
  )
}

export default ContentWrapper