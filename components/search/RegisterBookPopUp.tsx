import * as s from "./Search.css"

import { Item, MyBookInfo } from "@/interfaces/auth/book"
import bookState from "@/recoil/bookAtom"
import { ChangeEvent, useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import BackDrop from "../shared/backdrop/BackDrop"

import Image from "next/image"
import Button from "../shared/button/Button"
import { trimText } from "@/utils/trimText"
import { supabase } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { QueryClient } from "@tanstack/react-query"

interface RegisterBookPopUpProps {
  item: Item[]
}

const RegisterBookPopUp = ({ item }: RegisterBookPopUpProps) => {
  const [myBookInfo, setMyBookInfo] = useState<MyBookInfo>({} as MyBookInfo)
  const [searchedBook, setSearchedBook] = useState<Item>({} as Item)
  const [checkBoxValue, setCheckBoxValue] = useState({
    read: false,
    noRead: false,
    like: false
  })
  const [readCount, setReadCount] = useState(0)
  const [bookStateValue, setBookState] = useRecoilState(bookState)

  const router = useRouter()
  const queryClient = new QueryClient()

  const handlePopUpClose = () => {
    setBookState((prev) => ({ ...prev, isPopUpOpen: false }))
  }

  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setCheckBoxValue((prev) => ({ ...prev, [name]: checked }))
  }

  const handleReadCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReadCount(+e.target.value)
  }

  const handleSaveMyBookInfo = async () => {
    await supabase.from("mybook").insert([{ ...myBookInfo }])
    setBookState((prev) => ({ ...prev, isPopUpOpen: false }))
    queryClient.invalidateQueries({ queryKey: ["mybook"] })
    router.push("/category")
  }

  useEffect(() => {
    setSearchedBook(
      item?.filter((v) => v.itemId === bookStateValue.searchBookId)[0]
    )
  }, [])

  useEffect(() => {
    setMyBookInfo({
      title: searchedBook?.title,
      author: searchedBook?.author,
      categoryId: searchedBook?.categoryId,
      categoryName: searchedBook?.categoryName,
      description: searchedBook?.description,
      cover: searchedBook?.cover,
      pubDate: searchedBook?.pubDate,
      publisher: searchedBook?.publisher,
      itemId: searchedBook?.itemId,
      isbn: searchedBook?.isbn,
      isbn13: searchedBook?.isbn13,
      link: searchedBook?.link,
      priceSales: searchedBook?.priceSales,
      priceStandard: searchedBook?.priceStandard,
      isRead: checkBoxValue.read,
      isNoRead: checkBoxValue.noRead,
      isLike: checkBoxValue.like,
      readCount
    })
  }, [searchedBook, checkBoxValue, readCount])

  const bookTitle =
    searchedBook?.title?.includes("-") && searchedBook.title.split("-")[0]
  const description = trimText(searchedBook?.description, 150)
  const author = trimText(searchedBook?.author, 20)

  return (
    <BackDrop onClose={handlePopUpClose}>
      <div className={s.registerPopUpContainer}>
        <h1 className={s.registerPopUpTitle}>내 책 등록하기</h1>
        <div className={s.searchBookInfoWrap}>
          <Image
            src={searchedBook?.cover}
            alt='book 이미지'
            width={150}
            height={200}
          />
          <div className={s.menuWrap}>
            <span style={{ height: "10%" }}>제목</span>
            <span style={{ height: "10%" }}>카테고리</span>
            <span style={{ height: "10%" }}>저자</span>
            <span style={{ height: "200px" }}>상세 설명</span>
          </div>
          <div className={s.searchBookTextWrap}>
            <h2 style={{ height: "10%" }}>{bookTitle}</h2>
            <span className={s.searchBookCategory} style={{ height: "10%" }}>
              {searchedBook?.categoryName}
            </span>
            <span style={{ height: "10%" }}>{author}</span>
            <p style={{ height: "200px" }}>{description}</p>
          </div>
        </div>
        <div className={s.checkBoxWrap}>
          <div className={s.checkboxSubWrap}>
            <label htmlFor='read' className={s.checkBoxLabel}>
              <input
                type='checkbox'
                id='read'
                className={s.checkBoxInput}
                name='read'
                onChange={handleCheckBoxChange}
              />
              읽음
            </label>
            {checkBoxValue.read === true && (
              <div className={s.readCountBoxWrap}>
                <input
                  type='number'
                  className={s.readCountInput}
                  onChange={handleReadCountChange}
                />
                <span className={s.readCountText}>회독</span>
              </div>
            )}
          </div>
          <div className={s.checkboxSubWrap}>
            <label htmlFor='noRead' className={s.checkBoxLabel}>
              <input
                type='checkbox'
                id='noRead'
                name='noRead'
                className={s.checkBoxInput}
                onChange={handleCheckBoxChange}
              />
              안 읽음
            </label>
          </div>
          <div className={s.checkboxSubWrap}>
            <label htmlFor='like' className={s.checkBoxLabel}>
              <input
                type='checkbox'
                id='like'
                name='like'
                className={s.checkBoxInput}
                onChange={handleCheckBoxChange}
              />
              좋아하는 책
            </label>
          </div>
        </div>
        <Button text='등록하기' onClick={handleSaveMyBookInfo} />
      </div>
    </BackDrop>
  )
}

export default RegisterBookPopUp
