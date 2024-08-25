'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './index.scss';
import ServiceItem from './item';

export default function FooterService() {
  return (
    <Swiper
        slidesPerView={6}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >

        <SwiperSlide>
            <ServiceItem image='/images/services/1.svg' title='راهنمای خرید' />
        </SwiperSlide>
        <SwiperSlide>
            <ServiceItem image='/images/services/2.svg' title='7 روز ضمانت' />      
        </SwiperSlide>
        <SwiperSlide>
            <ServiceItem image='/images/services/3.svg' title='خرید اقساطی' />      
        </SwiperSlide>
        <SwiperSlide>
            <ServiceItem image='/images/services/4.svg' title='مقایسه' />
        </SwiperSlide>
        <SwiperSlide>
            <ServiceItem image='/images/services/5.svg' title='ارسال به سراسر کشور' />
        </SwiperSlide>
        <SwiperSlide>
            <ServiceItem image='/images/services/1.svg' title='تضمین اصالت کالا' />
        </SwiperSlide>
    </Swiper>
  );
}
  
