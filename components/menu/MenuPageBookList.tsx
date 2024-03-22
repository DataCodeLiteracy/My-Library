"use client"

import { getMyBookData } from "@/api/bookApi"
import { MyBookInfo } from "@/interfaces/auth/book"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import CategoryList from "../shared/category/CategoryList"

interface MenuPageBookListProps {
  type: string
}

const MenuPageBookList = ({ type }: MenuPageBookListProps) => {
  const [menuBookList, setMenuBookList] = useState<MyBookInfo[]>([])

  const { data } = useQuery({ queryKey: ["mybook"], queryFn: getMyBookData })

  const filterData = (data: MyBookInfo[] | undefined): MyBookInfo[] => {
    if (!data) return []

    if (type === "read") {
      return data.filter((item) => item.isRead === true)
    }

    if (type === "no-read") {
      return data.filter((item) => item.isNoRead === true)
    }

    return []
  }

  useEffect(() => {
    setMenuBookList(filterData(data))
  }, [data])

  return (
    <div>
      <CategoryList type='read' item={menuBookList} />
    </div>
  )
}

export default MenuPageBookList
