"use client"

import * as s from "./Search.css"

import { searchKeywordData } from "@/api/bookApi"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import CategoryList from "../shared/category/CategoryList"
import { useRecoilValue } from "recoil"
import bookState from "@/recoil/bookAtom"
import RegisterBookPopUp from "./RegisterBookPopUp"

const SearchKeywordList = () => {
  const bookStateValue = useRecoilValue(bookState)

  const param = useSearchParams()
  const keyword = param.get("keyword") as string

  const { data } = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => searchKeywordData(keyword)
  })

  return (
    <div className={s.searchListContainer}>
      <div>
        <h1 className={s.keywordTitle}>
          <span className={s.keyword}>{keyword}</span>에 대한 검색 결과
        </h1>
        <article>
          <CategoryList type='search-keyword' item={data && data?.item} />
        </article>
      </div>
      {bookStateValue.isPopUpOpen && <RegisterBookPopUp />}
    </div>
  )
}

export default SearchKeywordList
