import Image from 'next/image';
import React from 'react';
import c1 from '../assets/images/c1.png'
import c2 from '../assets/images/c2.png'
import c3 from '../assets/images/c3.png'
import c4 from '../assets/images/c4.png'
import c5 from '../assets/images/c5.png'
import c6 from '../assets/images/c6.png'
import image7 from '../assets/images/c7.png'

const Clients = () => {
  // Sample company logos (replace with your actual images and data)
  const companyLogos = [
    {
      img: c1
    },
    {
      img: c2
    },
    {
      img: c3
    }, {
      img: c4
    }, {
      img: c5
    }, {
      img: c6
    }
  ];

  return (
    <div className="py-8">
      <div className=" text-center  relative px-5 ">
        <h2 className='text-7xl font-bold stroke  '>عملاؤنا</h2>
        <div className='flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="90"
            height="100" viewBox="0 0 102 122" fill="none" className='mt-[-60px] mr-[40px]'
          >
            <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F" />
          </svg>

          <h3 className='text-[#02AFCE] mx-auto
 absolute top-[40px]  text-4xl font-bold'>عملاؤنا</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-6 mt-[10px]">
        {companyLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={logo.img} alt={`Company ${index + 1}`} className="max-h-16" />
          </div>
        ))}
        <div className="item">
          <Image src={image7} alt="last" className="max-h-16" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
