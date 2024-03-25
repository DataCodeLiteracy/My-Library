import { getMyBookReviewData } from "@/api/bookApi"

import ReviewItem from "./ReviewItem"

import { useQuery } from "@tanstack/react-query"

interface ReviewsProps {
  isbn13: string
}

const Reviews = ({ isbn13 }: ReviewsProps) => {
  const { data, refetch } = useQuery({
    queryKey: ["reviews", isbn13],
    queryFn: () => getMyBookReviewData(isbn13)
  })

  return (
    <ul>
      {data?.map((book) => (
        <ReviewItem key={book.created_at} item={book} refetch={refetch} />
      ))}
    </ul>
  )
}

export default Reviews
