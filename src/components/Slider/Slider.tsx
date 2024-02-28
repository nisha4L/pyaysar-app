
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

type CardData = {
    id: number;
    title: string;
  };
  
  // Define the props type for the CardSlider component
  type CardSliderProps = {
    data: CardData[];
    interval?: number; // Optional prop for customizing the autoplay interval
  };
  
  const CardSlider: React.FC<CardSliderProps> = ({ data, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };
  
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
  
      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [currentIndex, interval]);
  
    // Safely access the current card data with optional chaining
    const currentCard = data[currentIndex];
  
    
      return (
        <div className="flex container justify-center">
        <div className="container ml-16">
         {/* <Slider {...sliderSettings}>
              {featuresData.map((item) => (
                  <div key={item.id} className="flex-col container mx-auto border border-black rounded-lg w-[248px] h-[209px] mr-2">
                      <h1 className="px-4 text-[16px] font-medium py-6"> 
                          {item.title}
                      </h1>
                      <div className="pt-16 px-[182px]">
                          <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                              <FaArrowRight className="text-xl text-white"/>
                          </div>
                      </div>
                  </div>
              ))}
         </Slider> */}
         <div className="flex-col container mx-auto border border-black rounded-lg w-[248px] h-[209px] overflow-hidden">
            <h1 className="px-4 text-[16px] font-medium py-6">
                {currentCard?.title}
            </h1>
            <div className="pt-16 px-[182px] pr-0">
                <div className="bg-black rounded-lg w-[44px] h-[32px] flex items-center justify-center">
                              <FaArrowRight className="text-xl text-white"/>
                </div>
            </div>
         </div>
         </div>
              <button onClick={nextSlide} className="pt-4 ml-5">
                  <IoIosArrowForward className="text-3xl"/>
              </button>
        </div>
      );
};

export default CardSlider;