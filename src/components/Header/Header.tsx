import Image from "next/image";
import Link from "next/link";

const Header =() => {
    return(
        <header className=" flex mx-auto container justify-between">
            {/* Mobile */}
            <div className=" md:hidden flex gap-5 items-center justify-between container px-4 pt-[7px]">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={35}
                    height={35}className="flex gap-5 items-center"
                />
                <div className="flex items-center gap-0">
                    <Image
                        src="/images/world.png"
                        alt="World"
                        width={13}
                        height={13}
                    />
                    <select title="Lang" className="cursor-pointer ml-2 w-[64px] text-xs font-medium bg-transparent">
                        <option>English</option>
                        <option>Myanmar</option>
                    </select>
                    <Image
                        src="/images/menu.png"
                        alt="Menu"
                        width={32}
                        height={32}
                        className="ml-4"
                    />
                </div>
            </div>
            {/* Desktop */}
            <div className="md:flex  hidden mx-auto container  justify-around py-[19px]">
                    <div className="flex ml-6  gap-5 items-center">
                        <Image
                            src="/images/oval.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <div className="flex gap-12 text-lg ml-4 leading-6 text-black font-medium">
                            <Link href="/">Home</Link>
                            <Link href="/">Features</Link>
                            <Link href="/">About Us</Link>
                            <Link href="/">Contact</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex pr-0 pt-1">
                            <Image
                                src="/images/world.png"
                                alt="World Logo"
                                width={23}
                                height={23}
                            />
                        </div>
                        <div className="pt-1.5 mr-0">
                        <select
                            title="menu"
                            className="text-sm leading-7 font-medium bg-transparent w-[75px]"
                        >
                            <option>English</option>
                            <option>Myanmar</option>
                        </select>
                        </div>
                        <div className="pt-1">
                            <button className="bg-black rounded-lg text-white font-medium w-[124px] h-[50px]">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
        </header>
    );
};

export default Header;