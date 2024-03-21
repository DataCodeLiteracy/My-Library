import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"

export const BookListStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "16px"
})

export const BookInfoWrap = style([f.flex, f.justifyCenter, f.directionColumn])

export const BookTitle = style({
  width: "220px",
  marginBottom: "6px",
  fontSize: "18px",
  fontWeight: "bold",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
})

export const BookCategory = style({
  marginBottom: "6px"
})

export const BookAuthor = style({
  width: "220px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
})

export const BookItem = style({
  cursor: "pointer"
})
