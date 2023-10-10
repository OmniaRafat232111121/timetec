import Image from 'next/image'
import React from 'react'
import log from '../assets/images/log.png'
import linkedin from '../assets/images/redlin.png';
import facebook from '../assets/images/redf.png';
import twitter from '../assets/images/redtw.png';

const Footer = () => {
  return (
    <div className='px-0 py-10 bg-white   md:px-15 mx-auto flex items-center justify-center '>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 space-x-[200px]
     mx-auto">
       
       <div>
        <h2 className='text-orange font-bold text-3xl'>منتجاتنا</h2>
        <ul className='mt-4 text-[#777]'>
          <li className='mb-2'><a href="">Inverter</a></li>
          <li className='mb-2'><a href="">Servo motor</a></li>
          <li className='mb-2'><a href="">Solar system</a></li>
          <li className='mb-2'><a href="">CNC</a></li>


        </ul>
       </div>
       <div>
        <h2 className='text-orange font-bold text-3xl'>خدماتنا</h2>
        <ul className='mt-4 text-[#777]'>
          <li className='mb-2'><a href="">التحكم الالي</a></li>
          <li className='mb-2'><a href="">خلايا طاقة شمسية</a></li>
          <li className='mb-2'><a href="">تحلية الماء</a></li>
          <li className='mb-2'><a href="">انفرتر</a></li>


        </ul>
       </div>
       <div>
        <h2 className='text-orange text-3xl font-bold'>روابط هامة</h2>
        <ul className='mt-4 text-[#777]'>
          <li className='mb-2'><a href="">الرئيسية</a></li>
          <li className='mb-2'><a href="">الخدمات</a></li>
          <li className='mb-2'><a href="">اعمالنا</a></li>
          <li className='mb-2'><a href="">اتصل بنا</a></li>


        </ul>
       </div>
       <div >
          <Image src={log} alt="logo" className='w-[200px] mx-auto md:mt-[-20px] 
          md:mr-0 mr-[-50px] mt-[-20px]
          text-center flex items-center justify-center '/>
          <div className='flex items-center justify-center space-x-1 mt-[-50px] md:mr-0 
           mr-[-50px]'>
            <Image src={linkedin} alt='linkedin' className='w-12'/>
            <Image src={facebook} alt='linkedin' className='w-12'/>
            <Image src={twitter} alt='linkedin'className='w-12'/>


        
        </div>
     
           
       </div>
       
      </div>



      
      
    </div>
  )
}

export default Footer
