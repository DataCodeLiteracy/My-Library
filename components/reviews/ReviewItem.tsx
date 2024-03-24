import * as s from "./Review.css"

import { CiMenuKebab } from "react-icons/ci"
import { ReviewItem } from "@/interfaces/auth/book"
import { supabase } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

interface ReviewItemProps {
  item: ReviewItem
}

interface UserMetadata {
  user_name?: string
}

interface CustomUser {
  user_metadata: UserMetadata
}

const ReviewItem = ({ item }: ReviewItemProps) => {
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
    <li className={s.reviewItemStyle}>
      <div className={s.titleInfo}>
        <div>
          <span className={s.userName}>
            {userInfo?.user_metadata.user_name || "Unknown User"}
          </span>
          <span className={s.createdAtText}>
            {item.created_at.substring(0, 10)} |{" "}
            {item.created_at.substring(14, 22)}
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

export default ReviewItem
