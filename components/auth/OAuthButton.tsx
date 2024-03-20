"use client"

import * as s from "./Auth.css"

import Image from "next/image"

const getImageSize = (type: string) => {
  if (type.includes("apple.png")) {
    return { width: 45, height: 30 }
  } else {
    return { width: 30, height: 30 }
  }
}

const OAuthButton = ({ type }: { type: string }) => {
  const { width, height } = getImageSize(type)

  return (
    <button className={s.oAuthButtonStyle}>
      <Image src={type} alt='logo image' width={width} height={height} />
    </button>
  )
}

export default OAuthButton
