"use client"
import Image from 'next/image';
import project from '../assets/images/Projects.png';
import project1 from '../assets/images/pool.png';
import project2 from '../assets/images/macchine.png';
import project3 from '../assets/images/worker.png';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './CustomArrows'; // Update the import path as needed

const Projects = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (


    <div className='md:w-full  overflow-hidden h-[800px] bg-gray-100 '>
      <div className="relative w-full h-[400px] ">
    
 <div className=" text-center  relative px-5 ">
<h2 className='text-7xl 
font-bold stroke  '>بعض المشاريع</h2>
  <div className='flex items-center justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="90" 
  height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[40px]'
>
    <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
  </svg>

<h3 className='text-[#02AFCE] mx-auto
 absolute top-[40px]  text-4xl font-bold'>بعض المشاريع</h3>

   


  </div>

  

 
 
  
        
     </div>

    <div  className='mt-[80px] lg:px-[100px] lg:py-2   py-7  '>
      <Slider {...sliderSettings} >
        
        <div className='relative'>
          <Image src={project2} alt="Project 2"  className='w-[400px] mx-auto' />
          <div className='bg-white 
          2xl:w-[401px] md:px-3 py-6 absolute bottom-0 right-[119px] 
           text-blue border-r-4
           border-orange
           2xl:block hidden text-right' >
مشرررروع الحفار مع شركة طلعت مصطفى  للانشاءات        
   </div>

        </div>
        <div className='relative'>
          <Image src={project3} alt="Project 3"  className='w-[400px]  mx-auto'/>
          <div className='bg-white 
          2xl:w-[401px] md:px-3 py-6 absolute bottom-0 right-[119px] 
           text-blue border-r-4
           border-orange
           2xl:block hidden text-right' >
مشروع 350 كيلو وات اون جريد  المدينة الصناعية الجديدة      
    </div>
        </div>
        <div className='relative'>
          <Image src={project2} alt="Project 2"  className='w-[400px] mx-auto' />
          <div className='bg-white 
          2xl:w-[401px] md:px-3 py-6 absolute bottom-0 right-[119px] 
           text-blue border-r-4
           border-orange
           2xl:block hidden text-right' >
مشروع الحفار مع شركة طلعت مصطفى  للانشاءات
          </div>
        </div>
        <div className='relative'>
          <Image src={project1} alt="Project 2"  className='w-[400px] mx-auto' />
          <div className='bg-white 
          2xl:w-[401px] md:px-3 py-6 absolute bottom-0 right-[119px] 
           text-blue border-r-4
           border-orange
           2xl:block hidden text-right' >
مشروع الحفار مع شركة طلعت مصطفى  للانشاءات 
          </div>
        </div>
        <div className='relative'>
          <Image src={project3} alt="Project 2"  className='w-[400px] mx-auto' />
          <div className='bg-white 
          2xl:w-[401px] md:px-3 py-6 absolute bottom-0 right-[119px] 
           text-blue border-r-4
           border-orange
           2xl:block hidden text-right' >
مشروع الحفار مع شركة طلعت مصطفى  للانشاءات 
          </div>
        </div>
        
        
      </Slider>
      
      <button className='text-orange py-4 md:px-8 px-10 mt-[10px]  rounded-md 
  border-2 border-orange hover:bg-orange hover:text-white duration-100 
  translate-x-7  transition-all ease-in-out mb-5 md:w-[200px]  w-[300px] flex items-center
   justify-center mx-auto'>اعرف المزيد</button>



      
    </div>
    </div>
    </div>
  );
};

export default Projects;
