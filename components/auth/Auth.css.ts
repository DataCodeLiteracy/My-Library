import { f } from "@/styles/functions"
import { style } from "@vanilla-extract/css"

export const authPageContainer = style([f.flexCenterBox, f.hScreen])
export const authPageHeader = style({
  margin: "6px auto"
})
export const authPageDivider = style([
  f.flexCenterBox,
  {
    margin: "6px 0px 10px 0px"
  }
])
export const authPageFooter = style([
  f.flexCenterBox,
  f.wFull,
  {
    marginBottom: "10px"
  }
])

export const authSectionDefault = style([
  f.flexCenterBox,
  f.hFull,
  {
    "@media": {
      "screen and (max-width: 480px)": {
        width: "100%"
      },
      "screen and (min-width: 481px)": {
        width: "400px"
      }
    }
  }
])

export const authPageWrapper = style([
  f.flex,
  f.directionColumn,
  f.wFull,
  {
    padding: "0 20px",
    borderRadius: "20px",
    boxShadow:
      "0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 24px rgba(17, 17, 26, 0.1), 0px 16px 56px rgba(17, 17, 26, 0.1)",
    "@media": {
      "screen and (max-width: 480px)": {
        height: "100%"
      }
    }
  }
])

export const validationText = style({
  color: "red",
  fontSize: "12px",
  marginLeft: "10px",
  marginBottom: "6px"
})

export const inputStyle = style([
  f.wFull,
  {
    height: "44px",
    padding: "10px",
    marginBottom: "6px",
    fontSize: "14px",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "10px",
    backgroundColor: "rgba(150,226,250,0.3)",
    outline: "none",
    "::placeholder": {
      fontSize: "12px"
    }
  }
])

export const oAuthButtonWrap = style([
  f.flex,
  f.justifyCenter,
  f.wFull,
  { marginBottom: "10px" }
])

export const oAuthButtonStyle = style([
  f.flexCenterBox,
  {
    width: "40px",
    height: "40px",
    margin: "0px 30px",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: "100%"
  }
])

export const authDividerLine = style({
  width: "42%",
  height: "1px",
  backgroundColor: "rgba(0,0,0,0.3)"
})

export const authDividerText = style({
  margin: "0px 8px",
  fontSize: "12px"
})
