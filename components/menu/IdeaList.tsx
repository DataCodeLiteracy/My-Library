"use client"

import { getMyBookReviewFilterData } from "@/api/bookApi"

import CategoryList from "@/components/shared/category/CategoryList"

import { useQuery } from "@tanstack/react-query"

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
