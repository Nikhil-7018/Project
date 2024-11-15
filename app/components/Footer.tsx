import React from "react";  
import Link from "next/link";

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <ul className="flex justify-center space-x-4">
          <li className='hover:text-teal-400'>
            <Link href="/privacy">
              Privacy
            </Link>
          </li>
          <li className='hover:text-teal-400'>
            <Link href="/terms">
              Terms of Service
            </Link>
          </li>
          <li className='hover:text-teal-400'>
            <Link href="/contact">
              Contact 
            </Link>
          </li>
          <li className='hover:text-teal-400'>
            <Link href="/Customer support">
              Customer Support
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
