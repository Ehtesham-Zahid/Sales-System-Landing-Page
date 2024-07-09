// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/shadcn-components/ui/button";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./Slider.css";

// import required modules
import { EffectCreative } from "swiper/modules";

import Slide1 from "../../assets/Images/Slider/1.jpg";
import Slide2 from "../../assets/Images/Slider/2.jpg";
import Slide3 from "../../assets/Images/Slider/3.jpg";
import Slide4 from "../../assets/Images/Slider/4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <>
      <div className="   flex justify-center items-start    ">
        <div className="  w-11/12 sm:w-5/6 2xl:w-3/4 ">
          {/* <div className="h-5/6"> */}
          <p className="text-4xl lg:text-5xl font-black mb-10 text-center">
            Customer Success Stories
          </p>
          <Swiper
            modules={[EffectCreative, Navigation, Pagination, Scrollbar, A11y]}
            grabCursor={true}
            effect={"creative"}
            pagination={{ clickable: true }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-125%", 0, -800],
                rotate: [0, 0, -90],
              },
              next: {
                shadow: true,
                translate: ["125%", 0, -800],
                rotate: [0, 0, 90],
              },
            }}
            className="mySwiper5 h-fit w-full mb-10 lg:mb-40"
          >
            <SwiperSlide className="bg-blue-200 flex flex-col items-start justify-start px-4 py-4 sm:py-5  lg:px-10 xl:py-12 xl:px-20  relative  ">
              <img
                src={Slide1}
                className="h-64 min-[500px]:h-72    lg:h-80 xl:h-96 2xl:h-[450px] rounded-md w-full "
              />
              <div className="flex w-full justify-start mt-3">
                <p className="bg-blue-400 rounded-full text-lg font-bold p-2 me-2">
                  MARKETING
                </p>
                <p className="bg-blue-400 rounded-full text-lg font-bold p-2">
                  DEVELOPER
                </p>
              </div>
              <p className="mt-8 lg:mt-6 sm:mt-10 xl:mt-10 text-[1.6rem] min-[500px]:text-3xl md:text-4xl font-bold  text-blue-600 w-11/12 md:w-5/6 tracking-wide">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <p className="text-xl md:text-2xl font-medium tracking-wide text-blue-600 mt-8 sm:mt-10 lg:mt-6 w-11/12 md:w-5/6 xl:mt-10">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <div className="static bottom-8 min-[500px]:bottom-10 left-5 lg:left-8">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full text-xl px-8 py-7 mt-8 lg:mt-6 xl:mt-10">
                  Read Case Study
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-purple-200 flex flex-col items-start justify-start px-4 py-4 sm:py-5  lg:px-10 xl:py-12 xl:px-20  relative  ">
              <img
                src={Slide2}
                className="h-64 min-[500px]:h-72    lg:h-80 xl:h-96 2xl:h-[450px] rounded-md w-full "
              />
              <div className="flex w-full justify-start mt-3">
                <p className="bg-purple-400 rounded-full text-lg font-bold p-2 me-2">
                  MARKETING
                </p>
                <p className="bg-purple-400 rounded-full text-lg font-bold p-2">
                  DEVELOPER
                </p>
              </div>
              <p className="mt-8 lg:mt-6 sm:mt-10 xl:mt-10 text-[1.6rem] min-[500px]:text-3xl md:text-4xl font-bold  text-purple-600 w-11/12 md:w-5/6 tracking-wide">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <p className="text-xl md:text-2xl font-medium tracking-wide text-purple-600 mt-8 sm:mt-10 lg:mt-6 w-11/12 md:w-5/6 xl:mt-10">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <div className="static bottom-8 min-[500px]:bottom-10 left-5 lg:left-8">
                <Button className="bg-purple-600 hover:bg-purple-700 rounded-full text-xl px-8 py-7 mt-8 lg:mt-6 xl:mt-10">
                  Read Case Study
                </Button>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className="bg-red-200 flex flex-col items-start justify-start px-4 py-4 sm:py-5  lg:px-10 xl:py-12 xl:px-20  relative  ">
              <img
                src={Slide3}
                className="h-64 min-[500px]:h-72    lg:h-80 xl:h-96 2xl:h-[450px] rounded-md w-full "
              />
              <div className="flex w-full justify-start mt-3">
                <p className="bg-red-400 rounded-full text-lg font-bold p-2 me-2">
                  MARKETING
                </p>
                <p className="bg-red-400 rounded-full text-lg font-bold p-2">
                  DEVELOPER
                </p>
              </div>
              <p className="mt-8 lg:mt-6 sm:mt-10 xl:mt-10 text-[1.6rem] min-[500px]:text-3xl md:text-4xl font-bold  text-red-600 w-11/12 md:w-5/6 tracking-wide">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <p className="text-xl md:text-2xl font-medium tracking-wide text-red-600 mt-8 sm:mt-10 lg:mt-6 w-11/12 md:w-5/6 xl:mt-10">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <div className="static bottom-8 min-[500px]:bottom-10 left-5 lg:left-8">
                <Button className="bg-red-600 hover:bg-red-700 rounded-full text-xl px-8 py-7 mt-8 lg:mt-6 xl:mt-10">
                  Read Case Study
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-yellow-200 flex flex-col items-start justify-start px-4 py-4 sm:py-5  lg:px-10 xl:py-12 xl:px-20  relative  ">
              <img
                src={Slide4}
                className="h-64 min-[500px]:h-72    lg:h-80 xl:h-96 2xl:h-[450px] rounded-md w-full "
              />
              <div className="flex w-full justify-start mt-3">
                <p className="bg-yellow-400 rounded-full text-lg font-bold p-2 me-2">
                  MARKETING
                </p>
                <p className="bg-yellow-400 rounded-full text-lg font-bold p-2">
                  DEVELOPER
                </p>
              </div>
              <p className="mt-8 lg:mt-6 sm:mt-10 xl:mt-10 text-[1.6rem] min-[500px]:text-3xl md:text-4xl font-bold  text-yellow-600 w-11/12 md:w-5/6 tracking-wide">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <p className="text-xl md:text-2xl font-medium tracking-wide text-yellow-600 mt-8 sm:mt-10 lg:mt-6 w-11/12 md:w-5/6 xl:mt-10">
                Insight-Driven Success: Unorthodox AI's Role in Transforming
                News UK's Campaign Analytics
              </p>
              <div className="static bottom-8 min-[500px]:bottom-10 left-5 lg:left-8">
                <Button className="bg-yellow-600 hover:bg-yellow-700 rounded-full text-xl px-8 py-7 mt-8 lg:mt-6 xl:mt-10">
                  Read Case Study
                </Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
