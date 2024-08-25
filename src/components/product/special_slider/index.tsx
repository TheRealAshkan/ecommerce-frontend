'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import './index.scss'
import MainProductBox from '../product_box/main_product_box';
export default function SpecialSlider() {
  return (
   <div className='spcial_slider'>
        <Swiper
          spaceBetween={35}
            slidesPerView={7}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
              <Image src={'/images/special.svg'} width={100} height={100} alt='specials' />
              <p>شگفت انگیز های امروز</p>
            </SwiperSlide>
            <SwiperSlide>
              <MainProductBox 
                name='محصول 1'
                image='/images/products/1.jpg'
                price={200000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainProductBox 
                name='محصول 2'
                image='/images/products/2.jpg'
                price={900000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainProductBox 
                name='محصول 3'
                image='/images/products/3.jpg'
                price={240000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainProductBox 
                name='محصول 4'
                image='/images/products/4.jpg'
                price={1200000}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MainProductBox 
                name='محصول 5'
                image='/images/products/5.jpg'
                price={34000}
              />
            </SwiperSlide>
        </Swiper>
   </div>
  );
}
  
