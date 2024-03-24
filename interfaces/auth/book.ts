export interface MyBookInfo extends Item {
  isRead: boolean
  isNoRead: boolean
  isLike: boolean
  readCount: number
}

export interface BookApiResponse {
  title: string
  link: string
  logo: string
  pubDate: string
  totalResults: number
  startIndex: number
  itemsPerPage: number
  query: string
  version: string
  searchCategoryId: number
  searchCategoryName: string
  item: Array<Item>
}

export interface Item {
  itemId: string
  title: string
  link: string
  author: string
  pubDate: string
  description: string
  isbn: string
  isbn13: string
  priceSales: number
  priceStandard: number
  mallType?: string
  stockStatus?: string
  mileage?: number
  cover: string
  categoryId: number
  categoryName: string
  publisher: string
  salesPoint?: number
  adult?: boolean
  fixedPrice?: boolean
  customerReviewRank?: number
  seriesInfo?: SeriesInfo
  subInfo?: SubInfo
}

interface SeriesInfo {
  seriesId: string
  seriesLink: string
  seriesName: string
}

interface SubInfo {}

export interface ReviewItem {
  created_at: string
  isbn13: string
  contents: string
  user_id: string
}

export interface IdeaItem {
  created_at: string
  isbn13: string
  contents: string
  user_id: string
}
