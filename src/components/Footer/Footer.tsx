import Image from "next/image";
import Link from "next/link";
import { AiOutlineApple } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
    return(
        <footer className="flex flex-col container mx-auto mt-52">
            {/* Desktop */}
            <div className="hidden md:flex container  justify-around  px-32 mx-auto pr-0">
            <div className="flex flex-col w-full mx-auto pr-32">
            <div className="w-full h-[68px] flex mx-auto container">
                <Image
                    src="/images/footer.png"
                    alt="Logo"
                    width={68}
                    height={68}
                />
               <div className="flex flex-col pb-0">
                    <p className="ml-3 font-medium text-[23px]">Pyaysar</p>
                    <p className="ml-3 pt-2 text-[19px]">something are good</p>
               </div>
            </div>
            <div className="flex pt-6 gap-[24px] text-black text-[19px] font-medium">
                <Link href="/">Home</Link>
                <Link href="/">Features</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact</Link>
            </div>
            </div>
            <div className="flex flex-col text-center mx-auto container ml-32">
                <h1 className="text-[23px] font-medium">Coming Soon</h1>
                <div className="flex gap-4 items-center justify-center pt-6">
                <div className=" border border-gray-500 w-[175px] h-[57px] rounded-xl flex cursor-pointer">
                    <div className="pt-2 p-4 pr-0">
                        <IoLogoGooglePlaystore className="w-[24px] h-[27px]"/>
                    </div>
                    <div className="flex flex-col text-center pt-2 ml-2">
                            <p className="text-[13px]">Download on the</p>
                            <p className="text-[19px] text-[#2D36FB]">Google Play</p>
                    </div>
                </div>
                <div className=" border border-gray-500 w-[175px] h-[57px] rounded-xl flex cursor-pointer">
                    <div className="pt-2 p-4 pr-0">
                        <AiOutlineApple className="w-[24px] h-[27px]"/>
                    </div>
                    <div className="flex flex-col text-center pt-2 ml-2">
                            <p className="text-[13px]">Download on the</p>
                            <p className="text-[19px] text-[#2D36FB]">App Store</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Mobile */}
           <div className="w-[360px] h-[130px] flex mx-auto justify-around md:hidden">
            <div className="w-full h-[101px]  flex flex-col pt-3 ">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <p className="text-[16px] font-medium">Pyaysar</p>
                <p className="text-[13px]">something are good</p>
                <div className="pt-2 flex gap-2 text-black text-[11px] font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/">Features</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">Contact</Link>
                </div>
            </div>
            <div className="flex flex-col text-center">
                <p className="text-[16px] font-medium">Coming Soon</p>
                <div className="w-[118px] h-[40px] border border-gray-500 rounded-xl flex cursor-pointer">
                    <div className="pt-2 p-4 pr-0">
                        <IoLogoGooglePlaystore className="w-[14px] h-[16px]"/>
                    </div>
                    <div className="flex flex-col text-center pt-1 ml-1">
                            <p className="text-[8px]">Download on the</p>
                            <p className="text-[11px] text-[#2D36FB]">Google Play</p>
                    </div>
                </div>
                <div className="pt-1"/>
                <div className="w-[118px] h-[40px] border border-gray-500 rounded-xl flex cursor-pointer">
                    <div className="pt-2 p-4 pr-0">
                        <AiOutlineApple className="w-[14px] h-[16px]"/>
                    </div>
                    <div className="flex flex-col text-center pt-1 ml-1">
                            <p className="text-[8px]">Download on the</p>
                            <p className="text-[11px] text-[#2D36FB]">App Store</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col gap-5 py-5 mx-[35px]">
            <div className="flex justify-center items-center gap-5">
                <Link href="/" className="border-black w-6 md:w-7 h-6 md:h-7 flex justify-center items-center border-[0.5px]  rounded-md">
                    <RiTwitterXFill/>
                </Link>
                <Link href="/" className="border-black w-6 md:w-7 h-6 md:h-7 flex justify-center items-center border-[0.5px]  rounded-md">
                    <SlSocialLinkedin/>
                </Link>
                <Link href="/" className="border-black w-6 md:w-7 h-6 md:h-7 flex justify-center items-center border-[0.5px]  rounded-md">
                    <FiFacebook/>
                </Link>
            </div>
            <div className=" border border-black"/>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
                <p className="flex gap-7 text-sm md:text-lg leading-5 md:leading-12">
                    &copy; Copyright. All rights reserved.
                </p>
                <div className="hidden md:inline border border-black w-5 rotate-90"/>
                <div className='flex gap-7 text-sm md:text-lg leading-5 md:leading-12 font-medium'>
                    <Link href="/">Privacy</Link>
                    <Link href="/">Terms</Link>
                    <Link href="/">Copyright</Link>
        </div>
            </div>
        </div>
        </footer>
    )
};

export default Footer;