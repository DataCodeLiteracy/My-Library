import * as s from "./CategoryList.css"

import { Item } from "@/interfaces/auth/book"
import BookItemList from "../book/BookItemList"

interface CategoryListProps {
  title: string
  item: Item[]
}

const CategoryList = ({ title, item }: CategoryListProps) => {
  console.log(item)

  return (
    <div className={s.CategoryListContainer}>
      <h1 className={s.CategoryListTitle}>{title}</h1>
      <BookItemList item={item} />
    </div>
  )
}

export default CategoryList
