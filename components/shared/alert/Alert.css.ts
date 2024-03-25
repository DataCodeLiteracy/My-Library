import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"

export const alertContainer = style([
  f.pAbsolute,
  {
    width: "35%",
    maxWidth: "600px",
    minHeight: "180px",
    padding: "10px 20px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    zIndex: "22"
  }
])

export const alertButton = style([
  f.wFull,
  {
    minHeight: "100px",
    height: "44px",
    padding: "10px",
    marginBottom: "6px",
    fontSize: "18px",
    color: "#E191FD"
  }
])

export const alertFirstWrap = style([
  f.flexCenterBox,
  f.directionColumn,
  f.hFull,
  {
    textAlign: "center"
  }
])

export const alertSecondWrap = style([
  f.flexCenterBox,
  f.directionColumn,
  {
    minHeight: "115px"
  }
])

export const alertTitle = style({
  fontSize: "18px",
  margin: "10px 0"
})

export const alertDescription = style({
  fontSize: "13px",
  marginBottom: "10px"
})

export const alertButtonWrap = style([
  f.flexCenterBox,
  f.wFull,
  {
    height: "55px",
    borderTop: "1px solid rgba(0,0,0,0.2)"
  }
])
