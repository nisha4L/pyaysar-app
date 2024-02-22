import Image from "next/image";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const HeroSection = () => {
    return(
       <>
       {/* Mobile */}
       <div className="mt-16 px-2 container mx-auto md:hidden">
            <div className="flex-col justify-center">
                <h1 className="text-center text-[#2D36FB]  font-bold tracking-wide text-[25px]">Stop Wasting</h1>
                <h1 className="text-center text-black font-bold tracking-wide text-[25px]">Your Time with Using Paper Invoice</h1>
            </div>
            <div className="flex mx-auto px-4 py-4 justify-center items-center">
                <Image
                    src="/images/Hero1.png"
                    alt="Hero"
                    width={205}
                    height={156}
                    className="items-center shadow-lg shadow-gray-500 rounded-lg"
                />
            </div>
            <div className="flex mx-auto text-center justify-center leading-wide font-medium text-[13px] text-[#222222] py-6 tracking-wide">
                The invoice software improves speed and professionalism by allowing for branded invoice production and customization.
            </div>
            <div className="flex mx-auto justify-center gap-5 items-center py-2">
                <button className="text-black bg-transparent border border-black rounded-xl w-[96px] h-[35px] font-medium text-[13px]">
                    Login
                </button>
                <button className="text-white flex text-center py-2 px-4  bg-black rounded-xl w-[96px] h-[35px] font-medium text-[13px]">
                    Invoice <FaArrowRight className="ml-2 pt-1"/>
                </button>
            </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex flex-col container mx-auto  mt-10 justify-center text-center">
            <h1 className="text-center text-5xl text-[#2D36FB] font-bold tracking-wide">
                Stop Wasting
            </h1>
            <h1 className="text-center text-5xl py-8 font-bold tracking-wide">
                Your Time with Using Paper Invoice
            </h1>
            <div className="flex mx-auto px-4 py-4 justify-center items-center">
                <Image
                    src="/images/DesktopHero.jpg"
                    alt="Hero"
                    width={326}
                    height={243}
                    quality={100}
                    unoptimized
                    className="items-center rounded-lg shadow-md shadow-black"
                />
            </div>
           <div className="flex mx-auto py-10">
                <p className="text-center text-[19px] w-[653px] font-medium text-[#222222]">
                    The invoice software improves speed and professionalism by allowing for branded invoice production and customization.
                </p>
           </div>
           <div className="flex items-center justify-center mx-auto">
                <button className="text-white flex text-center pt-3 px-12  bg-black rounded-lg w-[197px] h-[50px] font-medium text-[19px]">
                    Invoice <div className="ml-4 pt-1"><LiaLongArrowAltRightSolid/></div>
                </button>
           </div>
        </div>
       </> 
    )
};

export default HeroSection;