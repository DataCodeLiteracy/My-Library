"use client"

import { Item } from "@/interfaces/auth/book"
import CategoryList from "../shared/category/CategoryList"
import { supabase } from "@/utils/supabase/client"
import { useEffect } from "react"
import { setLocalToken } from "@/utils/localToken"
import { useSetRecoilState } from "recoil"
import authState from "@/recoil/authAtom"

interface MainProps {
  item: Item[]
}

const Main = ({ item }: MainProps) => {
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
    checkLogin()
  }, [])

  return (
    <div>
      <CategoryList type='swiper' title='내가 좋아하는 책' item={item} />
      <CategoryList type='swiper' title='내가 많이 읽는 책' item={item} />
    </div>
  )
}

export default Main
