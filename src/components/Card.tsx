import Image from 'next/image';
import React from 'react';

const Card = ({ title, imageSrc }:any) => {
  return (
    <div className="max-w-sm  px-8 py-4 rounded overflow-hidden shadow-lg flex 
    items-center justify-between space-x-1 hover:bg-orange hover:text-orange duration-300 transition-all ease-in-out cursor-pointer ">
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 text-blue">{title}</div>

      </div>
      <Image src={imageSrc} alt={title} className="w-[60px] p-2 rounded-md bg-orange
        text-white hover:text-orange" />

    </div>
  );
};

export default Card;
