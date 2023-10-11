'use client'
import { useState } from 'react';
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'
import p4 from '../assets/images/p4.png'



import pp1 from '../assets/images/frecon.png'
import pp2 from '../assets/images/frecon2.png'
import pp3 from '../assets/images/PIC.png'
import pp4 from '../assets/images/PLC.png'
import pp5 from '../assets/images/GrayPIC.png'
import pp6 from '../assets/images/servo.png'

import Image from 'next/image';

const categories = [
  {
    name:'بى ال سى',
    image:p3,
  },
  {
    name:  'شاشات',
    image:p2,
  },{
name:  'حساسات وأجهزة قياس',
image:p3
  },{
    name:  'أنظمة العرض والمراقبة',
image:p4

  }

];

// Assuming you have a list of products with a "category" attribute
const products = [
  { id: 1, name: 'Frecon PV150 Inverter', category: 'بى ال سى',image:pp1 },
  { id: 2, name: 'Frecon Inverter', category: 'شاشات' ,image:pp6},
  { id: 3, name: 'Servo', category: 'حساسات وأجهزة قياس' ,image:pp5},
  { id: 4, name: 'Plc main unit Mitsubishi', category: 'أنظمة العرض والمراقبة',image:pp2},
  { id: 5, name: 'GIC PLC', category: 'حساسات وأجهزة قياس' ,image:pp3},
  { id: 6, name: 'PLC', category: 'أنظمة العرض والمراقبة',image:pp4 },
  
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Example filter state

  const filteredProducts = products.filter((product) => {
    // Implement filtering logic based on selectedCategory
    return !selectedCategory || product.category === selectedCategory;
  });

  return (
    <div className='py-7 mt-[100px]'>
       <div className=" text-center  relative px-5 ">
<h2 className='text-7xl 
font-bold stroke  '>بعض المنتجات</h2>
  <div className='flex items-center justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="90" 
  height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[40px]'
>
    <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
  </svg>

<h3 className='text-[#02AFCE] mx-auto
 absolute top-[40px]  text-4xl font-bold'>بعض المنتجات</h3>

   


  </div>

  

 
 
  
        
     </div>
     <div className="grid 2xl:grid-cols-5   grid-cols-1  gap-y-3 md:space-x-10 mt-[10px] px-[100px]">
        {categories.map((category) => (
          <div key={category.name} 
          className=" flex items-center justify-between
           space-y-4  space-x-1 px-5 py-2  gap-10 bg-gray-100 ml-8  rounded ">
            <button
              className={
                selectedCategory === category.name
                  ? 'active  font-bold bg-gray-100  rounded-md  py-3 text-orange '
                  : ''
              }
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
            <Image
              src={category.image}
              alt={category.name}
              className="mx-auto mt-2 max-w-[100px] max-h-[100px]"
            />
          </div>
        ))}
        <div >
          <button
            className={
             
              selectedCategory === ''
                ? 'active font-bold 2xl:w-[301px] w-[180px] h-[100px] text-black bg-gray-100  rounded-md px-2 py-3 hover:text-orange '
                : ' 2xl:w-[301px] w-[180px] h-[100px] text-black bg-gray-100 '
            }
            onClick={() => setSelectedCategory('')}
          >
            All
          </button>
        </div>
      </div>

      {/* Display filtered products */}
      <ul className='grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-10 py-9'>
        {filteredProducts.map((product) => (
          <li key={product.id} className='bg-gray-100 rounded-lg 
          lg:w-[34.375rem] lg:h-[33.1875rem]  w-[100%] relative'>
            <Image src={product.image} alt={product.name} className='flex 
            items-center mx-auto'/>
            <h2 className='text-center font-bold'>  {product.name} </h2>
            
            <button className='text-orange font-semibold py-4 md:px-8 px-10 mt-[50px]  rounded-md 
  border-2 border-orange hover:bg-orange hover:text-white duration-100 
  translate-x-7  transition-all ease-in-out mb-5 lg:w-[300px] w-[200px]
  flex items-center justify-center mx-auto text-center'
  >اطلب المنتج
  </button>

          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default ProductList;
