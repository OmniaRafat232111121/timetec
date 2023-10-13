import Image from 'next/image'
import React from 'react'
import nav from '../assets/images/navigation.png'
import phone2 from '../assets/images/phone2.png'
import email2 from '../assets/images/email2.png'

const Connect = () => {
  return (
    <div className='  w-full max-w-lg mx-auto shadow-lg  p-10   '>
      <h2 className='mb-3 font-bold text-center font-Changa text-3xl'>اتصل بنا</h2>

     
      <div className='bg-white shadow-md flex items-center justify-between  mt-10
       hover:-translate-x-4 duration-400 ease-out transition-all cursor-pointer '>
      
        <p className='md:w-[300px] w-full pr-4'> NO.2030 Street Barakat – El Merag – Maadi , Cairo ,Egypt</p>
        <div className='bg-orange'>
          <Image src={nav} alt='navigation' className='p-1 w-[90px]'/>
        </div>
      </div>
      <div className='bg-white shadow-md flex items-center justify-between mt-5
       hover:-translate-x-4 duration-400 ease-out transition-all cursor-pointer'>
      
      <p className='md:w-[200px] w-full pr-4'> (+2) 01006563389  01092484381</p>
      <div className='bg-orange'>
        <Image src={phone2} alt='navigation' className='p-1 w-[90px]' />
      </div>
    </div>
    <div className='bg-white shadow-md flex items-center justify-between  mt-5
     hover:-translate-x-4 duration-400 ease-out transition-all cursor-pointer'>
      
      <p className='md:w-[300px] w-full pr-4'>  M.Elhilaly@IST-Grp.com</p>
      <div className='bg-orange'>
        <Image src={email2} alt='navigation' className='p-1 w-[90px]'/>
      </div>
    </div>
   

    </div>
  )
}

export default Connect