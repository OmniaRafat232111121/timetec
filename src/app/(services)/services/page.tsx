"use client";
import React from "react";
import Slider from "react-slick";
import bannerone from "../../../assets/images/x.png";
import bannertwo from "../../../assets/images/cars2.png";
import bannerthree from "../../../assets/images/cars3.png";
import bannerfour from "../../../assets/images/servocar.png";
import about from '../../../assets/images/about.png'
import Image from "next/image";
import screen from "../../../assets/images/Computer Support.png";
import serv from '../../../assets/images/serv.png'
const page = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const items = ["PLC", "CNS", "Inverter", "Servo", "Motor", "SCADA", "Controller"];

  return (
    <div>

    <div className=" p-10 absolute bg-no-repeat bg-center md:block hidden  ">
    <Image src={about} alt="about" />
    </div>
    <div className='md:w-full  overflow-hidden h-[500px] bg-white p-4 '>
    <div className="relative w-full  ">
<div className=" relative ">
<h2 className='text-7xl text-white flex items-center mt-[150px] justify-center font-bold  '
>الخدمات
</h2>
      
   </div>
      
    </div>
    </div>

    
    <div className="flex md:flex-row flex-col items-center justify-between 2xl:px-[200px]  p-10">
      <div>
        <h2 className="lg:text-3xl text-md text-[#343A40] lg:w-[400px] w-full mt-[-300px] "> 
        أنظمة التحكم الالى
        <br/> للعمليات الصناعية والانتاجية</h2>
        <p className="md:w-[600px] w-full text-[#777] leading-10 mt-[50px]">
نقوم بتوريد وتركيب وبرمجة وتطوير وحدات وخطوط الإنتاج ومحطات المياه بواسطة أجهزة التحكم المنطقية (PLC)
والشاشات (HMI) الخاصة بها وأيضا مغيرات السرعة AC and DC Drives للماركات العالمية GE-Fanuc –
Delta ، كما نعمل أيضا في مجال الـ Motion control بالماركة الإيطالية QEM والأمريكية GE-Fanuc.
كما نقوم أيضاً بتصميم وتوريد وتركيب اللوحات الكهربية الخاصة بخطوط الإنتاج ولوحات التوزيع والتحكم
و لوحات ATS ولوحات تحسين معامل القدرة ولوحات التزامن بإستخدام مكوناتSCHRACK الأوروبية
والمطابقة للمواصفات الاوروبية.</p>
      </div>
      <div>
        <Image src={serv} alt="services"/>
      </div>
    </div>
    <div className="flex items-center justify-center mb-4 ">
      <h3 className="text-[#151E37] border-r-4 border-orange md:w-[600px] w-full text-lg p-3">

نقدم لكم خدماتنا في مجال أنظمة التحكم الآلي وأنظمة التحكم والمراقبة للعمليات الصناعية والإنتاجية وأنظمة
مغيرات السرعة وأجهزة التحكم في الحرارة ... إلخ، وإليكم بعض التطبيقات :</h3>
    </div>


   
     
   
    <div className="flex 2xl:flex-row flex-col 
     w-full overflow-hidden relative 2xl:px-[450px] p-4 mt-10">
      <div className="2xl:w-[30%] w-full p-4">
      <ul className="text-black font-semibold">
        {items.map((item, index) => (
          <li
            key={index}
            className="mb-3  flex  gap-x-3 rounded-md hover:bg-blue p-2 cursor-pointer"
          >
            <Image src={screen} alt="ss" className="bg-orange rounded-full w-8 p-2" />
            <a>{item}</a>

          </li>
        ))}
      </ul>
      </div>
      <div className="2xl:w-[70%] w-full">
        <Slider {...settings}>
          <div className="relative">
            <div className="w-full min-h-screen relative">
              <Image
                src={bannerone}
                alt="bannerone"
                className="w-full h-[400px] absolute inset-0 rounded-md"
                priority
              />
              <p className="absolute bg-orange top-[22rem] rounded hover:bg-blue cursor-pointer right-[212px] p-5">أنظمة التحكم والمراقبة للعمليات الصناعية والإنتاجية (SCADA)</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-full min-h-screen relative">
              <Image
                src={bannerthree}
                alt="bannertwo"
                className="w-full h-[400px] absolute inset-0 rounded-md"
                priority
              />
                 <p className="absolute bg-orange top-[22rem] rounded hover:bg-blue cursor-pointer
                           right-[212px] p-5"
                          >
                         أنظمة مغيرات السرعة للعمليات الصناعية والإنتاجية (Inverter)
                          </p>

            </div>
          </div>
          <div className="relative">
            <div className="w-full min-h-screen relative">
              <Image
                src={bannertwo}
                alt="bannerthree"
                className=" w-full h-[400px] absolute inset-0 rounded-md"
                priority
              />
                <p className="absolute bg-orange top-[22rem] rounded hover:bg-blue cursor-pointer
                           right-[212px] p-5"
                          >
 أجهزة التحكم في الحرارة (Temp. Controller)
                          </p>
            </div>
          </div>


          <div className="relative">
            <div className="w-full min-h-screen relative">
              <Image
                src={bannerfour}
                alt="bannerthree"
                className=" w-full h-[400px] absolute inset-0 rounded-md"
                priority
              />
                <p className="absolute bg-orange top-[22rem] rounded hover:bg-blue cursor-pointer
                           right-[220px] p-5"
                          >

 مواتير السيرفو للعمليات الصناعية والإنتاجية
 (Servo Motor)                          </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default page;
