"use client"

import { searchKeywordData } from "@/api/bookApi"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

const SearchKeywordList = () => {
  const param = useSearchParams()
  const keyword = param.get("keyword") as string

  const { data } = useQuery({
    queryKey: ["search"],
    queryFn: () => searchKeywordData(keyword)
  })

  console.log(data)

  return (
    <div>
      <h1>{keyword}</h1>
    </div>
  )
}

export default SearchKeywordList
