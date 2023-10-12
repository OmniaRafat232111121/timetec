import Image from "next/image";
import React from "react";
import bottel from "../assets/images/bottel.png";
import sun from "../assets/images/energy.png";
import macchine from "../assets/images/mac.png";
import team from "../assets/images/team.png";
const Team = () => {
  return (
    <div
      className="mt-[50px] py-100
    bg-[#F5F5F5] md:px-[50px] md:py-[100px] overflow-hidden"
    >
      <div className="relative px-5 ">
        <h2 className="text-7xl font-bold stroke  "> عن الفريق</h2>
        <div>
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
            عن الفريق
          </h3>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between md:px-16 ">
        <div className="px-[80px]">
          <p
            className="text-right font-Changa text-[#7777] 2xl:text-[1.875rem] 
       text-[20px] 
      2xl:w-[800px] lg:w-[1024px] md:w-[900px] w-full"
          >
            تمتلك شركة تايم تكنولوجى صفوة من الخبراء والمهندسين والفنيين
            يستخدمون احدث اجهزة القياس والفحص وفك وتركيب جميع العناصر
            الاليكترونية بشكل احترافى والتعامل الصحيح مع الكروت Multi Layer
            وخبراء فى:
          </p>
          <ul className="text-right mt-[50px] p-3">
            <li className="mt-5 text-[#777] md:text-lg text-md md:w-[50%] w-[300px] font-bold">
              <div
                className="flex items-center  md:space-x-8  
   bg-white  border-l-4 border-orange rounded-bl-lg rounded-tl-lg "
              >
                <div className="flex items-center justify-center p-4">
                  <Image
                    src={bottel}
                    alt="screen"
                    className="rounded px-2 py-2 md:w-[70px] w-[80px]"
                  />
                </div>
                <p className="md:font-bold md:text-2xl w-[400px] text-black">
                  معالجة المياة وحلولها
                </p>
              </div>
            </li>

            <li className="mt-5 text-[#777] md:text-lg text-md md:w-[50%] w-[300px] font-bold">
              <div
                className="flex items-center   md:space-x-8
   bg-white  border-l-4 border-orange rounded-bl-lg rounded-tl-lg "
              >
                <div>
                  <Image
                    src={sun}
                    alt="screen"
                    className="rounded px-2 py-2 md:w-[70px] w-[50px]"
                  />
                </div>
                <p className="md:font-bold  md:text-2xl text-md w- text-black">
                  الطاقة المتجددة والشمسية
                </p>
              </div>
            </li>

            <li className="mt-5 text-[#777] md:text-lg text-md md:w-[50%] w-[300px] font-bold">
              <div
                className="flex items-center  md:space-x-8
   bg-white  border-l-4 border-orange rounded-bl-lg rounded-tl-lg "
              >
                <div>
                  <Image
                    src={macchine}
                    alt="screen"
                    className="rounded px-2 py-2 md:w-[70px] w-[50px]"
                  />
                </div>
                <p className="md:font-bold md:text-2xl text-md text-black">
                  التحكم الالى
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative ">
          <div className="absolute 2xl:block hidden bottom-[10px] left-[200px] w-full z-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="887"
              height="868"
              viewBox="0 0 887 868"
              fill="none"
            >
              <path
                d="M494.795 0H887L392.205 868H0L494.795 0Z"
                fill="#DD3433"
              />
            </svg>
          </div>
          <Image
            src={team}
            alt="team"
            className=" relative md:w-[100%] w-[70%] z-20"
          />
          <div className="absolute  2xl:block hidden bottom-[-240px] left-[300px] w-full z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="991"
              height="758"
              viewBox="0 0 991 758"
              fill="none"
            >
              <path d="M552.81 0H991L438.19 758H0L552.81 0Z" fill="black" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
