"use client"

import { getMyBookReviewFilterData } from "@/api/bookApi"
import { useQuery } from "@tanstack/react-query"
import CategoryList from "../shared/category/CategoryList"

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
