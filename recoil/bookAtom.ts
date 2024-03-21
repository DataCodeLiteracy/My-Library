import { atom } from "recoil"

interface BookState {
  isPopUpOpen: boolean
}

const bookState = atom<BookState>({
  key: "bookState",
  default: {
    isPopUpOpen: false
  }
})

export default bookState
