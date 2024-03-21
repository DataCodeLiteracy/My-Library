"use client"

import { useSearchParams } from "next/navigation"

const SearchKeywordList = () => {
  const param = useSearchParams()
  const keyword = param.get("keyword")

  return (
    <div>
      <h1>{keyword}</h1>
    </div>
  )
}

export default SearchKeywordList
