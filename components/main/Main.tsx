"use client"

import { supabase } from "@/utils/supabase/client"
import { useEffect } from "react"

const Main = () => {
  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser()

      console.log(user)
    }

    getUser()
  }, [])

  return <div>Main</div>
}

export default Main
