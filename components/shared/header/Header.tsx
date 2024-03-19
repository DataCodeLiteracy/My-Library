'use client'

import { IoMdSearch } from 'react-icons/io'
import * as s from './Header.css'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase/client'
import { useMutation } from '@tanstack/react-query'
import useAlertContext from '@/hooks/useAlertContext'
import { removeLocalToken } from '@/utils/localToken'
import authState from '@/recoil/authAtom'
import { useSetRecoilState } from 'recoil'

const EXCLUSION_PATHS = ['/login', '/register', '/reset-password']

const Header = () => {
  const setAuthStateValue = useSetRecoilState(authState)

  const router = useRouter()
  const path = usePathname()
  const { open, close } = useAlertContext()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  const { mutate: logout } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      removeLocalToken()
      open({
        title: '로그아웃 되었습니다.',
        onRightButtonClick: () => {
          close()
          setAuthStateValue((prev) => ({ ...prev, isLoggedIn: false }))
          router.push('/login')
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

  if (EXCLUSION_PATHS.includes(path)) return null

  return (
    <section>
      <nav className={s.nav}>
        <div className={s.leftBox}>
          <Image
            src="/images/my_library_logo.png"
            alt="logo image"
            width={40}
            height={40}
            className={s.logo}
          />
          <div className={s.buttons}>
            <button>카테고리</button>
            <button>읽은 책</button>
            <button>읽지않은 책</button>
            <button>서평</button>
            <button>아이디어</button>
          </div>
        </div>
        <div className={s.rightBox}>
          <div className={s.inputWrap}>
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              className={s.searchInput}
            />
            <IoMdSearch className={s.icon} />
          </div>
          <button onClick={handleLogOut}>로그아웃</button>
        </div>
      </nav>
    </section>
  )
}

export default Header
