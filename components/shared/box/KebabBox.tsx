"use client"

import * as s from "./Box.css"

interface KebabBoxProps {
  onModifyClick?: () => void
  onRemoveClick?: () => void
}

const KebabBox = ({ onModifyClick, onRemoveClick }: KebabBoxProps) => {
  return (
    <div className={s.kebabWrap}>
      <span className={s.spanText} onClick={onModifyClick}>
        수정
      </span>
      <span className={s.spanText} onClick={onRemoveClick}>
        삭제
      </span>
    </div>
  )
}

export default KebabBox
