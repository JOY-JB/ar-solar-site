import Image from "next/image";
import person1 from "../../../../public/assets/images/testimonial/testimonial1.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Testimonial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white pb-[200px]">
      <div className="flex flex-col items-center w-full ">
        <div className="w-full md:w-10/12 bg-[#484F8E]/70 md:bg-[#484F8E] -mt-32 md:mt-0 h-24 md:h-40 rounded-full md:rounded-none md:rounded-b-[50px] flex items-center justify-evenly">
          <div className="flex flex-col items-center justify-center mt-4 md:mt-0 w-1/3 text-center">
            <h2 className="flex text-lg md:text-xl lg:text-2xl xl:text-3xl">
              <span className="hidden md:block">Average </span>
              <span className="md:hidden">Avg.</span>
              <span>&nbsp;Rating</span>
            </h2>
            <span className="text-lg md:text-5xl lg:text-6xl xl:text-6xl">
              4.7
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 md:mt-0 w-1/3 text-center">
            <h2 className="flex text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Monthly Users
            </h2>
            <span className="text-lg md:text-5xl lg:text-6xl xl:text-6xl">
              1,300+
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 md:mt-0 w-1/3 text-center">
            <h2 className="flex text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Install Time
            </h2>
            <span className="text-lg md:text-5xl lg:text-6xl xl:text-6xl">
              80
              <span className="text-base md:text-lg lg:text-xl xl:text-2xl">
                days
              </span>
            </span>
          </div>
        </div>

        <h3 className="uppercase text-5xl font-semibold mt-[200px] mb-[70px]">
          Testimonials
        </h3>
        <Carousel className="max-w-sm md:max-w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="rounded-full bg-white size-52 flex justify-center items-center  mx-auto">
                  <Image
                    src={person1}
                    alt="person-1"
                    className="size-48  rounded-full  object-cover"
                  />
                </div>
                <p className="text-[20px] text-center mt-[22px]">John Doe</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block text-black" />
          <CarouselNext className="hidden md:block text-black" />
        </Carousel>
        <p className="mt-[67px] md:text-2xl px-8 md:px-0 max-w-7xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
