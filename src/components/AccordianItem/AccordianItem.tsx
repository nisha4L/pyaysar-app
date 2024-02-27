"use client";

import { FaMinus, FaPlus } from "react-icons/fa";


const AccordianItem = ({open,toggle,id,title,content}) => {
  return (
   <div className="container mx-auto justify-center items-center">
     <div
    className={`mb-2 shadow-lg rounded-2xl md:rounded-3xl p-5 md:p-8${
      open ? 'border border-black' : 'border border-gray-500'
    }`}
  >
    <div
      className='flex items-center justify-between cursor-pointer'
      onClick={() => toggle(id)}
    >
      <div className='text-sm md:text-xl leading-6 md:leading-9 text-neutral-800 font-medium'>
        {title}
      </div>
      <div
        className={`w-[23.6px] md:w-[37px] h-[29px] md:h-[45px] rounded-sm md:rounded-md flex justify-center items-center transition-all duration-300 p-1 ${
          open ? 'bg-black' : 'border border-gray-700'
        }`}
      >
        {open ? <FaMinus className="text-white" /> : <FaPlus />}
      </div>
    </div>

    <div
      className={`text-sm md:text-lg leading-5 md:leading-7 text-neutral-600 transition-all duration-500 overflow-hidden ${
        open ? 'w-full h-auto mt-8' : 'h-0'
      }`}
    >
      {content}
    </div>
  </div>
   </div>
);

}

export default AccordianItem;