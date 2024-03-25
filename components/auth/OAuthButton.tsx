"use client"

import * as s from "./Auth.css"

import Image from "next/image"

import { supabase } from "@/utils/supabase/client"

const getImageSize = (type: string) => {
  if (type.includes("apple.png")) {
    return { width: 45, height: 30 }
  } else {
    return { width: 30, height: 30 }
  }
}

const OAuthButton = ({ type }: { type: string }) => {
  const { width, height } = getImageSize(type)

  const handleOAuthLogin = async () => {
    if (type === "/images/google.png") {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google"
      })
    }

    if (type === "/images/kakao.png") {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "kakao"
      })
    }
  }

  return (
    <button className={s.oAuthButtonStyle} onClick={handleOAuthLogin}>
      <Image src={type} alt='logo image' width={width} height={height} />
    </button>
  )
}

export default OAuthButton
