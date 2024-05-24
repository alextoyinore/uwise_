import BigInfo from "@/components/BigInfo";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import { biginfos } from "@/data/local/biginfo";
import { blogs } from "@/data/local/blogs";
import { categories } from "@/data/local/categories";
import { courses } from "@/data/local/courses";
import { Link, Aperture, Layers, Group, Rss } from "lucide-react";
import React from "react";


const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/**
       * LATEST COURSES
       */}

      <section className="flex flex-col my-5">
        <div className="">
          <a href={"/explore"}>
            <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
              <Aperture /> Explore
            </h2>
          </a>

          <div className="flex flex-wrap my-5 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="w-[23%]">
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

      {/**
       * CATEGORIES
       */}

      <section className="my-5">
        <a href={"/explore/categories"}>
          <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
            <Layers /> Categories
          </h2>
        </a>

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

      {/**
       * BIG INFO
       */}
      <section className="my-10">
        <a href={""}>
          <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
            {/* <Group />  */}
            Do More with Uwise
          </h2>
        </a>

        <div className="flex gap-5 my-5">
          {biginfos.map((info, index) => (
            <div key={index} className="w-[50%]">
              <BigInfo
                title={info.title}
                icon={info.icon}
                imageWidth={180}
                imageHeight={150}
                image={info.image}
                description={info.description}
                listItem={info.listItem} 
                link={info.link}              
              />
            </div>
          ))}
        </div>
      </section>

      {/**
       * LATEST BLOGS
       */}
       <section className="my-5">
        <a href={"/blog"}>
          <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
            <Rss /> Latest Blog
          </h2>
        </a>

        <div className="flex flex-wrap gap-5 my-5">
          {blogs.map((blog, index) => (
            <div key={index} className="w-[23%]">
              <BlogCard
                title={blog.title}
                excerpt={blog.excerpt}
                author={blog.author}
                month={blog.month}
                year={blog.year}
                link={blog.link}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

