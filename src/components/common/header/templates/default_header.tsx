import AuthButton from '@/components/auth/auth_button';
import Logo from '@/components/common/logo';
import Search from '@/components/common/search';
import CartButton from '@/components/cart/cart_button';
import Navbar from '@/components/common/navbar';

import './default_header.scss';

export default function DefaultHeader() {
  return (
    <header className="default_header">
      <div className="container">
        <div className='header_content'>
          <Logo />
          <Search />
          <div className='left_header'>
            <AuthButton />
            <CartButton />
          </div>
          
        </div>
      </div>
      <div className='header_bottom'>
        <div className='container'>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
  