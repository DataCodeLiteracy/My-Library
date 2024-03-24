import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"

export const ideaItemStyle = style([
  f.pRelative,
  {
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid rgba(0,0,0,0.2)"
  }
])

export const titleInfo = style([
  f.flex,
  f.justifyBetween,
  {
    paddingBottom: "10px",
    marginBottom: "20px"
  }
])

export const userName = style({
  fontSize: "20px",
  fontWeight: "500",
  marginRight: "20px"
})

export const createdAtText = style({
  fontSize: "16px"
})

export const kebabIcon = style({
  width: "20px",
  height: "20px",
  cursor: "pointer"
})

export const kebabIconWrap = style([f.pRelative])
