"use client";

import Image from "next/image";
import React from "react";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import Link from "next/link";
import {
  Aperture,
  BrainCircuit,
  Layers,
  Mail,
  MessageCircleQuestion,
  MessageSquareQuote,
  Rss,
} from "lucide-react";
import BigInfo from "@/components/BigInfo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "@/components/BlogCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="flex mt-20 justify-between ">
        <div className="w-[70%]">
          <h2 className="text-gray-400 flex items-center gap-2">
            <Aperture /> Explore
          </h2>
          <div className="flex flex-wrap gap-5 my-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="md:basis-1/3 lg:basis-1/4">
                <CourseCard />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%]">
          <h2 className="text-gray-400 flex items-center gap-2">
            <MessageCircleQuestion /> Requests
          </h2>
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="flex flex-col p-3 gap-2 my-5 bg-gray-50 cursor-pointer hover:bg-gray-100 rounded-2xl"
            >
              <div className="flex gap-x-2 content-center ">
                <Image
                  className="rounded-full max-h-[35px]"
                  src={
                    index % 2 > 0
                      ? "/images/uwise_c.svg"
                      : "/images/uwise_b.svg"
                  }
                  alt=""
                  width={35}
                  height={35}
                />
                <div className="flex flex-col">
                  <div className="flex flex-col text-gray-300">
                    <p className="text-[12px] text-blue-1">Alexander Ore</p>
                    <p className="text-[10px] text-green-1">Uwise Learning</p>
                  </div>
                  <hr className="my-2" />
                  <p className="text-[12px] text-gray-500">
                    Wants to learn: <b className="text-blue-1">React Native</b>.
                    Location: <b className="text-green-1">Agege</b>. Budget:{" "}
                    <b className="text-red-1">&#8358; 50,000</b>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-gray-400 flex items-center gap-2">
          <Layers /> Categories
        </h2>

        <div className="flex flex-wrap gap-5 my-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Link
              href="/"
              key={index}
              className="bg-gray-50 p-5 w-[18%] rounded-md flex gap-2 items-center text-gray-500 text-[12px] text-center  hover:text-blue-1 hover:bg-blue-1/5"
            >
              <BrainCircuit width={20} height={20} /> Artificial Intelligence
            </Link>
          ))}
        </div>
      </section>

      <section className="my-10 flex gap-5">
        <BigInfo />
        <BigInfo />
      </section>

      <section className="my-10">
        <h2 className="text-gray-400 my-5 flex items-center gap-2">
          <Rss /> Latest Blogs
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 gap-3">
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4">
              <BlogCard />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4">
              <BlogCard />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4">
              <BlogCard />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4">
              <BlogCard />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4">
              <BlogCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </section>

      <section className="my-5">
        <h2 className="text-gray-400 my-5 flex items-center gap-2">
          <MessageSquareQuote /> What our students are saying
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 gap-3">
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </section>

      <section className="my-10">
        <h2 className="text-gray-400 my-5 flex items-center gap-2">
          <Mail /> Newsletter
        </h2>
        <Newsletter />
      </section>
    </main>
  );
}

