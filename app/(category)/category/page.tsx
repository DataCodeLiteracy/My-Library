import * as s from "./CategoryPage.css"

import CategoryAll from "@/components/category/CategoryAll"

const CategoryPage = async () => {
  return (
    <section className={s.categoryPageSection}>
      <div>
        <h1 className={s.categoryPageTitle}>내가 등록한 모든 책들</h1>
      </div>
      <article>
        <CategoryAll />
      </article>
    </section>
  )
}

export default CategoryPage
