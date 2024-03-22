import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"

export const detailBookTitle = style({
  marginBottom: "20px",
  fontSize: "30px",
  fontWeight: "bold"
})

export const subTitle = style({
  marginBottom: "20px",
  fontSize: "24px",
  fontWeight: "700"
})

export const detailBookAndIdeaWrap = style([
  f.flex,
  f.justifyBetween,
  {
    paddingBottom: "20px",
    marginBottom: "40px",
    borderBottom: "1px solid rgba(0,0,0,0.2)"
  }
])

export const detailBookWrap = style([f.flex, f.directionColumn])

export const detailBookImageAndInfoWrap = style([f.flex])

export const detailBookInfoWrap = style([f.flexCenterBox])

export const detailBookInfoMenuWrap = style([
  f.flex,
  f.directionColumn,
  { height: "100%", padding: "10px", marginLeft: "20px", fontSize: "18px" }
])

export const detailBookInfoTextWrap = style([
  f.flex,
  f.directionColumn,
  {
    maxWidth: "400px",
    height: "100%",
    padding: "10px",
    marginLeft: "20px",
    fontSize: "18px"
  }
])

export const ideaBoxWrap = style({
  width: "400px",
  padding: "6px 6px 6px 20px",
  borderLeft: "1px solid rgba(0,0,0,0.2)"
})

export const ideaTextArea = style({
  width: "100%",
  height: "150px",
  marginBottom: "10px",
  padding: "10px",
  fontSize: "16px"
})

export const bookReviewWrap = style({
  width: "100%"
})

export const bookReviewTextArea = style({
  width: "100%",
  height: "250px",
  marginBottom: "10px",
  padding: "10px",
  fontSize: "16px"
})

export const bookReviewTitleWrap = style([
  f.flex,
  f.justifyBetween,
  {
    paddingRight: "20px"
  }
])

export const deleteIcon = style({
  width: "30px",
  height: "30px",
  cursor: "pointer"
})
