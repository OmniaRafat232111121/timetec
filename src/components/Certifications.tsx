"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import certfication from "../assets/images/certfi.png";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="md:px-16 py-10 relative">
      <div className=" text-center  relative px-5 ">
        <h2 className="text-7xl font-bold stroke  ">شهادات الجودة</h2>
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
            شهادات الجودة
          </h3>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <Image src={certfication} alt="md:w-[40%]" />
        </div>
        <div>
          <Image src={certfication} alt="Image 1" />
        </div>
        <div>
          <Image src={certfication} alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
