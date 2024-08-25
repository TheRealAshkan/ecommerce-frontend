'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import './index.scss';

export default function CategorySlider() {
  return (
   <div className='container category_slider'>
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
              <div className='box_style_one'>
                <Image src={'/images/categories/1.png'} alt='1' width={100} height={100} />
                <p>تست</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='box_style_one'>
                <Image src={'/images/categories/2.png'} alt='1' width={100} height={100} />
                <p>تست</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='box_style_one'>
                <Image src={'/images/categories/3.png'} alt='1' width={100} height={100} />
                <p>تست</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='box_style_one'>
                <Image src={'/images/categories/1.png'} alt='1' width={100} height={100} />
                <p>تست</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='box_style_one'>
                <Image src={'/images/categories/3.png'} alt='1' width={100} height={100} />
                <p>تست</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='box_style_one'>
                <Image src={'/images/categories/2.png'} alt='1' width={100} height={100} />
                <p>تست</p>
              </div>
            </SwiperSlide>
        </Swiper>
   </div>
  );
}
  
