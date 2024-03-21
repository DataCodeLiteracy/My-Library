import * as s from "./CategoryPage.css"

import { getBookData } from "@/api/bookApi"

import CategoryAll from "@/components/category/CategoryAll"

const CategoryPage = async () => {
  const data = await getBookData()

  return (
    <section className={s.categoryPageSection}>
      <div>
        <h1 className={s.categoryPageTitle}>내가 등록한 모든 책들</h1>
      </div>
      <article>
        <CategoryAll item={data.item} />
      </article>
    </section>
  )
}

export default CategoryPage
