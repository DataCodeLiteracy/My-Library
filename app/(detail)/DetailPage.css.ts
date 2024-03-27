import { style } from "@vanilla-extract/css"

export const DetailPageSection = style({
  margin: "20px 0",
  padding: "20px",
  "@media": {
    "screen and (max-width: 480px)": {
      padding: "10px"
    }
  }
})
