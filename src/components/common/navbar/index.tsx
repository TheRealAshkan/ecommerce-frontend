import Link from 'next/link';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { FaPhoneAlt, FaQuestion } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import MegaMenu from '../mega_menu';
import './index.scss'

export default function Navbar() {
  return (
   <>
        <ul className='navbar'>
          
          <MegaMenu />
          
          <li className='center_navbar'>
            <Link href={'/'}>
              <RiDiscountPercentLine className='navbar_svg'/>
              <span>پیشنهاد و تخفیف</span>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <FaQuestion className='navbar_svg' />
              <span>سوالات متداول</span>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <IoIosInformationCircleOutline className='navbar_svg' />
              <span>درباره ما</span>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <FaPhoneAlt className='navbar_svg' />
              <span>تماس با ما</span>
            </Link>
          </li>

          <li className='end_navbar'>
            <Link href={'/'} className='contact_me'>
              <p className='text'>با ما تماس بگیرید</p>
              <p className='phone'>09138456123</p>
            </Link>
          </li>
        </ul>
   </>
  );
}
  