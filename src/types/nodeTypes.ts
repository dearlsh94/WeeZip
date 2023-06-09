import { ContentValue } from './contentType'

export interface NotionNode {
  id: string
  title: string
  archived: boolean
  createdAt: string
  updatedAt: string
  internal: {
    content: string
  }
  json: string
  markdownString: string
  parent?: NotionNode
  raw: Raw
  contentValue?: ContentValue
}

export interface Raw {
  archived: boolean
  children: {
    id: string
  }[]
  created_by: {
    id: string
  }
  created_time: string
  id: string
  last_edited_by: {
    id: string
  }
  last_edited_time: string
  object: string
  parent: {
    database_id: string
    type: string
  }
  url: string
}
