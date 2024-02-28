"use client";

import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";




const Features  = () => {

    const sliderRef = useRef(null);
  
    const featuresData = [
        {
            id: 1,
            title: "PDF Generation",
          },
        
          {
            id: 2,
            title: "Invoice Generation",
          },
          {
            id: 3,
            title: "Dashboard Overview",
          },
          {
            id: 4,
            title: "Payment Tracking",
          },
          {
            id: 5,
            title: "Automated Calculation",
          },
          {
            id: 6,
            title: "Customization",
          },
          {
            id: 7,
            title: "Client Management",
          },
          {
            id: 8,
            title: "Product and Service Catalog",
          },
          {
            id: 9,
            title: "Finical Report",
          },
    ];

    const sliderSettings = {
        speed : 500,
        slidesToShow : 1,
        infinite : true,
        autoplay : true,
        autoplaySpeed : 2000,
        slidesToScroll: 1,
        dots :false,
    };

    return(
        <div className="flex flex-col container mx-auto">
            {/* mobile */}
            <div className="md:hidden flex flex-col container mx-auto border mt-12">
                <div className="flex  justify-between text-center items-center px-2 py-2">
                    <div className="px-6 border border-black"/>
                    <h1 className="font-bold  w-[248px] h-[90px] text-[20px]">
                        Why <span className="text-[#2D36FB]">Choose</span> Pyaysar Invoicing  for Your Business
                    </h1>
                    <div className="px-6 border border-black"/>
                </div>
                <p className="text-center pb-6 text-[13px] text-[#757572]">Our Features</p>
              <div className="flex container">
              <div className="w-[250px] container ml-16">
               <Slider ref={sliderRef} {...sliderSettings}>
                    {featuresData.map((data) => (
                        <div key={data.id} className="flex-col container mx-auto border border-black rounded-lg w-[248px] h-[209px] mr-2">
                            <h1 className="px-4 text-[16px] font-medium py-6"> 
                                {data.title}
                            </h1>
                            <div className="px-[182px] pt-16">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                    ))}
               </Slider>
               </div>
               {/* this might be error but don't panic.it works */}
               <button onClick={() => sliderRef.current.slickNext()} className="pt-4 ml-5"> 
                  <IoIosArrowForward className="text-3xl"/>
              </button>
              </div>
            </div>
            {/* desktop */}
            <div className="hidden md:flex flex-col container mx-auto  mt-32">
                <div className="flex justify-around text-center items-center">
                    <div className="px-24 border border-black"/>
                        <div className="w-[551px] h-[120px] flex flex-col text-center">
                            <h1 className="font-bold text-[40px]">
                            Why <span className="text-[#2D36FB]">Choose</span> Pyaysar Invoicing  for Your Business
                            </h1>
                            <p className="text-[19px] pt-4 text-[#757572]">Our Features</p>
                    </div>
                    <div className="px-24 border border-black"/>
                </div>
                    <div className="flex container justify-around  mt-32">
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[232px] mt-10">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                PDF Generation
                            </h1>
                            <div className="pt-[110px] px-[265px] px- pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[271px]">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                Invoice Generation
                            </h1>
                            <div className="pt-[150px] px-[265px]  pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[232px] mt-10">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                Dashboard Overview
                            </h1>
                            <div className="pt-[110px] px-[265px] px- pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex container justify-around  mt-4">
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[232px] mt-6">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                Payment Tracking
                            </h1>
                            <div className="pt-[110px] px-[265px] px- pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[271px]">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                Automated Calculation
                            </h1>
                            <div className="pt-[150px] px-[265px]  pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[232px] mt-6">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                Customization
                            </h1>
                            <div className="pt-[110px] px-[265px] px- pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex container justify-around  mt-4">
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[232px]">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                Client Management
                            </h1>
                            <div className="pt-[110px] px-[265px] px- pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[271px]">
                            <h1 className="px-4 text-[16px] font-medium py-6 w-[223px] h-[70px]">
                                Product and Service Catalog
                            </h1>
                            <div className="pt-[150px] px-[265px]  pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col mx-auto border border-black rounded-lg w-[333px] h-[232px]">
                            <h1 className="px-4 text-[16px] font-medium py-6">
                                Financial Report  
                            </h1>
                            <div className="pt-[110px] px-[265px] px- pr-2">
                                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                    <FaArrowRight className="text-xl text-white"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default Features;