"use client"
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

import { FiFacebook,FiTwitter,FiLinkedin } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import logo from '../assets/images/loggo.png';
import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png'
const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { path: '/', name: 'الصفحة الرئيسية' },
    { path: '/about', name: 'من نحن' },
    { path: '/services', name: 'الخدمات' },
    { path: '/products', name: 'المنتجات' },
    { path: '/works', name: 'اعمالنا' },
    { path: '/contact', name: 'تواصل معنا' },
  ];

  return (
    <header className="bg-white shadow-md w-full ">
      {/*top-header*/}
      <div className='lg:px-10 px-4  ' >
        <div className='lg:flex  hidden items-center justify-between gap-6 font-sans'>
          
        <div className='flex lg:flex-row flex-col items-center justify-between gap-4'>
          <div className='flex  items-center gap-x-3'>
              <Image src={phone} alt="phone" className='w-10 h-10'/>
              <span className='text-blue'> (+2) 01006563389</span>
            </div>
            <div className='flex  items-center gap-x-3'>
            <Image src={email} alt="email" className='w-10 h-10'/>
             <span className='text-blue'> M.Elhilaly@IST-Grp.com</span>
            </div>

          </div>

         
               {/*logo*/}
          <div className='flex items-center justify-center ml-[90px] text-center'>
            <Image src={logo} alt="logo" className='max-w-[100px]'/>

          </div>



 {/*links*/}
 <div className='flex  items-center justify-between space-x-4 '>
       
            <div>
            <Link href="">
            <FiLinkedin size={40} 
            className='bg-orange text-white rounded-full p-2 ml-4'/>         
                </Link>


                
            </div>

            <div>
            <Link href="" >
            
              <FiFacebook size={40} className='bg-orange text-white rounded-full p-2' />
             </Link>
            </div>

            <div>
            <Link href="">
            <FiTwitter size={40} className='bg-orange text-white rounded-full p-2'/>  
                      </Link>
            </div>

          </div>
        </div>
      </div>
      {/*main-header*/}
      <nav className="bg-blue p-4 ">
  <div className="container mx-auto flex justify-center items-center gap-x-5">
    <ul className="lg:flex space-x-4 font-Changa hidden">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link href={item.path}
           className={`ml-5 text-[1.5625rem] ${pathname === item.path ? 'text-orange' : 'text-white'}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>



  <div className="lg:hidden flex justify-between ">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:text-gray-600 text-naturalGray "
          >
            {menuOpen ? (<AiOutlineClose className='h-6 w-6 text-white  ' />) : (<AiOutlineMenu className="  h-6 w-6 text-white " />)}
          </button>
          <Image src={logo} alt="logo" className='w-[100px] h-auto'/>
        </div>
<div
  className={`bg-orange mt-16 py-7 px-4 space-y-4 ${
    menuOpen ? 'block fixed top-[30px] left-0 right-0' : 'hidden'
  }`}
>
  {navItems.map((item, index) => (
    <a
      key={index}
      href={item.path}
      className={`block text-base ${
        pathname === item.path ? 'text-blue' : 'text-white'
      } hover:text-green first:font-medium`}
    >
      {item.name}
    </a>
  ))}
</div>

      </nav>
</header>

     
  )
}

export default Header
