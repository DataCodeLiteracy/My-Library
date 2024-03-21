import * as s from "./CategoryList.css"

import { Item } from "@/interfaces/auth/book"
import BookItemList from "../book/BookItemList"
import BookSwiper from "../swiper/BookSwiper"

interface CategoryListProps {
  type: string
  title?: string
  item: Item[]
}

const CategoryList = ({ title, item, type }: CategoryListProps) => {
  return (
    <div className={s.CategoryListContainer}>
      {title && <h1 className={s.CategoryListTitle}>{title}</h1>}
      {type !== "swiper" && <BookItemList item={item} />}
      {type === "swiper" && <BookSwiper item={item} />}
    </div>
  )
}

export default CategoryList
