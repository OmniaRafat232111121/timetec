

import Image from 'next/image';
import power from '../assets/images/power.png';
import circle from '../assets/images/circle.png';
import pro from '../assets/images/pro.png';
import screen from '../assets/images/screen.png'
const About = () => {
  return (
    <div className="flex  justify-between  bg-[#F5F5F5] md:px-10 md:py-16 overflow-hidden">
      
     <div className='grid 2xl:grid-cols-2  grid-cols-1 2xl:gap-[170px]  '>
     <div className="md:w-[50%] text-right relative px-5 ">
<h2 className='text-7xl 
font-bold stroke  '>عن الشركة</h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="90" 
  height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[40px]'
>
    <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
  </svg>

<h3 className='text-[#02AFCE]
 absolute top-[40px] right-[80px] text-4xl font-bold'>عن الشركة</h3>

       <p className='text-right font-Changa text-[#7777] 2xl:text-[1.875rem] 
       text-[20px] mt-[10px] 
      2xl:w-[800px] lg:w-[1024px] md:w-[900px] w-full'>تمتلك شركة تايم تكنولوجى للحلول الصناعية مركز خدمة معتمد دوليا من مجموعة فريكون العالمية , ومصلحة الرقابة الصناعية كجهة رسمية لإعتماد مراكز الصيانة الصناعية والهندسية وشركتى ABB , Schneider كما تمتلك صفوة من الخبراء والمهندسين والفنيين فى مجال :

</p>

<ul className='text-right mt-[100px]'>
<li className="mt-4 text-[#777]">
    <div className='flex items-center justify-between  md:space-x-6  space-x-[277px]'>

<div className=''>
<Image src={screen} alt="screen" className="bg-blue rounded px-2 py-2" />

</div>
<p >اصلاح وصيانة الانفرترات والشاشات الصناعية</p>
    </div>
  </li>

  <li className="mt-5 text-[#777]">
   <div className='flex items-center justify-between  md:space-x-16 space-x-[320px] '>

<div className=''>
<Image src={screen} alt="screen" className="bg-blue rounded px-2 py-2" />

</div>
<p>اصلاح وصيانة ال بى ال سى والسيرفو </p>
    </div>
  </li>
  <li className="mt-5 text-[#777]">
    <div className='flex items-center justify-between md:space-x-16 space-x-[320px]'>

<div className=''>
<Image src={screen} alt="screen" className="bg-blue rounded px-2 py-2" />

</div>
<p>اصلاح وصيانة الاجهزة الطبية المعقدة</p>
    </div>
  </li>
</ul>
<p className="text-[#777] mt-[40px] 2xl:w-[400px] w-full">بإستخدام احدث اجهزة القياس والفحص وفك
 وتركيب جميع العناصر الاليكترونية بشكل
 احترافى والتعامل الصحيح مع الكروت Multi Layer</p>

 <button className='text-orange py-4 md:px-8 px-10 mt-[100px] rounded-md 
  border-2 border-orange hover:bg-orange hover:text-white duration-100 
  translate-x-7  transition-all ease-in-out mb-5 md:w-[200px]  w-[400px] flex items-center justify-center mx-auto'>اعرف المزيد</button>

       </div>

 
 
  
         <div className="relative md:w-full w-[500px] mx-auto  ">
           <Image src={power} alt="power" 
           className="object-cover w-full h-full rounded-lg " />
            <div className='relative'>
            <Image src={circle} alt="" className="absolute 
            w-[15.625rem] h-[15.625rem] rounded-[62.5rem]
            bottom-[-20px] right-[-60px]"/>
            <div>
             <Image src={pro} alt="pro" className=' absolute 
             right-[30px] bottom-[90px] w-[70px]'/>
               <h3 className='text-white  absolute   right-[30px] bottom-[50px]'>100 مشروع</h3>
 
            </div>
 
            </div>
 
            
            
  
       </div>
     </div>
    </div>
  );
}

export default About;
