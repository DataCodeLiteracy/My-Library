import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"

export const BookListStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "16px",
  placeItems: "center",
  "@media": {
    "screen and (max-width: 480px)": {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    "screen and (min-width: 481px)": {
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)"
    },
    "screen and (min-width: 1028px)": {
      gridTemplateColumns: "repeat(4, 1fr)"
    },
    "screen and (min-width: 1280px)": {
      gridTemplateColumns: "repeat(5, 1fr)"
    }
  }
})

export const BookInfoWrap = style([f.flex, f.justifyCenter, f.directionColumn])

export const BookTitle = style({
  width: "220px",
  marginBottom: "6px",
  fontSize: "18px",
  fontWeight: "bold",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "145px",
      fontSize: "15px",
      marginTop: "8px"
    }
  }
})

export const BookCategory = style({
  marginBottom: "6px",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "145px",
      fontSize: "15px"
    }
  }
})

export const BookAuthor = style({
  width: "220px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "150px",
      fontSize: "15px"
    }
  }
})

export const BookItem = style({
  cursor: "pointer",
  paddingRight: "10px"
})

export const ImageContainer = style({
  position: "relative",
  width: "220px",
  height: "270px",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "145px",
      height: "200px"
    }
  }
})

export const ImageStyle = style({})
