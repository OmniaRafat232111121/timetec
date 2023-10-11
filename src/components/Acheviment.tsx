import React from 'react'
import achv from '../assets/images/achv.png'
import Image from 'next/image'
import computer from '../assets/images/screen.png'

const data = [
  { title: 'خدمة', count: 30, icon: computer },
  { title: 'عميل', count: 300, icon: computer },
  { title: 'مشروع', count: 100, icon: computer },
];
const Acheviment = () => {
  return (
    <div className='  p-10  py-4 '>
      <div className="relative w-full h-auto ">
        <div className="absolute inset-0">
          <Image src={achv} alt="background image" layout="fill" objectFit="cover" />
        </div>
        <div className=" text-center  relative px-5  py-2">
<h2 className='text-7xl 
font-bold stroke  '>انجازتنا</h2>
  <div className='flex items-center justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="90" 
  height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[40px]'
>
    <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
  </svg>

<h3 className='text-blue mx-auto
 absolute top-[40px]  text-4xl font-bold'>انجازتنا</h3>

   


  </div>

  

 
 
  
        
     </div>
     <div className=" relative grid lg:grid-cols-3 grid-cols-1
     gap-[100px] mt-[50px] p-[100px]">
      {data.map((item, index) => (
        <div key={index} className="relative px-[50px] bg-gray-100  py-10 rounded-lg shadow-md ">
     <div className='flex  md:flex-row flex-col items-center gap-[100px] justify-between'>
<div className='space-y-4'>
<h3 className=" font-bold lg:text-3xl text-lg  text-center mt-2">{item.title}</h3>
 <p className="lg:text-xl text-md  font-bold text-center mt-1">{item.count}</p>
  </div>
<div className='bg-orange  rounded-full p-10 2xl:block hidden '>
<Image src={item.icon} alt={item.title} className=" mx-auto" />

  </div>
            </div>
        </div>
      ))}
      </div>
  


      </div>
      
      
    </div>
  )
}

export default Acheviment
