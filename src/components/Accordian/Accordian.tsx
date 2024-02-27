"use client";

import { useState } from "react";
import AccordianItem from "../AccordianItem/AccordianItem";
import { FaArrowRight } from "react-icons/fa";

const Accordian = () => {

    const [ open,setOpen ] = useState(false);

    const toggle = (index) => {
        if(open === index ){
            return setOpen(false);
        }
        setOpen(index)
    }

    const accordianData = [
        {
            id : 1,
            title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua."
        },
        {
            id : 2,
            title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua."
        },
        {
            id : 3,
            title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua."
        },
        {
            id : 4,
            title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua."
        },
        {
            id : 5,
            title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua."
        }
    ];
    return (
        <div className="flex flex-col mt-56">
            <div className="flex container mx-auto justify-around text-center px-2 items-center">
                <div className="px-6 border border-[#808080] md:px-24"/>
                <h1 className="font-bold w-[248px] h-60px] text-[20px] md:text-[40px]">FAQ</h1>
                <div className="px-6 border border-[#808080] md:px-24"/>
            </div>
            <div className="flex justify-center mx-auto pt-3 w-[157px] md:w-[333px] md:h-[123px]">
                <p className="text-center text-[16px] text-[#757572] md:text-[19px]">Frequently Asked Questions</p>
            </div>
            <div className="flex flex-col container mx-auto justify-center items-center md:px-28">
            {accordianData.map((data,index) => {
                return <AccordianItem
                            key={index}
                            open={index === open}
                            id={data.id}
                            title={data.title}
                            content={data.content}
                            toggle={() => toggle(index)}
                        />
            })}
            </div>
            <div className="pt-12 mx-auto container px-2 w-full hidden md:block">
                    <div className="container mx-auto flex flex-col w-[1035px] h-[300px] border-black border rounded-lg shadow-lg shadow-black">
                        <div className="text-center flex-col px-8 py-8">
                            <h1 className="text-[40px] font-[700] tracking-wide">Don't miss out!</h1>
                            <h2 className="text-[19px] font-medium pt-3 tracking-wide">Run your business with confidence</h2>
                        </div>
                        <div className="pt-[24px] flex items-center justify-center">
                            <div className="border border-black rounded-lg  w-[599px] h-[62px] justify-between flex">
                                <p className="font-light text-[16px] text-[##757572] px-2 pt-5">Enter your email address</p>
                                    <div className="pt-2 pr-2">
                                        <div className="bg-black rounded-lg w-[132px] h-[46px]">
                                            <p className="text-white text-[16px] px-8 py-2.5">Subcribe</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-12 mx-auto container px-2 md:hidden">
                            <div className="container mx-auto flex flex-col w-[355px] h-[202px] border-black border rounded-lg shadow-lg shadow-black">
                                <div className="text-center flex-col px-8 py-4">
                                    <h1 className="text-[20px] font-[700] tracking-wide">Don't miss out!</h1>
                                    <h2 className="text-[13px] font-medium pt-3 tracking-wide">Run your business with confidence</h2>
                                </div>
                                <div className="pt-8 flex justify-center">
                                    <div className="border border-black rounded-lg  w-[300px] h-[44px] justify-between flex">
                                        <p className="font-light text-[11px] text-[#757572] px-2 pt-3">Enter your email address</p>
                                        <div className="pt-1.5 pr-2">
                                            <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                                                <FaArrowRight className="text-xl text-white"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Accordian;