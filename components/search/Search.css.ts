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
  f.flex,
  f.directionColumn,
  {
    left: "50%",
    top: "50%",
    width: "500px",
    height: "700px",
    padding: "16px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.9)",
    borderRadius: "10px",
    "@media": {
      "screen and (max-width: 480px)": {
        width: "100%",
        height: "100%",
        borderRadius: "0px"
      }
    }
  }
])

export const searchBookInfoWrap = style([
  f.flex,
  {
    height: "50%",
    maxHeight: "300px",
    marginTop: "20px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    "@media": {
      "screen and (max-width: 480px)": {
        flexDirection: "column",
        alignItems: "center",
        height: "70%",
        maxHeight: "500px",
        marginTop: "0px"
      }
    }
  }
])

export const searchMenuAndTextWrap = style([
  f.flex,
  {
    "@media": {
      "screen and (max-width: 480px)": {
        marginTop: "10px"
      }
    }
  }
])

export const searchBookTextWrap = style([
  f.flex,
  f.directionColumn,
  f.justifyCenter,
  {
    width: "220px",
    marginLeft: "10px"
  }
])

export const registerPopUpTitle = style({
  paddingBottom: "6px",
  margin: "10px 0",
  fontSize: "30px",
  textAlign: "center",
  borderBottom: "1px solid rgba(0,0,0,0.1)"
})

export const menuWrap = style([
  f.flex,
  f.directionColumn,
  f.justifyCenter,
  { width: "70px", height: "100%", marginLeft: "20px" }
])

export const searchBookCategory = style({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
})

export const checkBoxWrap = style([
  f.flex,
  f.directionColumn,
  {
    padding: "10px 0",
    height: "250px"
  }
])

export const checkboxSubWrap = style([
  f.flex,
  f.alignCenter,
  {
    marginBottom: "20px"
  }
])

export const checkBoxLabel = style({
  fontSize: "18px"
})

export const checkBoxInput = style({
  width: "16px",
  height: "16px",
  marginRight: "10px"
})

export const readCountBoxWrap = style([
  f.flexCenterBox,
  {
    marginLeft: "100px"
  }
])

export const readCountInput = style({
  width: "100px",
  textAlign: "end"
})

export const readCountText = style({
  margin: "4px 0px 0px 10px"
})

export const closeIcon = style({
  position: "absolute",
  right: "25px",
  top: "25px",
  width: "20px",
  height: "20px"
})
