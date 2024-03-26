"use client"

import * as s from "./Book.css"

import { Item } from "@/interfaces/auth/book"

import bookState from "@/recoil/bookAtom"
import { useSetRecoilState } from "recoil"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { trimText } from "@/utils/trimText"

interface BookItemProps {
  book: Item
}

const BookItem = ({ book }: BookItemProps) => {
  const bookCategory = book.categoryName.split(">").pop() as string

  const setBookState = useSetRecoilState(bookState)

  const path = usePathname()
  const router = useRouter()

  const handleSearchPageClick = () => {
    if (path === "/search") {
      setBookState((prev) => ({
        ...prev,
        isPopUpOpen: true,
        searchBookId: book.itemId
      }))
    } else {
      router.push(`/mybook/${book.isbn13}`)
    }
  }

  const bookCategoryTrim = trimText(bookCategory, 6)

  return (
    <li className={s.BookItem} onClick={handleSearchPageClick}>
      <div className={s.ImageContainer}>
        <Image src={book.cover} alt='book image' fill />
      </div>
      <div className={s.BookInfoWrap}>
        <h3 className={s.BookTitle}>{book.title}</h3>
        <span className={s.BookCategory}>카테고리 : {bookCategoryTrim}</span>
        <span className={s.BookAuthor}>저자 : {book.author}</span>
      </div>
    </li>
  )
}

export default BookItem
