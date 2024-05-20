import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import { courses } from "@/data/local/courses";
import { Link, Aperture } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="flex justify-between ">
        <div className="w-full">

          <div className="flex flex-wrap my-5">
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
                  image={course.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
