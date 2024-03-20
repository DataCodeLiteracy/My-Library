import { BookApiResponse } from "@/interfaces/auth/book"

const BASE_URL = "http://www.aladin.co.kr/ttb/api/ItemList.aspx"
const TTB_KEY = "ttbculture87871410002"

export const getBookData = async (): Promise<BookApiResponse> => {
  const params = new URLSearchParams({
    ttbKey: TTB_KEY,
    QueryType: "ItemNewAll",
    MaxResults: "10",
    start: "1",
    SearchTarget: "Book",
    output: "js",
    Version: "20131101",
    language: "ko-KR"
  })

  const response = await fetch(`${BASE_URL}?${params.toString()}`)

  return response.json()
}
//`${BASE_URL}?ttbkey=${TTB_KEY}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
