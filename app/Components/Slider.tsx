'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
const Slider = () => {
  return (
       <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={600}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image className='w-full md:h-[520px] h-[330px] ' src='/SliderImages/slide1.jpg' alt='slide 2' width={1000} height={1000} /></SwiperSlide>
        <SwiperSlide><Image className='w-full md:h-[520px] h-[330px] ' src='/SliderImages/slide4.jpg' alt='slide 2' width={1000} height={1000} /></SwiperSlide>
        <SwiperSlide><Image className='w-full md:h-[520px] h-[330px] ' src='/SliderImages/slide9.jpg' alt='slide 2' width={1000} height={1000} /></SwiperSlide>
        <SwiperSlide><Image className='w-full md:h-[520px] h-[330px] ' src='/SliderImages/slide8.jpg' alt='slide 2' width={1000} height={1000} /></SwiperSlide>
        <SwiperSlide><Image className='w-full md:h-[520px] h-[330px] ' src='/SliderImages/slide3.jpg' alt='slide 1' width={1000} height={1000} /></SwiperSlide>
      </Swiper>
  )
}

export default Slider
