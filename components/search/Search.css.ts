import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"

export const searchListContainer = style({
  padding: "20px"
})

export const keywordTitle = style({
  padding: "10px",
  fontSize: "30px",
  color: "rgba(0,0,0,0.5)"
})

export const keyword = style({
  fontWeight: "bold",
  color: "black"
})

export const registerPopUpContainer = style([
  f.pAbsolute,
  {
    left: "50%",
    top: "50%",
    width: "500px",
    height: "700px",
    padding: "16px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "10px"
  }
])
