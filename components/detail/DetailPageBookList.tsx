"use client"

import { MdDeleteSweep } from "react-icons/md"
import * as s from "./DetailPageBook.css"

import {
  getMyBookData,
  getMyBookIdeaData,
  getMyBookReviewData
} from "@/api/bookApi"

import Ideas from "@/components/ideas/Ideas"
import Reviews from "@/components/reviews/Reviews"
import Button from "@/components/shared/button/Button"

import useAlertContext from "@/hooks/useAlertContext"

import { MyBookInfo } from "@/interfaces/auth/book"

import { useQuery } from "@tanstack/react-query"
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { supabase } from "@/utils/supabase/client"
import { trimText } from "@/utils/trimText"

interface DetailPageBookListProps {
  isbn13: string
}

interface UserMetadata {
  user_name?: string
  displayName?: string
  name?: string
}

interface CustomUser {
  id?: string
  user_metadata: UserMetadata
}

const DetailPageBookList = ({ isbn13 }: DetailPageBookListProps) => {
  const [detailBook, setDetailBook] = useState<MyBookInfo>({} as MyBookInfo)
  const [reviewText, setReviewText] = useState("")
  const [ideaText, setIdeaText] = useState("")
  const [userInfo, setUserInfo] = useState<CustomUser | null>(null)

  const router = useRouter()

  const { data: myBookData, refetch: myBookRefetch } = useQuery({
    queryKey: ["mybook"],
    queryFn: getMyBookData
  })
  const { refetch } = useQuery({
    queryKey: ["reviews", isbn13],
    queryFn: () => getMyBookReviewData(isbn13)
  })
  const { refetch: ideaRefetch } = useQuery({
    queryKey: ["ideas", isbn13],
    queryFn: () => getMyBookIdeaData(isbn13)
  })

  const filterData = (data: MyBookInfo[] | undefined) => {
    return data?.filter((item) => item.isbn13 === isbn13)[0]
  }

  const getMyBookId = (data: MyBookInfo[] | undefined) => {
    return data?.filter((item) => item.isbn13 === isbn13)[0].id
  }

  const { open, close } = useAlertContext()

  const handleRegisterReview: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.stopPropagation()

    if (reviewText.trim() === "") {
      open({
        title: "내용을 입력해주세요.",
        onRightButtonClick: () => {
          close()
        }
      })
    } else {
      const { count, data, error, status } = await supabase
        .from("reviews")
        .insert([{ contents: reviewText, isbn13 }])

      if (status === 201) {
        setReviewText("")
        refetch()

        open({
          title: "서평 등록이 완료되었습니다.",
          onRightButtonClick: () => {
            close()
          }
        })
      }
    }
  }

  const handleRegisterIdea: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.stopPropagation()

    if (ideaText.trim() === "") {
      open({
        title: "내용을 입력해주세요.",
        onRightButtonClick: () => {
          close()
        }
      })
    } else {
      const { count, data, error, status } = await supabase
        .from("ideas")
        .insert([{ contents: ideaText, isbn13 }])

      if (status === 201) {
        setIdeaText("")
        ideaRefetch()

        open({
          title: "아이디어 등록이 완료되었습니다.",
          onRightButtonClick: () => {
            close()
          }
        })
      }
    }
  }

  const handleReviewTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value)
  }

  const handleIdeaTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIdeaText(e.target.value)
  }

  const handleDeleteMyBook = async () => {
    const id = getMyBookId(myBookData)

    await supabase.from("mybook").delete().eq("id", id)
    myBookRefetch()

    open({
      title: "삭제가 완료되었습니다.",
      onRightButtonClick: () => {
        close()
        router.push("/category")
      }
    })
  }

  const handleIsLikeRegister = async () => {
    await supabase
      .from("mybook")
      .update({ isLike: true })
      .eq("user_id", userInfo?.id)
      .eq("isbn13", isbn13)

    open({
      title: "좋아하는 책으로 등록되었습니다.",
      onRightButtonClick: () => {
        close()
      }
    })
  }

  const handleIsReadRegister = async () => {
    await supabase
      .from("mybook")
      .update({ isRead: true })
      .eq("user_id", userInfo?.id)
      .eq("isbn13", isbn13)

    open({
      title: "읽은 책으로 등록되었습니다.",
      onRightButtonClick: () => {
        close()
      }
    })
  }

  useEffect(() => {
    const book = filterData(myBookData)
    if (book) {
      setDetailBook(book)
    }
  }, [myBookData, isbn13])

  useEffect(() => {
    ;(async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.error("Error fetching user info:", error)
        return
      }

      if (data?.user) {
        setUserInfo(data.user as CustomUser)
      }
    })()
  }, [])

  const bookTitle =
    detailBook?.title?.includes("-") && detailBook.title.split("-")[0]
  const author = trimText(detailBook?.author, 30)
  const categoryName = trimText(detailBook?.categoryName, 25)
  const description = trimText(detailBook?.description, 250)

  return (
    <div>
      <div className={s.detailBookAndIdeaWrap}>
        <div className={s.detailBookWrap}>
          <div className={s.bookReviewTitleWrap}>
            <h1 className={s.detailBookTitle}>{bookTitle}</h1>
            <MdDeleteSweep
              className={s.deleteIcon}
              onClick={handleDeleteMyBook}
            />
          </div>
          <div className={s.detailBookImageAndInfoWrap}>
            <div className={s.ImageContainer}>
              <Image src={detailBook.cover} alt='book cover image' fill />
            </div>
            <div className={s.detailBookInfoWrap}>
              <div className={s.detailBookInfoMenuWrap}>
                <span style={{ height: "10%" }}>저자</span>
                <span style={{ height: "10%" }}>카테고리</span>
                <span style={{ height: "10%" }}>출판일</span>
                <span style={{ height: "10%" }}>출판사</span>
                <span style={{ height: "50%" }}>상세설명</span>
                <span style={{ height: "10%" }}>구매링크</span>
              </div>
              <div className={s.detailBookInfoTextWrap}>
                <p style={{ height: "10%" }}>{author}</p>
                <p style={{ height: "10%" }}>{categoryName}</p>
                <p style={{ height: "10%" }}>{detailBook?.pubDate}</p>
                <p style={{ height: "10%" }}>{detailBook?.publisher}</p>
                <p style={{ height: "50%" }}>{description}</p>
                <p style={{ height: "10%" }}>
                  {detailBook?.link ? (
                    <Link href={detailBook.link}>알라딘에서 구매하기</Link>
                  ) : (
                    <span>구매 링크가 없습니다.</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.ideaBoxWrap}>
          <h2 className={s.subTitle}>아이디어</h2>
          <Ideas isbn13={isbn13} />
          <div>
            <textarea
              className={s.ideaTextArea}
              value={ideaText}
              onChange={handleIdeaTextChange}
            />
            <Button text='아이디어 등록하기' onClick={handleRegisterIdea} />
          </div>
        </div>
      </div>
      <div className={s.bookReviewWrap}>
        <h2 className={s.subTitle}>서평</h2>
        <Reviews isbn13={isbn13} />
        <textarea
          className={s.bookReviewTextArea}
          value={reviewText}
          onChange={handleReviewTextChange}
        />
        <Button
          text='서평 등록하기'
          type='submit'
          onClick={handleRegisterReview}
        />
      </div>
      <div className={s.buttonsWrap}>
        <Button
          text='좋아하는 책으로 등록하기'
          style={s.whiteButtonStyle}
          onClick={handleIsLikeRegister}
        />
        <Button
          text='읽은 책으로 등록하기'
          style={s.whiteButtonStyle}
          onClick={handleIsReadRegister}
        />
      </div>
    </div>
  )
}

export default DetailPageBookList
