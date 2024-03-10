import React, { useEffect,useState } from 'react';
import {
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import Logo from '/assets/phrog.jpg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import '../styles/highlight.css';


function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const handleEmailIconClick = () => {
    scroll.scrollToBottom();
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  
    
    return (
      <div>
      <button className="lg:hidden fixed top-0 left-0 mt-4 ml-4" onClick={handleToggle}>
        <FaBars />
      </button>
      <div className={`${isActive ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed left-0 top-40 h-full bg-transparent transition-transform duration-200 ease-in-out`}>
        {/* Social icons */}
        <ul>
        <li className='w-[175px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 transition-all duration-500 ease-in-out hover:opacity-100 transform hover:px-10'>            
            <a
              className='flex justify-around items-center w-full text-gray-300'
              href='http://linkedin.com/in/jackhww'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        <li className='w-[175px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 transition-all duration-500 ease-in-out hover:opacity-100 transform hover:px-10'>            
            <a
              className='flex justify-around items-center w-full text-gray-300'
              href='http://github.com/jackhww'
            >
              Github <FaGithub size={30} />
            </a>
        </li>
        <li 
          className='w-[175px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 transition-all duration-500 ease-in-out hover:opacity-100 transform hover:px-10'
        >            
          <Link
            to='contact'
            spy={true}
            smooth = {true}
            offset={-70}
            duration = {500}
            className='flex justify-around items-center w-full text-gray-300 cursor-pointer'
            onClick={handleEmailIconClick}
          >
            Email
            <div><HiOutlineMail size={30} /></div>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default NavBar;
