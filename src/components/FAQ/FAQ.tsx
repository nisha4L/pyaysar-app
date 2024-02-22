import { FaMinus } from "react-icons/fa";

const FAQ = () => {
    return (
        <div className="flex mt-32">
            {/* mobile */}
            <div className="md:hidden flex flex-col container mx-auto mt-32 border">
                <div className="flex justify-between text-center items-center px-2">
                    <div className="px-6 border border-black"/>
                    <h1 className="font-bold w-[248px] h-[30px] text-[20px]">FAQ</h1>
                    <div className="px-6 border border-black"/>
                </div>
                <div className="flex justify-center  mx-auto  pt-3 w-[157px]">
                <p className="text-center text-[16px] text-[#757572]">Frequently Asked Questions</p>
                </div>
                <div className="flex container mx-auto border border-black pt-8 flex-col">
                    <div className="flex flex-col container mx-auto rounded-lg w-[353px] h-[241px] border border-black">
                        <div className="flex container mx-auto justify-between">
                            <p className="text-[13px] font-medium leading-[24px] pt-4 px-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                            </p>
                            <div className="border pr-5 pt-4">
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
                    
                </div>
            </div>
        </div>
    );
};

export default FAQ;