import DetailPageBookList from "@/components/detail/DetailPageBookList"

interface DetailPageProps {
  params: { isbn13: string }
}

const DetailPage = ({ params: { isbn13 } }: DetailPageProps) => {
  return (
    <section>
      <DetailPageBookList isbn13={isbn13} />
    </section>
  )
}

export default DetailPage
