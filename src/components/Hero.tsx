"use client"
import React from "react"; // Make sure to import React
import Slider from "react-slick";
import bannerone from "../assets/images/hero.png";
import bannertwo from "../assets/images/hero.png";
import bannerthree from "../assets/images/hero.png";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";
import Cards from "./Cards";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-custom text-white
         
        cursor-pointer duration-200  text-2xl
         flex items-center justify-center z-20 absolute left-2 top-[40%]"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-custom text-white
        
          cursor-pointer duration-200 
           text-2xl flex items-center justify-center z-20 absolute right-2 top-[40%]"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative z-[-100] ">
  <Slider {...settings}>
    <div className=" relative">
      <div className="w-full min-h-screen relative">
        <Image
          src={bannerone}
          alt="bannerone"
          className="w-full h-full absolute inset-0"
          priority
        />
      </div>
      <BannerText title="أسرع خدمة تحديد أعطال فى مصر"/>
    </div>
    <div className=" relative">
      <div className="w-full min-h-screen relative">
        <Image
          src={bannerone}
          alt="bannerone"
          className="w-full h-full absolute inset-0"
          priority
        />
      </div>
      <BannerText title="أسرع خدمة تحديد أعطال فى مصر"/>

    </div>
    <div className=" relative">
      <div className="w-full min-h-screen relative">
        <Image
          src={bannerone}
          alt="bannerone"
          className="w-full h-full absolute inset-0"
          priority
        />
      </div>
      <BannerText title="أسرع خدمة تحديد أعطال فى مصر"/>

    </div>
  </Slider>
  <Cards/>
</div>
  );
};

export default Banner;
