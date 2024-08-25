'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import './home_slider.scss'

type Props = {
    
}

export default function Slider() {
  return (
   <div className='container'>
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><Image src={'/images/home_slider/1.jpg'} alt='1' width={1200} height={400} /></SwiperSlide>
            <SwiperSlide><Image src={'/images/home_slider/2.jpg'} alt='1' width={1200} height={400} /></SwiperSlide>
        </Swiper>
   </div>
  );
}
  
