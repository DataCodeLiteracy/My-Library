import { getMyBookReviewData } from "@/api/bookApi"
import { useQuery } from "@tanstack/react-query"
import ReviewItem from "./ReviewItem"

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
        <ReviewItem key={book.created_at} item={book} />
      ))}
    </ul>
  )
}

export default Reviews
