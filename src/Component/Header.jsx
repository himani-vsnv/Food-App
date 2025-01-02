import React, { useState } from 'react'
import { Logo_Url } from '../utility/constant';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-md bg-white">
      {/* Logo */}
      <div className="w-20">
        <img src={Logo_Url} alt="logo" />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-900"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block shadow-lg" : "hidden shadow-none"
        } absolute top-16 right-0  bg-white w-40 md:static md:flex md:w-auto md:gap-4 md:items-center`}
      >
        <ul className="flex flex-col gap-4 p-4 md:flex-row md:gap-8">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500">
              Cart
            </Link>
          </li>
          <li>
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-900">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
//   return (
//     <div className='flex justify-between items-center px-2 shadow-md'>
//       <div className='w-20 p-2'>
//         <img src={Logo_Url} alt='logo'/>
//       </div>
//       <div className='flex pr-4'>
//         <ul className='flex gap-4 p-2'>
//             <Link to='/'>Home</Link>
//             <Link to='/about'>About</Link>
//             <Link to='/contact'>Contact</Link>
//             <Link to=''>Cart</Link>
//             <button >Login</button>
//         </ul>
//       </div>
//     </div>
//   )
// }

export default Header;
