"use client"

import { getMyBookData } from "@/api/bookApi"
import { MyBookInfo } from "@/interfaces/auth/book"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

interface DetailPageBookListProps {
  isbn13: string
}

const DetailPageBookList = ({ isbn13 }: DetailPageBookListProps) => {
  const [detailBook, setDetailBook] = useState<MyBookInfo>({} as MyBookInfo)

  const { data } = useQuery({ queryKey: ["mybook"], queryFn: getMyBookData })

  const filterData = (data: MyBookInfo[] | undefined) => {
    return data?.filter((item) => item.isbn13 === isbn13)[0]
  }

  useEffect(() => {
    const book = filterData(data)
    if (book) {
      setDetailBook(book)
    }
  }, [data, isbn13])

  return <div></div>
}

export default DetailPageBookList
