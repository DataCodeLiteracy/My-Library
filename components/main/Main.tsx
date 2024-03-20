"use client"

import { Item } from "@/interfaces/auth/book"
import CategoryList from "../shared/category/CategoryList"

interface MainProps {
  item: Item[]
}

const Main = ({ item }: MainProps) => {
  return (
    <div>
      <CategoryList type='swiper' title='내가 좋아하는 책' item={item} />
      <CategoryList type='swiper' title='내가 많이 읽는 책' item={item} />
    </div>
  )
}

export default Main
