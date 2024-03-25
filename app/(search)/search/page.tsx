import SearchKeywordList from "@/components/search/SearchKeywordList"

import { Suspense } from "react"

const SearchPage = () => {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchKeywordList />
      </Suspense>
    </section>
  )
}

export default SearchPage
