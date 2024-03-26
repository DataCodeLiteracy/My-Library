import { globalStyle } from "@vanilla-extract/css"

globalStyle(".swiper-slide", {
  display: "flex",
  justifyContent: "center",
  margin: "auto"
})

globalStyle(".swiper-button-prev", {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  marginLeft: "-10px",
  border: "1px solid rgba(0,0,0,0.1)",
  top: "50%",
  transform: "translateY(-60%)",
  backgroundColor: "white"
})

globalStyle(".swiper-button-prev::after", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  color: "gray",
  borderRadius: "100%",
  fontSize: "13px"
})

globalStyle(".swiper-button-next", {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "1px solid rgba(0,0,0,0.1)",
  top: "50%",
  transform: "translateY(-60%)",
  backgroundColor: "white"
})

globalStyle(".swiper-button-next::after", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  color: "gray",
  borderRadius: "100%",
  fontSize: "13px"
})
