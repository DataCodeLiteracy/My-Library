import * as s from "./Box.css"

import useAlertContext from "@/hooks/useAlertContext"

import { IdeaItem, ReviewItem } from "@/interfaces/auth/book"

import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query"
import {
  ChangeEvent,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useState
} from "react"

import { supabase } from "@/utils/supabase/client"

interface ModifyTextBoxProps {
  type: string
  setIsModifyOpen: Dispatch<SetStateAction<boolean>>
  contents: string
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ReviewItem[] | IdeaItem[], Error>>
  id: number
}

const ModifyTextBox = ({
  type,
  setIsModifyOpen,
  contents,
  refetch,
  id
}: ModifyTextBoxProps) => {
  const [modifyText, setModifyText] = useState(contents)

  const { open, close } = useAlertContext()

  const handleCancelClick = () => {
    setIsModifyOpen(false)
  }

  const handleModifyTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setModifyText(e.target.value)
  }

  const handleModify: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation()

    if (type === "reviews") {
      const { data, error } = await supabase
        .from("reviews")
        .update({ contents: modifyText })
        .eq("id", id)
    }
    if (type === "ideas") {
      const { data, error } = await supabase
        .from("ideas")
        .update({ contents: modifyText })
        .eq("id", id)
    }
    open({
      title: "수정이 완료되었습니다.",
      onRightButtonClick: () => {
        close()
      }
    })
    await refetch()
    setIsModifyOpen(false)
  }

  return (
    <div className={s.modifyTextBoxWrap}>
      <textarea
        className={s.textAreaStyle}
        value={modifyText}
        onChange={handleModifyTextChange}
      />
      <div className={s.modifyAndDeleteTextWrap}>
        <div className={s.modifyAndCancelButtonWrap}>
          <button onClick={handleCancelClick}>취소</button>
          <button onClick={handleModify}>수정</button>
        </div>
      </div>
    </div>
  )
}

export default ModifyTextBox
