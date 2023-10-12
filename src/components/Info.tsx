import Image from 'next/image'
import React from 'react'
import about from '../assets/images/about.png'
import computersupport from '../assets/images/Computer Support.png';
import Card from './Card';

const cardData = [
  {
    title: 'اصلاح وصيانة ال بى ال سى والسيرفو ',
    imageSrc: computersupport,
  },
  {
    title: 'اصلاح وصيانة الاجهزة الطبية المعقدة',
    imageSrc: computersupport,
  },
  {
    title: 'اصلاح وصيانة الانفرترات والشاشات الصناعية',
    imageSrc: computersupport,
  },
 
 
];
const Info = () => {
  return (
    <div className='relative font-Changa  px-4 py-8  mb-10' >
 <div className=" p-10 absolute bg-no-repeat bg-center  ">
    <Image src={about} alt="about" />
  </div>
    <div className='md:w-full  overflow-hidden h-[500px] bg-white p-4 '>
    <div className="relative w-full  ">
<div className=" relative ">
<h2 className='text-7xl text-white flex items-center mt-[150px] justify-center font-bold  '
>من نحن
</h2>
      
   </div>
      
    </div>
    </div>
    <div className='md:w-full  overflow-hidden   '>
    <div className="relative w-full h-[400px]  ">
<div className=" text-center  relative px-5 ">
<h2 className='text-7xl 
font-bold stroke  '

>عن الشركة

</h2>
<div className='flex items-center justify-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="90" 
height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[40px]'
>
  <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
</svg>

<h3 className='text-[#02AFCE] mx-auto
absolute top-[40px]  text-4xl font-bold'>عن الشركة</h3>

 


</div>
<p className='text-[#777] md:w-[550px] flex items-center justify-center mx-auto mt-10  text-md'
>
تمتلك شركة تايم تكنولوجى للحلول الصناعية مركز خدمة معتمد دوليا من مجموعة فريكون العالمية , ومصلحة الرقابة الصناعية كجهة رسمية لإعتماد مراكز الصيانة الصناعية والهندسية وشركتى ABB , Schneider كما تمتلك صفوة من الخبراء والمهندسين والفنيين فى مجال :


</p>






      
   </div>
      
    </div>
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[50px] lg:px-10 mx-auto '>
    {cardData.map((card, index) => (
        <Card key={index} title={card.title} imageSrc={card.imageSrc} />
      ))}

    </div>
    </div>
  )
}

export default Info
