import * as s from "../CategoryPage.css"

import SubCategoryList from "@/components/category/SubCategoryList"

interface SubCategoryPageProps {
  params: { sub: string }
}

interface SubCategoryMatch {
  [key: string]: string
  infants: "유아"
  economy: "경제/경영"
  history: "역사"
  "self-development": "자기계발"
  humanities: "인문학"
  "computer-mobile": "컴퓨터/모바일"
}

const SUB_CATEGORY_MATCH: SubCategoryMatch = {
  infants: "유아",
  economy: "경제/경영",
  history: "역사",
  "self-development": "자기계발",
  humanities: "인문학",
  "computer-mobile": "컴퓨터/모바일"
}

const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  return (
    <section className={s.categoryPageSection}>
      <div>
        <h1 className={s.categoryPageTitle}>
          {SUB_CATEGORY_MATCH[params.sub]}
        </h1>
      </div>
      <article>
        <SubCategoryList />
      </article>
    </section>
  )
}

export default SubCategoryPage
