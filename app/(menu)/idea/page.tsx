import * as s from "./IdeaList.css"
import IdeaList from "@/components/menu/IdeaList"

const IdeaPage = () => {
  return (
    <section className={s.reviewListPageSection}>
      <h1 className={s.reviewListPageTitle}>아이디어 등록한 책들</h1>
      <IdeaList />
    </section>
  )
}

export default IdeaPage
