'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import './home_slider.scss'
export default function HomeSlider() {
  return (
      <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide><Image src={'/images/home_slider/1.jpg'} alt='1' width={1500} height={400} /></SwiperSlide>
          <SwiperSlide><Image src={'/images/home_slider/2.jpg'} alt='1' width={1500} height={400} /></SwiperSlide>
      </Swiper>
  );
}
  
