import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./BookSwiper.css"

import BookItem from "@/components/shared/book/BookItem"

import { MyBookInfo } from "@/interfaces/auth/book"

import SwiperCore from "swiper"
import { Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

interface BookSwiperProps {
  item: MyBookInfo[] | undefined
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
        >
          {item?.map((book) => (
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
