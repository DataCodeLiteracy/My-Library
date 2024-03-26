import { style } from "@vanilla-extract/css"

export const CategoryListContainer = style({
  margin: "30px 0",
  padding: "10px 20px",
  "@media": {
    "screen and (max-width: 480px)": {
      padding: "10px 10px"
    }
  }
})

export const CategoryListTitle = style({
  fontSize: "30px",
  marginBottom: "16px"
})
