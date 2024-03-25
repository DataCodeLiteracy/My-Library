import * as s from "./ReviewList.css"

import ReviewList from "@/components/menu/ReviewList"

const BookReviewPage = () => {
  return (
    <section className={s.reviewListPageSection}>
      <h1 className={s.reviewListPageTitle}>서평 등록한 책들</h1>
      <ReviewList />
    </section>
  )
}

export default BookReviewPage
