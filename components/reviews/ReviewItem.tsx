"use client"

import * as s from "./Review.css"
import { CiMenuKebab } from "react-icons/ci"

import KebabBox from "@/components/shared/box/KebabBox"
import ModifyTextBox from "@/components/shared/box/ModifyTextBox"

import useAlertContext from "@/hooks/useAlertContext"

import { ReviewItem } from "@/interfaces/auth/book"

import { MouseEventHandler, useEffect, useRef, useState } from "react"
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query"

import { supabase } from "@/utils/supabase/client"

interface ReviewItemProps {
  item: ReviewItem
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ReviewItem[], Error>>
}

interface UserMetadata {
  user_name?: string
  displayName?: string
  name?: string
}

interface CustomUser {
  user_metadata: UserMetadata
}

const ReviewItem = ({ item, refetch }: ReviewItemProps) => {
  const [userInfo, setUserInfo] = useState<CustomUser | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModifyOpen, setIsModifyOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const { open, close } = useAlertContext()

  const handleKebabMenuClick: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation()
    setIsMenuOpen((prev) => !prev)
  }

  const handleOutsideClick = (e: MouseEvent) => {
    if (!menuRef.current?.contains(e.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  const handleModifyTextClick = () => {
    setIsModifyOpen((prev) => !prev)
    setIsMenuOpen(false)
  }

  const handleRemoveItem = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", item.id)

    setIsMenuOpen(false)
    refetch()
    open({
      title: "서평이 삭제되었습니다.",
      onRightButtonClick: () => {
        close()
      }
    })
  }

  useEffect(() => {
    ;(async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.error("Error fetching user info:", error)
        return
      }

      if (data?.user) {
        setUserInfo(data.user as CustomUser)
      }
    })()
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Seoul",
    hour12: false
  }
  const time = new Intl.DateTimeFormat("ko-KR", options).format(
    new Date(item.created_at)
  )

  return (
    <li className={s.reviewItemStyle}>
      <div className={s.titleInfo}>
        <div>
          <span className={s.userName}>
            {userInfo?.user_metadata.user_name ||
              userInfo?.user_metadata.displayName ||
              userInfo?.user_metadata.name ||
              "Unknown User"}
          </span>
          <span className={s.createdAtText}>
            {item.created_at.substring(0, 10)} | {time}
          </span>
        </div>
        <div className={s.kebabIconWrap} ref={menuRef}>
          <CiMenuKebab className={s.kebabIcon} onClick={handleKebabMenuClick} />
          {isMenuOpen && (
            <KebabBox
              onModifyClick={handleModifyTextClick}
              onRemoveClick={handleRemoveItem}
            />
          )}
        </div>
      </div>
      <div>{item.contents}</div>
      {isModifyOpen && (
        <ModifyTextBox
          refetch={refetch}
          type='reviews'
          setIsModifyOpen={setIsModifyOpen}
          contents={item.contents}
          id={item.id}
        />
      )}
    </li>
  )
}

export default ReviewItem
