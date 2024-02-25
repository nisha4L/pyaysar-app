import Image from "next/image";

const About = () => {
    return(
        <>
        {/* desktop */}
        <div className="hidden md:flex flex-col container mx-auto pt-4">
            <div className="flex justify-around text-center items-center">
                <div className="px-24 border border-black"/>
                <div className="w-[333px] h-[123px] flex flex-col text-center">
                    <h1 className="font-bold text-[40px]">Making Invoicing Effortless</h1>
                    <p className="text-[19px] pt-4 text-[#757572]">About Us</p>
                </div>
                <div className="px-24 border border-black"/>
            </div>
            <div className="flex container mx-auto mt-20 justify-around">
                <div className="w-[599px] h-[160px]">
                    <h1 className="font-bold text-[28px] py-1">At Pyaysar</h1>
                        <p className="pt-3 text-[19px] text-left font-[400] leading-[29px]">
                            we understand the importance of <span className="text-[#2D36FB]">efficient</span> and <span className="text-[#2D36FB]">hassle-free invoicing</span> for your business.
                        </p>
                        <p className="text-[19px] text-left font-[400] leading-[29px]">
                            We are dedicated to simplifying your invoicing processes, allowing you to focus on what matters most – growing your business.
                        </p>
                </div>
                        <Image
                            src="/images/about2.png"
                            alt="About Us Photo"
                            width={333}
                            height={209}
                        />
            </div>
            <div className="flex container mx-auto mt-20 justify-around gap-10">
                <Image
                    src="/images/about2.png"
                    alt="About Us Photo"
                    width={333}
                    height={209}
                />
                
                <div className="w-[599px] h-[160px]">
                    <h1 className="font-bold text-[28px] py-1">Our Mission: Making Invoicing Effortless</h1>
                        <p className="pt-3 text-[19px] text-left  leading-[29px] font-[400]">
                        Our mission is to provide you with a <span className="text-[#2D36FB]">comprehensive and user-friendly invoicing solution</span>. 
                        Whether you're a <span className="text-[#2D36FB]">small business owner, a freelancer</span>, or part of a larger enterprise, our services are designed to meet your unique invoicing needs.
                        </p>
                </div>
            </div>
        </div>
        {/* Mobile */}
        <div className="flex flex-col container mx-auto pt-4 md:hidden">
            <div className="flex justify-between text-center items-center px-2">
                <div className="px-6 border border-black"/>
                <h1 className="font-bold w-[248px] h-[60px] text-[20px]">Making Invoicing Effortless</h1>
                <div className="px-6 border border-black"/>
            </div>
            <p className="text-center py-6 text-[13px] text-[#757572]">About Us</p>
            <div className="w-[332px] h-[208px]  mx-auto flex flex-col">
                <h1 className="font-bold text-[19px] py-1">At Pyaysar</h1>
                <p className="pt-3 text-[13px] text-left font-[400]">
                    we understand the importance of <span className="text-[#2D36FB]">efficient</span> and <span className="text-[#2D36FB]">hassle-free invoicing</span> for your business. 
                    We are dedicated to simplifying your invoicing processes, allowing you to focus on what matters most – growing your business.
                </p>
                <div className="flex container justify-between">
                    <div/>
                        <Image
                            src="/images/about1.png"
                            alt="About Us Photo"
                            width={100}
                            height={59}
                        />
                </div>
            </div>
            <div className="w-[332px] h-[208px]  mx-auto flex flex-col">
                <h1 className="font-bold text-[19px] py-1">Our Mission:  Making Invoicing Effortless</h1>
                <p className="pt-3 text-[13px] text-left font-[400]">
                    we understand the importance of <span className="text-blue-800">efficient</span> and <span className="text-blue-800">hassle-free invoicing</span> for your business. 
                    We are dedicated to simplifying your invoicing processes, allowing you to focus on what matters most – growing your business.
                </p>
                <div className="flex container justify-between">
                    <div/>
                        <Image
                            src="/images/about1.png"
                            alt="About Us Photo"
                            width={100}
                            height={59}
                        />
                </div>
            </div>
        </div>
        </>
    );
};

export default About;