"use client"

import { getMyBookReviewFilterData } from "@/api/bookApi"

import CategoryList from "@/components/shared/category/CategoryList"

import { useQuery } from "@tanstack/react-query"

const ReviewList = () => {
  const { data } = useQuery({
    queryKey: ["review-book"],
    queryFn: () => getMyBookReviewFilterData("reviews")
  })

  return (
    <div>
      <CategoryList type='review' item={data} />
    </div>
  )
}

export default ReviewList
