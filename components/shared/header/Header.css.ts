import { f } from "@/styles/functions"
import { style } from "@vanilla-extract/css"

export const nav = style([
  f.flex,
  f.justifyBetween,
  {
    padding: "10px 20px",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    "@media": {
      "screen and (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "center"
      }
    }
  }
])

export const leftBox = style([
  f.flex,
  {
    width: "60%",
    "@media": {
      "screen and (max-width: 768px)": {
        width: "100%",
        justifyContent: "space-between"
      },
      "screen and (max-width: 480px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "250px"
      }
    }
  }
])
export const rightBox = style([
  f.flexCenterBox,
  {
    "@media": {
      "screen and (max-width: 480px)": {
        flexDirection: "column",
        height: "80px"
      },
      "screen and (max-width: 768px)": {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }
  }
])

export const ImageLink = style({
  "@media": {
    "screen and (max-width: 480px)": {
      margin: "0px 0px 20px 20px"
    }
  }
})

export const logo = style({ marginRight: "20px" })

export const buttons = style([
  f.flex,
  f.justifyAround,
  f.pRelative,
  {
    width: "80%",
    "@media": {
      "screen and (max-width: 480px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
      },
      "screen and (max-width: 768px)": {
        width: "100%",
        justifyContent: "space-around"
      }
    }
  }
])

export const button = style({
  "@media": {
    "screen and (max-width: 480px)": {
      padding: "5px",
      width: "100%",
      border: "1px solid rgba(0,0,0,0.2)",
      selectors: {
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.2)"
        }
      }
    },
    "screen and (max-width: 768px)": {}
  }
})

export const inputWrap = style([
  f.flex,
  f.alignCenter,
  {
    marginRight: "20px",
    "@media": {
      "screen and (max-width: 768px)": {
        width: "50%"
      },
      "screen and (max-width: 480px)": {
        justifyContent: "center",
        width: "100%",
        margin: "0px 0px 20px 0px"
      }
    }
  }
])

export const searchInput = style({
  width: "300px",
  height: "35px",
  padding: "0px 20px",
  border: "none",
  borderRadius: "10px",
  outline: "none",
  backgroundColor: "rgba(0,0,0,0.14)",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%"
    },
    "screen and (max-width: 1024px)": {
      width: "250px"
    },
    "screen and (max-width: 480px)": {
      width: "350px"
    }
  }
})

export const searchForm = style({
  position: "relative"
})

export const icon = style({
  position: "absolute",
  top: "7px",
  right: "10px"
})

export const subCategoryWrap = style([
  f.flexCenterBox,
  f.directionColumn,
  f.pAbsolute,
  {
    left: "30px",
    top: "40px",
    padding: "10px",
    border: "1px solid rgba(0,0,0,0.5)",
    backgroundColor: "white",
    lineHeight: "30px",
    zIndex: "100",
    "@media": {
      "screen and (max-width: 480px)": {
        left: "0px",
        top: "0px"
      }
    }
  }
])

export const subCategoryButton = style({
  selectors: {
    "&:hover": {
      borderBottom: "1px solid rgba(0,0,0,0.3)"
    }
  }
})
