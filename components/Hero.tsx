'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <section className="flex justify-between items-center">
      <div className="w-[50%]">
        <h1 className="text-[1.5em] pr-[50px] text-blue-1 leading-8 font-bold">
          Let&apos;s make <span className="">knowledge</span> and <span className="">skills</span> accessible and affordable
        </h1>
      </div>
      <div className="w-[50%]">
        <Carousel
          //   orientation="vertical"
          plugins={[plugin.current]}
          className="w-full max-w h-[100px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  className="rounded-lg object-cover w-[100%] h-[100%]"
                  src={`/images/carousel/slider` + (index + 1) + `.svg`}
                  alt=""
                  width={0}
                  height={0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
