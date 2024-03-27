import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"

export const kebabWrap = style([
  f.pAbsolute,
  f.flex,
  f.justifyAround,
  f.directionColumn,
  {
    right: "16px",
    top: "0px",
    width: "50px",
    height: "80px",
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.6)"
  }
])

export const modifyTextBoxWrap = style([
  f.pAbsolute,
  {
    right: "0px",
    top: "0px",
    width: "100%",
    height: "300px",
    padding: "10px",
    border: "1px solid rgba(0,0,0,0.6)",
    backgroundColor: "white",
    zIndex: "20"
  }
])

export const spanText = style({
  cursor: "pointer"
})

export const textAreaStyle = style({
  width: "100%",
  height: "85%",
  padding: "10px"
})

export const modifyAndDeleteTextWrap = style([
  f.flex,
  f.justifyEnd,
  {
    width: "100%"
  }
])

export const modifyAndCancelButtonWrap = style([
  f.flex,
  f.justifyBetween,
  {
    width: "100px",
    height: "40px",
    padding: "10px",
    fontSize: "18px"
  }
])
