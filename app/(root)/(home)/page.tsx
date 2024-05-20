"use client";

import React from "react";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Aperture } from "lucide-react";
import { courses } from "@/data/local/courses";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="flex mt-20 justify-between ">
        <div className="w-[70%]">
          <Link href={"/explore"}>
            <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
              <Aperture /> Explore
            </h2>
          </Link>

          <div className="flex flex-wrap gap-5 my-5">
            {courses.map((course, index) => (
              <div key={index} className="md:basis-1/2 lg:basis-1/4">
                <CourseCard
                  logoUrl={course.logoUrl}
                  firstName={course.firstName}
                  lastName={course.lastName}
                  organization={course.organization}
                  courseTitle={course.courseTitle}
                  description={course.description}
                  rating={course.rating}
                  price={course.price}
                  link={course.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

