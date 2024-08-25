'use client'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import { FaOpencart } from 'react-icons/fa'
import 'react-modern-drawer/dist/index.css'
import './index.scss'

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <>
      <button className='btn-secondary btn-cart' onClick={toggleDrawer}>
        <FaOpencart className='svg' />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bla bla bla'
      >
        <div>
          سبد خرید
        </div>
      </Drawer>
    
    </>
  )
}