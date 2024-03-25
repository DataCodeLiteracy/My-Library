"use client"

import { getMyBookData } from "@/api/bookApi"

import CategoryList from "@/components/shared/category/CategoryList"

import { useQuery } from "@tanstack/react-query"

const CategoryAll = () => {
  const { data } = useQuery({ queryKey: ["mybook"], queryFn: getMyBookData })

  return (
    <div>
      <CategoryList type='all' item={data} />
    </div>
  )
}

export default CategoryAll
