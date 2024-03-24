import { getMyBookReviewData } from "@/api/bookApi"
import { QueryClient, useQuery } from "@tanstack/react-query"
import ReviewItem from "./ReviewItem"
import { useEffect } from "react"

interface ReviewsProps {
  isbn13: string
}

const Reviews = ({ isbn13 }: ReviewsProps) => {
  const { data } = useQuery({
    queryKey: ["reviews", isbn13],
    queryFn: () => getMyBookReviewData(isbn13)
  })

  return (
    <ul>
      {data?.map((book) => (
        <ReviewItem item={book} />
      ))}
    </ul>
  )
}

export default Reviews
