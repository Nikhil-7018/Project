
import React from 'react';
import Link from 'next/link';
// import Image from '../navbar.svg';
const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
       <Link href="#">
        <span className="text-white text-l font-bold cursor-pointer">Your Brand</span>
      </Link>
      <ul className="flex space-x-4 justify-center">
        <li className='hover:text-red-600'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='hover:text-red-600'>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className='hover:text-red-600'>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
       <ul className='flex space-x-3 justify-end'>
        <li>
          <Link href='/login'>
          Login
          </Link>
        </li>
        <li>
        <Link href='/signup'>
          Signup
          </Link>
        </li>
       </ul>
       
    </nav>
    
  );
};

export default NavBar;
