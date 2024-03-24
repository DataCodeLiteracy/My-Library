import { IdeaItem } from "@/interfaces/auth/book"
import React from "react"

interface IdeaItemProps {
  item: IdeaItem
}

const IdeaItem = ({ item }: IdeaItemProps) => {
  return <div>{item.contents}</div>
}

export default IdeaItem
