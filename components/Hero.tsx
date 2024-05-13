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
    <section className="flex justify-between items-center my-8">
      <div className="w-[50%]">
        <h1 className="text-[2em] pr-[50px] font-bold text-blue-1">
          Let&apos;s make <span className="text-green-1">working</span> knowledge and skill accessible and affordable
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
                  className="rounded-lg"
                  src={`/images/carousel/slider` + (index + 1) + `.svg`}
                  alt=""
                  width={800}
                  height={50}
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
