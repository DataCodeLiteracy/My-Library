"use client"

import { getMyBookData } from "@/api/bookApi"

import CategoryList from "@/components/shared/category/CategoryList"

import { MyBookInfo } from "@/interfaces/auth/book"

import authState from "@/recoil/authAtom"
import { QueryClient, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"

import { setLocalToken } from "@/utils/localToken"
import { supabase } from "@/utils/supabase/client"

const Main = () => {
  const { data } = useQuery({ queryKey: ["mybook"], queryFn: getMyBookData })

  const [myLikeBooks, setMyLikeBooks] = useState<MyBookInfo[]>([])
  const [myReadBooks, setMyLeadBooks] = useState<MyBookInfo[]>([])

  const queryClient = new QueryClient()

  const setAuthStateValue = useSetRecoilState(authState)

  const checkLogin = async () => {
    const authInfo = await supabase.auth.getSession()
    const session = authInfo.data.session
    const accessToken = session?.access_token as string

    setLocalToken(accessToken)

    if (accessToken) {
      setAuthStateValue((prev) => ({ ...prev, isLoggedIn: true }))
    }
  }

  useEffect(() => {
    const myReadBooks = data ? data?.filter((item) => item.isRead === true) : []
    const myLikeBooks = data ? data?.filter((item) => item.isLike === true) : []

    setMyLeadBooks(myReadBooks)
    setMyLikeBooks(myLikeBooks)

    checkLogin()

    queryClient.invalidateQueries({ queryKey: ["mybook"] })
  }, [data])

  return (
    <div>
      <CategoryList type='swiper' title='내가 좋아하는 책' item={myLikeBooks} />
      <CategoryList
        type='swiper'
        title='내가 많이 읽는 책'
        item={myReadBooks}
      />
    </div>
  )
}

export default Main
