import { getBookData } from "@/api/bookApi"
import * as s from "../CategoryPage.css"

interface SubCategoryPageProps {
  params: { sub: string }
}

const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  return (
    <section className={s.categoryPageSection}>
      <div>
        <h1 className={s.categoryPageTitle}>{params.sub}</h1>
      </div>
      <article></article>
    </section>
  )
}

export default SubCategoryPage
