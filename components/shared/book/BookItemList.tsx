import * as s from "./Book.css"

import { MyBookInfo } from "@/interfaces/auth/book"
import BookItem from "./BookItem"

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
