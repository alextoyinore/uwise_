import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import CourseCard from './CourseCard'

const CourseSlider = () => {
  return (
    <section className="flex flex-col my-10">
        <h2 className="my-3 font-bold text-lg">Best Sellers</h2>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <CourseCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
  )
}

export default CourseSlider
