import React from 'react'
import { Logo_Url } from '../utility/constant';

const Header = props => {
  return (
    <div className='flex justify-between items-center px-2 shadow-md'>
      <div className='w-20 p-2'>
        <img src={Logo_Url} alt='logo'/>
      </div>
      <div className='flex pr-4'>
        <ul className='flex gap-4 p-2'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
