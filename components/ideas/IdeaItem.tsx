import * as s from "./Idea.css"
import { CiMenuKebab } from "react-icons/ci"

import KebabBox from "@/components/shared/box/KebabBox"
import ModifyTextBox from "@/components/shared/box/ModifyTextBox"

import useAlertContext from "@/hooks/useAlertContext"

import { IdeaItem } from "@/interfaces/auth/book"

import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query"
import { MouseEventHandler, useEffect, useRef, useState } from "react"

import { supabase } from "@/utils/supabase/client"

interface IdeaItemProps {
  item: IdeaItem
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IdeaItem[], Error>>
}

interface UserMetadata {
  user_name?: string
  displayName?: string
  name?: string
}

interface CustomUser {
  user_metadata: UserMetadata
}

const IdeaItem = ({ item, refetch }: IdeaItemProps) => {
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
      .from("ideas")
      .delete()
      .eq("id", item.id)

    setIsMenuOpen(false)
    refetch()
    open({
      title: "아이디어가 삭제되었습니다.",
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

  return (
    <li className={s.ideaItemStyle}>
      <div className={s.titleInfo}>
        <div>
          <span className={s.userName}>
            {userInfo?.user_metadata.user_name ||
              userInfo?.user_metadata.displayName ||
              userInfo?.user_metadata.name ||
              "Unknown User"}
          </span>
          <span className={s.createdAtText}>
            {item.created_at.substring(0, 10)}
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
          type='ideas'
          setIsModifyOpen={setIsModifyOpen}
          contents={item.contents}
          id={item.id}
        />
      )}
    </li>
  )
}

export default IdeaItem
