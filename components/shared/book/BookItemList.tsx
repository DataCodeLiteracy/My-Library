import * as s from "./Book.css"

import BookItem from "./BookItem"

import { MyBookInfo } from "@/interfaces/auth/book"

interface BookItemListProps {
  item: MyBookInfo[] | undefined
}

const BookItemList = ({ item }: BookItemListProps) => {
  return (
    <ul className={s.BookListStyle}>
      {item?.map((book) => (
        <BookItem key={book.itemId} book={book} />
      ))}
    </ul>
  )
}

export default BookItemList
