"use client";

import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";



const ToastBar = () => {
    
    const [ closeBar, setCloseBar] = useState(true);

    
  const handleClick = () => {
    localStorage.setItem("hideToastBar", "true");
    setCloseBar(false);
  };
  useEffect(() => {
    const hideToastBar = localStorage.getItem("hideToastBar") === "true";
    if (hideToastBar) {
      setCloseBar(true);
    }
  }, []);

    return(
        <>
            { closeBar && (
                <div className="flex w-full bg-[#2D36FB] text-white md:py-2 py-1 px-2">
                <div className="flex mx-auto justify-between items-center md:py-1 md:container md:justify-around">
                    <p className="text-[9px]  font-medium md:hidden">
                        Lorem ipsum dolor sit amet consectetur ipsum dolor sit consectetur ipsum.
                    </p>
                    <p className="hidden md:block font-medium text-[13px]">
                        Lorem ipsum dolor sit amet consectetur ipsum dolor sit consectetur ipsum ipsum dolor sit consectetur ipsum dolor.
                    </p>
                    <button onClick={handleClick}  className="py-0 ml-2">
                        <MdOutlineClose className="cursor-pointer md:text-3xl text-xl text-black"/>
                    </button>
                </div> 
            </div>
            )}
        </>
    );
};

export default ToastBar;