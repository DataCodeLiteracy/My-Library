"use client"

import { getMyBookData } from "@/api/bookApi"
import { useQuery } from "@tanstack/react-query"
import CategoryList from "../shared/category/CategoryList"
import { useEffect } from "react"

const CategoryAll = () => {
  const { data } = useQuery({ queryKey: ["mybook"], queryFn: getMyBookData })

  return (
    <div>
      <CategoryList type='all' item={data} />
    </div>
  )
}

export default CategoryAll
