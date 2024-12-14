

import React from 'react'

const Header = props => {
  return (
    <div className='flex justify-between items-center px-2 shadow-md'>
      <div className='w-20 p-2'>
        <img src="https://img.freepik.com/premium-vector/logo-food-company-that-says-
        sun-sun-sunflower_917213-253424.jpg?semt=ais_hybrid" alt='logo'/>
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
