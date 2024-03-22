"use client"

import { getMyBookData } from "@/api/bookApi"
import { QueryClient, useQuery } from "@tanstack/react-query"
import { usePathname } from "next/navigation"
import CategoryList from "../shared/category/CategoryList"
import { MyBookInfo } from "@/interfaces/auth/book"
import { useEffect, useState } from "react"

const filterData = (data: MyBookInfo[] | undefined, categoryIds: number[]) => {
  return data
    ? data.filter((item) => categoryIds.includes(item.categoryId))
    : []
}

const SubCategoryList = () => {
  const [categoryFilterData, setCategoryFilterData] = useState<MyBookInfo[]>([])
  const path = usePathname()

  const queryClient = new QueryClient()

  const { data } = useQuery({ queryKey: ["mybook"], queryFn: getMyBookData })

  useEffect(() => {
    if (path === "/category/economy") {
      setCategoryFilterData(filterData(data, [3065, 2225, 263]))
    }

    if (path === "/category/self-development") {
      setCategoryFilterData(filterData(data, [70216, 2952]))
    }

    if (path === "/category/infants") {
      setCategoryFilterData(filterData(data, [73196, 51786, 51785, 3390]))
    }

    if (path === "/category/history") {
      setCategoryFilterData(filterData(data, [52593, 169, 113, 1955]))
    }

    if (path === "/category/humanities") {
      setCategoryFilterData(filterData(data, [51378]))
    }

    if (path === "/category/computer-mobile") {
      setCategoryFilterData(filterData(data, [2724, 6355]))
    }

    queryClient.invalidateQueries({ queryKey: ["mybook"] })
  }, [data, path])

  return (
    <div>
      <CategoryList type='sub-category' item={categoryFilterData} />
    </div>
  )
}

export default SubCategoryList
