"use client";

import { useState } from "react";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const FAQ = () => {

    const AccordianData = [
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
    ]


    return (
        <div className="flex mt-32">
            {/* mobile */}
                <div className=" container mx-auto flex flex-col md:hidden mt-24">
                    <div className="flex container justify-between text-center px-2 items-center">
                        <div className="px-6 border border-[#808080]"/>
                        <div className="font-bold w-[248px] h-60px] text-[20px]">
                            FAQ
                        </div>
                        <div className="px-6 border border-[#808080]"/>
                    </div>
                        <div className="flex justify-center mx-auto pt-3 w-[157px]">
                            <p className="text-center text-[16px] text-[#757572]">Frequently Asked Questions</p>
                        </div>
                        <div className="flex container mx-auto  pt-8  gap-[10px] flex-col">
                            <div className="flex flex-col container mx-auto rounded-lg w-[353px] h-[241px] border border-black">
                                <div className="flex container mx-auto justify-between">
                                    <p className="text-[13px] font-medium leading-[24px] pt-4 px-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                    </p>
                                        <div className=" pr-5 pt-4">
                                            <div className="bg-black w-[24px] h-[29px] px-1 pt-1.5 rounded-md">
                                                <FaMinus className="text-white"/>
                                            </div>
                                        </div>
                                </div>
                                <div className="pt-6 px-3 w-[290px] h-[119px] text-[13px] font-[400] text-[#757572]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className="flex  container mx-auto rounded-lg w-[353px] h-[89px] shadow-lg">
                                <div className="flex container mx-auto justify-between">
                                    <p className="text-[13px] font-medium leading-[24px] pt-4 px-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                    </p>
                                        <div className=" pr-5 pt-6">
                                            <div className="bg-white border  w-[25px] h-[29px] px-1 pt-1.5 rounded-md">
                                                <FaPlus className="text-[#757572]"/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="flex  container mx-auto rounded-lg w-[353px] h-[89px] shadow-lg">
                                <div className="flex container mx-auto justify-between">
                                    <p className="text-[13px] font-medium leading-[24px] pt-4 px-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                    </p>
                                        <div className=" pr-5 pt-6">
                                            <div className="bg-white border  w-[25px] h-[29px] px-1 pt-1.5 rounded-md">
                                                <FaPlus className="text-[#757572]"/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="flex  container mx-auto rounded-lg w-[353px] h-[89px] shadow-lg">
                                <div className="flex container mx-auto justify-between">
                                    <p className="text-[13px] font-medium leading-[24px] pt-4 px-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                    </p>
                                        <div className=" pr-5 pt-6">
                                            <div className="bg-white border  w-[25px] h-[29px] px-1 pt-1.5 rounded-md">
                                                <FaPlus className="text-[#757572]"/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="flex  container mx-auto rounded-lg w-[353px] h-[89px] shadow-lg">
                                <div className="flex container mx-auto justify-between">
                                    <p className="text-[13px] font-medium leading-[24px] pt-4 px-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                    </p>
                                        <div className=" pr-5 pt-6">
                                            <div className="bg-white border  w-[25px] h-[29px] px-1 pt-1.5 rounded-md">
                                                <FaPlus className="text-[#757572]"/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 mx-auto container px-2 ">
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
            {/* desktop */}
            <div className=" hidden container mx-auto md:flex flex-col ">
                <div className="flex justify-around text-center items-center">
                    <div className="px-24 border border-black"/>
                        <div className="w-[333px] h-[123px] flex flex-col text-center">
                            <h1 className="font-bold text-[40px]">FAQ</h1>
                            <p className="text-[19px] pt-4 text-[#757572]">Frequently Asked Questions</p>
                    </div>
                    <div className="px-24 border border-black"/>
                </div>
                <div className="flex container mx-auto  pt-12  gap-[20px] flex-col">
                    <div className="flex flex-col container mx-auto rounded-lg w-[1040px] h-[229px] border border-black">
                        <div className="flex container mx-auto justify-between px-2 py-2">
                            <p className="text-[22px] font-medium leading-[24px] py-6 px-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                            </p>
                                <div className="pr-5 pt-4">
                                    <div className="bg-black w-[37px] h-[45px] px-1 pt-1.5 rounded-md flex justify-center">
                                        <FaMinus className="text-white text-4xl px-2"/>
                                    </div>
                                </div>
                        </div>
                            <div className="py-6 px-6 w-[px] h-[100px] text-[19px] font-[400] text-[#757572]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip labore et dolore magna aliqua.
                            </div>
                    </div>
                    <div className="flex  container mx-auto rounded-lg w-[1040px] h-[84px] shadow-lg">
                        <div className="flex container mx-auto justify-between py-3">
                                <p className="text-[23px] font-medium leading-[24px] pt-4 px-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </p>
                                <div className=" pr-5 pt-1">
                                    <div className="bg-white border w-[37px] h-[45px] px-1 pt-1 rounded-md flex justify-center">
                                        <FaPlus className="text-[#757572] text-4xl px-2"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="flex  container mx-auto rounded-lg w-[1040px] h-[84px] shadow-lg">
                        <div className="flex container mx-auto justify-between py-3">
                                <p className="text-[23px] font-medium leading-[24px] pt-4 px-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </p>
                                <div className=" pr-5 pt-1">
                                    <div className="bg-white border w-[37px] h-[45px] px-1 pt-1 rounded-md flex justify-center">
                                        <FaPlus className="text-[#757572] text-4xl px-2"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="flex  container mx-auto rounded-lg w-[1040px] h-[84px] shadow-lg">
                        <div className="flex container mx-auto justify-between py-3">
                                <p className="text-[23px] font-medium leading-[24px] pt-4 px-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </p>
                                <div className=" pr-5 pt-1">
                                    <div className="bg-white border w-[37px] h-[45px] px-1 pt-1 rounded-md flex justify-center">
                                        <FaPlus className="text-[#757572] text-4xl px-2"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="flex  container mx-auto rounded-lg w-[1040px] h-[84px] shadow-lg">
                        <div className="flex container mx-auto justify-between py-3">
                                <p className="text-[23px] font-medium leading-[24px] pt-4 px-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </p>
                                <div className=" pr-5 pt-1">
                                    <div className="bg-white border w-[37px] h-[45px] px-1 pt-1 rounded-md flex justify-center">
                                        <FaPlus className="text-[#757572] text-4xl px-2"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="pt-12 mx-auto container px-2 ">
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
            </div>
        </div>
    );
};

export default FAQ;