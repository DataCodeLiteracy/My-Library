import * as s from "../MenuPage.css"

import MenuPageBookList from "@/components/menu/MenuPageBookList"

const ReadPage = () => {
  return (
    <section className={s.menuPageSection}>
      <div>
        <h1 className={s.menuPageTitle}>내가 읽은 책들</h1>
      </div>
      <article>
        <MenuPageBookList type='read' />
      </article>
    </section>
  )
}

export default ReadPage
