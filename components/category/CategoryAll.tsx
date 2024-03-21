"use client"

import { Item } from "@/interfaces/auth/book"
import CategoryList from "../shared/category/CategoryList"

interface CategoryAllProps {
  item: Item[]
}

const CategoryAll = ({ item }: CategoryAllProps) => {
  return (
    <div>
      <CategoryList type='all' item={item} />
    </div>
  )
}

export default CategoryAll
