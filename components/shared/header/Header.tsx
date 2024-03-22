"use client"

import { IoMdSearch } from "react-icons/io"
import * as s from "./Header.css"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { supabase } from "@/utils/supabase/client"
import { QueryClient, useMutation } from "@tanstack/react-query"
import useAlertContext from "@/hooks/useAlertContext"
import { removeLocalToken } from "@/utils/localToken"
import authState from "@/recoil/authAtom"
import { useSetRecoilState } from "recoil"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Link from "next/link"

const EXCLUSION_PATHS = ["/login", "/register", "/reset-password"]

export const SUB_CATEGORY = [
  { categoryId: 0, categoryPath: "", categoryName: "전체" },
  { categoryId: 1, categoryPath: "economy", categoryName: "경제/경영" },
  { categoryId: 2, categoryPath: "history", categoryName: "역사" },
  { categoryId: 3, categoryPath: "infants", categoryName: "유아" },
  { categoryId: 4, categoryPath: "self-development", categoryName: "자기계발" }
]

const Header = () => {
  const [isShowCategory, setIsShowCategory] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState("")

  const setAuthStateValue = useSetRecoilState(authState)
  const router = useRouter()

  const path = usePathname()
  const { open, close } = useAlertContext()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  const queryClient = new QueryClient()

  const { mutate: logout } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      removeLocalToken()
      open({
        title: "로그아웃 되었습니다.",
        onRightButtonClick: () => {
          close()
          setAuthStateValue((prev) => ({ ...prev, isLoggedIn: false }))
          router.push("/login")
        }
      })
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const handleLogOut = () => {
    logout()
  }

  const handleCategoryClick = () => {
    setIsShowCategory((prev) => !prev)
  }

  const handleSubCategoryClick = (sub: string) => {
    router.push(`/category/${sub}`)
    setIsShowCategory(false)
  }

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push(`/search?keyword=${searchKeyword}`)

    queryClient.invalidateQueries({ queryKey: ["search", searchKeyword] })
  }

  useEffect(() => {
    const getUser = async () => {
      const userData = await supabase.auth.getUser()

      if (userData.data.user !== null) {
        setAuthStateValue((prev) => ({ ...prev, isLoggedIn: true }))
      } else {
        router.push("/login")
      }
    }

    getUser()
  }, [])

  useEffect(() => {
    setIsShowCategory(false)
  }, [path])

  if (EXCLUSION_PATHS.includes(path)) return null

  return (
    <section>
      <nav className={s.nav}>
        <div className={s.leftBox}>
          <Link href='/'>
            <Image
              src='/images/my_library_logo.png'
              alt='logo image'
              width={40}
              height={40}
              className={s.logo}
            />
          </Link>

          <div className={s.buttons}>
            <button onClick={handleCategoryClick}>카테고리</button>
            {isShowCategory && (
              <div className={s.subCategoryWrap}>
                <ul>
                  {SUB_CATEGORY.map((sub) => (
                    <li key={sub.categoryId}>
                      <button
                        className={s.subCategoryButton}
                        onClick={() => handleSubCategoryClick(sub.categoryPath)}
                      >
                        {sub.categoryName}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button>읽은 책</button>
            <button>읽지않은 책</button>
            <button>서평</button>
            <button>아이디어</button>
          </div>
        </div>
        <div className={s.rightBox}>
          <div className={s.inputWrap}>
            <form className={s.searchForm} onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='검색어를 입력하세요.'
                className={s.searchInput}
                value={searchKeyword}
                onChange={handleKeywordChange}
              />
              <button className={s.icon} type='submit'>
                <IoMdSearch />
              </button>
            </form>
          </div>
          <button onClick={handleLogOut}>로그아웃</button>
        </div>
      </nav>
    </section>
  )
}

export default Header
