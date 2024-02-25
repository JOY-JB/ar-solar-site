import React from "react";
import person1 from "../../../../public/assets/images/testimonial/testimonial1.png";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Testimonial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white">
      <div className="flex flex-col items-center w-full ">
        <div className="w-10/12 bg-[#484F8E] h-48 rounded-b-[50px] flex justify-evenly ">
          <div className="flex flex-col items-center  justify-center">
            <h2 className="text-[40px]">Average Rating</h2>
            <span className="text-[80px]">4.7</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[40px]">Average Rating</h2>
            <span className="text-[80px]">1,300+</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[40px]">Average Rating</h2>
            <span className="text-[80px]">
              80<span className="text-xl">days</span>
            </span>
          </div>
        </div>
        {/* <h1 className="text-[50px]">Testimonials</h1>
      <div>
        <Image src={person1} alt="person-1" />
      </div> */}
        <h3 className="uppercase text-[50px] mt-[200px] mb-[70px]">
          Testimonials
        </h3>
        <Carousel className=" ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="rounded-full bg-white size-52 flex justify-center items-center  mx-auto">
                  {/* <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    </CardContent>
                  </Card> */}
                  <Image
                    src={person1}
                    alt="person-1"
                    className="size-48  rounded-full  object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
