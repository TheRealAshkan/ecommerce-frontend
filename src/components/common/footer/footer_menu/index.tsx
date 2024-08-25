'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './index.scss';
import FooterItem from './item';
type Props = {
    title ?: string,
    menu_items ?: [string]
}
export default function FooterMenu(props: Props) {
  return (
   <div className='footer_menu'>
       <h4>{props?.title}</h4>
       <ul>
         {props.menu_items && props.menu_items.map((item, index) => <>
            <FooterItem title={item} key={index} />
         </>)}
       </ul>
   </div>
  );
}
  
