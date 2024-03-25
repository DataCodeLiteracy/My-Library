import { DefaultValue, atom } from "recoil"

interface BookState {
  isPopUpOpen: boolean
  searchBookId: string
}

const persistAuthState =
  (
    key: string
  ): (({
    setSelf,
    onSet
  }: {
    setSelf: (newValue: BookState | DefaultValue) => void
    onSet: (
      callback: (
        newValue: BookState | DefaultValue,
        oldValue: BookState | DefaultValue
      ) => void
    ) => void
  }) => void) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key)
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
      }

      onSet((newValue) => {
        if (!(newValue instanceof DefaultValue)) {
          localStorage.setItem(key, JSON.stringify(newValue))
        }
      })
    }
  }

const bookState = atom<BookState>({
  key: "bookState",
  default: {
    isPopUpOpen: false,
    searchBookId: ""
  },
  effects_UNSTABLE: [persistAuthState("bookState")]
})

export default bookState
