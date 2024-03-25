"use client"

import { getMyBookReviewFilterData } from "@/api/bookApi"
import { useQuery } from "@tanstack/react-query"
import CategoryList from "../shared/category/CategoryList"

const IdeaList = () => {
  const { data } = useQuery({
    queryKey: ["idea-book"],
    queryFn: () => getMyBookReviewFilterData("ideas")
  })

  return (
    <div>
      <CategoryList type='idea' item={data} />
    </div>
  )
}

export default IdeaList
