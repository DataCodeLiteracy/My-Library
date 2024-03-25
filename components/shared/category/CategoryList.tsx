import * as s from "./CategoryList.css"

import BookItemList from "@/components/shared/book/BookItemList"
import BookSwiper from "@/components/shared/swiper/BookSwiper"

import { MyBookInfo } from "@/interfaces/auth/book"

interface CategoryListProps {
  type: string
  title?: string
  item: MyBookInfo[] | undefined
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
