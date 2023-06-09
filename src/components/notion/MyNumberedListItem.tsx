import * as React from 'react'
import '@scss/notion.scss'
import Paragraph from '@components/notion/Paragraph'
import { Children } from '@types'
import ContentWrapper from '@module/ContentWrapper'

interface Props {
  numberedListItem: Children
}

const MyNumberedListItem = ({ numberedListItem }: Props) => {
  const { has_children, children } = numberedListItem
  return (
    <React.Fragment>
      <div className={`block-numbered-list-item`}>
        <Paragraph paragraph={numberedListItem.numbered_list_item} />
        {has_children && children?.length > 0 && <ContentWrapper childrens={children} />}
      </div>
    </React.Fragment>
  )
}

export default MyNumberedListItem
