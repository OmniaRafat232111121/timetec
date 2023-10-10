

import Image from 'next/image';
import automation from '../assets/images/automation.png';
import computersupport from '../assets/images/Computer Support.png';
import water from '../assets/images/Thirst.png';
import multiple from '../assets/images/Multiple Devices.png'
import Card from './Card';
const Services = () => {
  const cardData = [
    {
      title: 'أنظمة التحكم الآلي للعمليات الصناعية',
      imageSrc: automation,
    },
    {
      title: 'صيانة لكافة الكروت والأجهزة الإلكترونية',
      imageSrc: multiple,
    },
    {
      title: 'أنظمة التحكم الآلي للعمليات الصناعية',
      imageSrc: multiple
    },
    {
      title: 'حلول لتحلية المياه',
      imageSrc: water,
    },
    {
      title: 'دعم فني وتدريب',
      imageSrc: computersupport,
    },
    {
      title: 'أنظمة الطاقة الشمسية',
      imageSrc: multiple,
    },
  ];
  return (
    <div className="mt-[50px] py-100
    bg-[#F5F5F5] md:px-[50px] md:py-[100px] overflow-hidden">
      
   
  
      <div className=" text-center  relative px-5 ">
<h2 className='text-7xl 
font-bold stroke  '>

  خدماتنا
  </h2>
  <div className='flex items-center justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="90" 
  height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[40px]'
>
    <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
  </svg>

<h3 className='text-[#02AFCE] mx-auto
 absolute top-[40px]  text-4xl font-bold'
 >خدماتنا
 </h3>

   


  </div>

  

 
 
  
        
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-4  px-8 py-4
     mx-auto items-center justify-center ">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} imageSrc={card.imageSrc} />
      ))}

<button className='text-blue py-4 md:px-8 px-10 md:mt-[100px] mt-[50px]  rounded-md 
  border-2 border-blue hover:bg-blue hover:text-white duration-100 
  translate-x-7  transition-all ease-in-out mb-5 md:w-[200px]  w-[300px] 
  flex items-center justify-center mx-auto   '>اعرف المزيد</button>

    </div>


   

    </div>
  );
}

export default Services;
