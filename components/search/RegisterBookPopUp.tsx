import * as s from "./Search.css"

import { useSetRecoilState } from "recoil"
import BackDrop from "../shared/backdrop/BackDrop"
import bookState from "@/recoil/bookAtom"

const RegisterBookPopUp = () => {
  const setBookState = useSetRecoilState(bookState)

  const handlePopUpClose = () => {
    setBookState((prev) => ({ ...prev, isPopUpOpen: false }))
  }

  return (
    <BackDrop onClose={handlePopUpClose}>
      <div className={s.registerPopUpContainer}>내용</div>
    </BackDrop>
  )
}

export default RegisterBookPopUp
