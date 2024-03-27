import { style } from "@vanilla-extract/css"
import { f } from "@/styles/functions"
import { justifyBetween } from "@/styles/functions/f.css"

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
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    "@media": {
      "screen and (max-width: 1200px)": {
        flexDirection: "column"
      }
    }
  }
])

export const detailBookWrap = style([
  f.flex,
  f.directionColumn,
  {
    "@media": {
      "screen and (max-width: 768px)": {
        height: "650px"
      },
      "screen and (max-width: 480px)": {
        height: "700px",
        borderBottom: "1px solid rgba(0,0,0,0.2)"
      }
    }
  }
])

export const detailBookImageAndInfoWrap = style([
  f.flex,
  {
    "@media": {
      "screen and (max-width: 768px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "650px"
      },
      "screen and (max-width: 480px)": {
        height: "650px"
      }
    }
  }
])

export const detailBookInfoWrap = style([
  f.flexCenterBox,
  {
    "@media": {
      "screen and (max-width: 768px)": {
        height: "300px"
      },
      "screen and (max-width: 480px)": {
        height: "500px"
      }
    }
  }
])

export const detailBookInfoMenuWrap = style([
  f.flex,
  f.directionColumn,
  {
    height: "100%",
    padding: "10px",
    marginLeft: "20px",
    fontSize: "18px",
    "@media": {
      "screen and (max-width: 900px)": {
        marginLeft: "8px"
      },
      "screen and (max-width: 480px)": {
        height: "450px"
      }
    }
  }
])

export const detailBookInfoTextWrap = style([
  f.flex,
  f.directionColumn,
  {
    maxWidth: "375px",
    height: "100%",
    padding: "10px 4px",
    marginLeft: "20px",
    fontSize: "18px",
    "@media": {
      "screen and (max-width: 900px)": {
        maxWidth: "350px",
        marginLeft: "10px"
      },
      "screen and (max-width: 480px)": {
        maxWidth: "220px",
        height: "450px",
        marginLeft: "10px"
      }
    }
  }
])

export const ideaBoxWrap = style({
  width: "400px",
  padding: "6px 6px 6px 20px",
  borderLeft: "1px solid rgba(0,0,0,0.2)",
  "@media": {
    "screen and (max-width: 1200px)": {
      width: "100%",
      marginTop: "10px",
      borderLeft: "0px"
    },
    "screen and (max-width: 768px)": {
      marginTop: "30px"
    },
    "screen and (max-width: 480px)": {
      marginTop: "30px"
    }
  }
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

export const ImageContainer = style({
  position: "relative",
  width: "320px",
  height: "400px",
  "@media": {
    "screen and (max-width: 900px)": {
      width: "300px",
      height: "400px"
    },
    "screen and (max-width: 768px)": {
      width: "240px",
      height: "300px"
    },
    "screen and (max-width: 480px)": {
      width: "180px",
      height: "240px"
    }
  }
})

export const buttonsWrap = style([f.flex, f.justifyBetween])

export const whiteButtonStyle = style([
  {
    height: "44px",
    width: "49%",
    padding: "10px",
    margin: "10px 0px",
    fontSize: "13px",
    color: "#E191FD",
    border: "1px solid #E191FD",
    borderRadius: "10px",
    backgroundColor: "white"
  }
])
