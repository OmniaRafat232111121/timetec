import Image from 'next/image'
import React from 'react'
import project from '../assets/images/Projects.png'
const Projects = () => {
  return (
    <div className="flex  md:flex-col  items-center  justify-center  
     md:px-10 md:py-16 overflow-hidden">
      
      <div className="relative w-full h-[500px] ">
            <div className="absolute inset-0 ">
                <Image
                    src={project}
                    alt="background image"
                    fill
                  
                />
            </div>

  
     <div className=" text-center  relative px-5 ">
<h2 className='text-7xl 
font-bold stroke mt- '>بعض المشاريع</h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="90" 
  height="100" viewBox="0 0 102 122" fill="none"  className='mt-[-60px] mr-[750px]'
>
    <path d="M48 0H102L62 122H0L48 0Z" fill="#FE590F"  />
  </svg>

<h3 className='text-[#02AFCE]
 absolute top-[40px] left-[800px] text-4xl font-bold'>بعض المشاريع</h3>

   



  

 
 
  
        
     </div>
     </div>

      
    </div>
  )
}

export default Projects
