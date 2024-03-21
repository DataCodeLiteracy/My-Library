import * as s from "./Book.css"

import { Item } from "@/interfaces/auth/book"
import BookItem from "./BookItem"

interface BookItemListProps {
  item: Item[]
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
