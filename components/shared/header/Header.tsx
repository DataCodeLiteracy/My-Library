import { IoMdSearch } from 'react-icons/io'
import * as s from './Header.css'

import Image from 'next/image'

const Header = () => {
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
          <button>로그아웃</button>
        </div>
      </nav>
    </section>
  )
}

export default Header
