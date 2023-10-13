import CCard from '@/components/CCard'
import React from 'react'
import { data } from '../../../../data';

const page = () => {
  return (
    <div
      className="relative  "
    >
       <div className=" text-center  relative px-5 ">
        <h2
          className="text-7xl 
font-bold stroke  "
        >
          اعمالنا
        </h2>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="100"
            viewBox="0 0 102 122"
            fill="none"
            className="mt-[-60px] mr-[40px]"
          >
            <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F" />
          </svg>

          <h3
            className="text-[#02AFCE] mx-auto
 absolute top-[40px]  text-4xl font-bold"
          >
            اعمالنا
          </h3>
        </div>
      </div>
       <div className="container mx-auto py-6 ">
      <div className="grid gap-[100px] grid-cols-1 md:grid-cols-2 ">
        {data.map((card, index) => (
          <CCard key={index}  subobjects={card.subobjects} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default page