import { BookApiResponse, MyBookInfo } from "@/interfaces/auth/book"
import { supabase } from "@/utils/supabase/client"

const BASE_URL_LIST = "http://www.aladin.co.kr/ttb/api/ItemList.aspx"
const BASE_URL_SEARCH = "/search/api"
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

  const response = await fetch(`${BASE_URL_LIST}?${params.toString()}`)

  return response.json()
}

export const searchKeywordData = async (keyword: string) => {
  const params = new URLSearchParams({
    ttbKey: TTB_KEY,
    Query: keyword,
    QueryType: "Title",
    MaxResults: "50",
    start: "1",
    SearchTarget: "Book",
    output: "js",
    Version: "20131101",
    language: "ko-KR"
  })

  const response = await fetch(`${BASE_URL_SEARCH}?${params.toString()}`)

  return response.json()
}

export const getMyBookData = async (): Promise<MyBookInfo[]> => {
  const { data, error } = await supabase.from("mybook").select("*")

  if (error) {
    console.error(error)
    return []
  }

  return data || []
}
