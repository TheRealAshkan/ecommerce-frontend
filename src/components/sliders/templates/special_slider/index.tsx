'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

export default function SpecialSlider() {
  return (
   <div className='container'>
        <Swiper
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><Image src={'/images/products/1.jpg'} alt='1' width={300} height={300} /></SwiperSlide>
            <SwiperSlide><Image src={'/images/products/2.jpg'} alt='1' width={300} height={300} /></SwiperSlide>
            <SwiperSlide><Image src={'/images/products/3.jpg'} alt='1' width={300} height={300} /></SwiperSlide>
            <SwiperSlide><Image src={'/images/products/4.jpg'} alt='1' width={300} height={300} /></SwiperSlide>
            <SwiperSlide><Image src={'/images/products/5.jpg'} alt='1' width={300} height={300} /></SwiperSlide>
        </Swiper>
   </div>
  );
}
  
