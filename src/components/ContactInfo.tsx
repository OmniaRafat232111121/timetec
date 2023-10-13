import React from 'react'
import contact  from '../assets/images/about.png'
import Image from 'next/image'

const ContactInfo = () => {
  return (
    <div>
       <div className=" p-10 absolute bg-no-repeat bg-center  ">
    <Image src={contact} alt="about" />
    </div>
    <div className='md:w-full  overflow-hidden h-[500px] bg-white p-4 '>
    <div className="relative w-full  ">
<div className=" relative ">
<h2 className='text-7xl text-white flex items-center mt-[150px] justify-center font-bold  '
>تواصل معنا
</h2>
      
   </div>
      
    </div>
    </div>
    <div className='md:w-full  overflow-hidden   '>
    <div className="relative w-full h-[400px]  ">
<div className=" text-center  relative px-5 ">
<h2 className='text-7xl 
font-bold stroke  '>
  اتصل بنا

</h2>
<div className='flex items-center justify-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="90" 
height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[40px]'
>
  <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
</svg>

<h3 className='text-[#02AFCE] mx-auto
absolute top-[40px]  text-4xl font-bold'>اتصل بنا</h3>

 


</div>
<p className='text-[#777] md:w-[550px] flex items-center justify-center mx-auto mt-10  text-md'
>
تمتلك شركة تايم تكنولوجى للحلول الصناعية مركز خدمة معتمد دوليا من مجموعة فريكون العالمية , ومصلحة الرقابة الصناعية كجهة رسمية لإعتماد مراكز الصيانة الصناعية والهندسية وشركتى ABB , Schneider كما تمتلك صفوة من الخبراء والمهندسين والفنيين فى مجال :



</p>






      
   </div>
      
    </div>
    </div>
    </div>
  )
}

export default ContactInfo
