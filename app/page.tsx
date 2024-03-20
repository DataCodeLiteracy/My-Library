import Main from "@/components/main/Main"

import { getBookData } from "@/api/bookApi"

const page = async () => {
  const data = await getBookData()

  return (
    <section>
      <Main item={data.item} />
    </section>
  )
}

export default page
