import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./BookSwiper.css"

import { Item } from "@/interfaces/auth/book"
import SwiperCore from "swiper"
import { Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BookItem from "../book/BookItem"

interface BookSwiperProps {
  item: Item[]
}

const BookSwiper = ({ item }: BookSwiperProps) => {
  SwiperCore.use([Navigation, Scrollbar])

  return (
    <div className='swiper-container'>
      <div style={{ padding: "10px 20px" }}>
        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={5}
          navigation={true}
          // autoplay={{
          //   delay: 4500,
          //   disableOnInteraction: false
          // }}
        >
          {item.map((book) => (
            <SwiperSlide key={book.itemId}>
              <BookItem book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BookSwiper
