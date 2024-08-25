'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaRegUser } from 'react-icons/fa'
import Link from 'next/link';
import Button from '../ui/button';
import './index.scss'


export default function AuthButton() {
  const isAuth = true;

  if(isAuth) {
    return (
      <Menu>
        <MenuButton className="btn-secondary btn-auth">
          <FaRegUser className='svg' />
        </MenuButton>
        <MenuItems className="auth_menu" anchor="bottom">
            <MenuItem>
              <Link href={'/'}>
              اشکان مهدی زاده
              </Link>
            </MenuItem>
        </MenuItems>
      </Menu>
    )
  } else {
    return (
      <Button className="btn-secondary btn-auth">
        <FaRegUser className='svg' />
      </Button>
    )
  }
  
}