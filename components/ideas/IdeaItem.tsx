import * as s from "./Idea.css"
import { CiMenuKebab } from "react-icons/ci"
import { IdeaItem } from "@/interfaces/auth/book"
import { supabase } from "@/utils/supabase/client"
import React, { useEffect, useState } from "react"

interface IdeaItemProps {
  item: IdeaItem
}

interface UserMetadata {
  user_name?: string
}

interface CustomUser {
  user_metadata: UserMetadata
}

const IdeaItem = ({ item }: IdeaItemProps) => {
  const [userInfo, setUserInfo] = useState<CustomUser | null>(null)

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

  return (
    <li className={s.ideaItemStyle}>
      <div className={s.titleInfo}>
        <div>
          <span className={s.userName}>
            {userInfo?.user_metadata.user_name || "Unknown User"}
          </span>
          <span className={s.createdAtText}>
            {item.created_at.substring(0, 10)}
          </span>
        </div>
        <div>
          <CiMenuKebab className={s.kebabIcon} />
        </div>
      </div>
      <div>{item.contents}</div>
    </li>
  )
}

export default IdeaItem
