import Image from "next/image";

const Contact = () => {
    return(
        <div className="flex mt-14 md:mt-36">
            {/* Mobile */}
           <div className="flex flex-col container mx-auto pt-4 md:hidden">
                <div className="flex justify-between text-center items-center px-2">
                    <div className="px-6 border border-black"/>
                    <h1 className="font-bold w-[248px] h-[30px] text-[20px]">Work with Us</h1>
                    <div className="px-6 border border-black"/>
                </div>
                <p className="text-center pt-2 text-[13px] text-[#757572]">Contact Us</p>
                <div className="w-[300px] h-[78px] mx-auto flex flex-col">
                <p className="pt-8 text-[13px] text-center font-[400]">
                    Feel free to get in touch with us if you have any <span className="text-[#2D36FB]">questions, suggestions, or inquiries</span>.
                    Our dedicated team is here to assist you. You can reach out to us through the contact form below
                </p>
                    <div className="flex container mx-auto justify-center pt-3">
                        <Image
                            src="/images/group.png"
                            alt="Group"
                            width={100}
                            height={80}
                        />
                    </div>
                <div className="flex mx-auto container pt-3 px-3 flex-row">
                    <div className="border border-black rounded-lg  w-[300px] h-[44px] justify-between flex">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            className="flex placeholder:font-light placeholder:text-[11px] placeholder:text-[#757572] placeholder:px-2 placeholder:pt-3"
                        />
                        <div className="pt-2 pr-2">
                            <button className="bg-black rounded-lg w-[75px] h-[26px]">
                                <p className="text-white text-[9px] px-3 py-1.5">Contact us</p>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
           </div>
           {/* Desktop */}
           <div className="hidden md:flex flex-col container mx-auto pt-6  ">
                <div className="flex justify-around text-center items-center">
                    <div className="px-24 border border-black"/>
                        <div className="w-[333px] h-[123px] flex flex-col text-center">
                            <h1 className="font-bold text-[40px]">Work with Us</h1>
                            <p className="text-[19px] pt-4 text-[#757572]">Contact Us</p>
                    </div>
                    <div className="px-24 border border-black"/>
                </div>
                <div className="flex  pt-6 mx-auto container justify-around">
                    <div className="h-[229px]">
                        <Image
                            src="/images/contact4.png"
                            alt="Contact"
                            width={400}
                            height={229}
                        />
                    </div>
                    <div className="w-[599px] h-[145px]  flex flex-col pt-4">
                        <p className="text-[19px] text-[#222222] font-[400] leading-[29px] text-left">
                        Feel free to get in touch with us if you have any <span className="text-[#2D36FB]">questions, suggestions, or inquiries</span>.
                        Our dedicated team is here to assist you. You can reach out to us through the contact form below
                        </p>
                        <div className="pt-[24px]">
                            <div className="border border-black rounded-lg  w-[599px] h-[62px] justify-between flex">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email Address"
                                    className="flex placeholder:font-light w-full placeholder:text-[16px] placeholder:text-[#757572] placeholder:px-2 placeholder:pt-5"
                                />
                                <div className="pt-2 pr-2">
                                    <div className="bg-black rounded-lg w-[132px] h-[46px]">
                                        <p className="text-white text-[16px] px-5 py-2.5">Contact us</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
};

export default Contact;