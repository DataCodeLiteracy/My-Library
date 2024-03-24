import { ReviewItem } from "@/interfaces/auth/book"

interface ReviewItemProps {
  item: ReviewItem
}

const ReviewItem = ({ item }: ReviewItemProps) => {
  console.log(item)

  return <li>{item.contents}</li>
}

export default ReviewItem
