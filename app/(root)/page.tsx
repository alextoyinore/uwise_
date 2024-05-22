import CategoryCard from "@/components/CategoryCard";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import { categories } from "@/data/local/categories";
import { courses } from "@/data/local/courses";
import { Link, Aperture, Layers } from "lucide-react";
import React from "react";


const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="flex my-5">
        <div className="">
          <Link href={"/explore"}>
            <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
              <Aperture /> Explore
            </h2>
          </Link>

          <div className="flex flex-wrap my-5 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="">
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

      <section className="my-5">
        <Link href={"/explore/categories"}>
          <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
            <Layers /> Categories
          </h2>
        </Link>

        <div className="flex flex-wrap gap-5 my-5">
          {categories.map((category, index) => (
            <div key={index}>
              <CategoryCard
                title={category.title}
                link={category.link}
                icon={category.icon}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
