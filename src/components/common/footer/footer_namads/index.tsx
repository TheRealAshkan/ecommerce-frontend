'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './index.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterNamads() {
  return (
   <div className='footer_namads'>
      <Link href="/">
        <Image src={'/images/namads/1.jpg'} alt='a' width={100} height={100} />
      </Link>      
      <Link href="/">
        <Image src={'/images/namads/2.png'} alt='a' width={100} height={100} />
      </Link>      
      <Link href="/">
        <Image src={'/images/namads/3.png'} alt='a' width={100} height={100} />
      </Link>      
   </div>
  );
}
  
