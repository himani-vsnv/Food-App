import React from 'react'
import { Logo_Url } from '../utility/constant';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className='flex justify-between items-center px-2 shadow-md'>
      <div className='w-20 p-2'>
        <img src={Logo_Url} alt='logo'/>
      </div>
      <div className='flex pr-4'>
        <ul className='flex gap-4 p-2'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to=''>Cart</Link>
            <button >Login</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;
