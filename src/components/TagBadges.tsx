import * as React from 'react'
import '@scss/components.scss'
import { Property, Select } from '../types'

interface Props {
  tag?: Property | undefined
  selectTags?: Select[]
}

const TagBadges = ({ tag, selectTags }: Props) => {
  return (
    <React.Fragment>
      {tag && (
        <div className="badge-box">
          {tag.multi_select?.map((t, i) => {
            return (
              <span className={`badge ${t.color}_background`} key={`t-badge-${i}`}>
                {t.name}
              </span>
            )
          })}
        </div>
      )}
      {selectTags && (
        <div className="badge-box">
          {selectTags.map((t, i) => {
            return (
              <span className={`badge ${t.color}_background`} key={`t-badge-${i}`}>
                {t.name}
              </span>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default TagBadges
