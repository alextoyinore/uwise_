"use client";

import { courses } from "@/data/local/courses";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const pathname = usePathname();
  return (
    <div>
      {courses
        .filter((course) => course.link.includes(pathname))
        .map((c, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex gap-5 rounded-xl bg-blue-1/5 p-5">
              <div className="flex flex-col gap-3 w-1/2">
                <h1 className="text-3xl  text-black font-bold">
                  {c.courseTitle}
                </h1>
                <p className=" text-gray-500 text-[14px]">{c.description}</p>
                <p className=" text-gray-700 text-[14px]">
                  {c.firstName} {c.lastName} | {c.organization}
                </p>
                <div className="flex">
                  <Button className="hover:bg-blue-1 bg-green-1 text-white px-10 py-1">
                    Enroll in this course
                  </Button>
                </div>
              </div>

              <Image
                className="w-1/2 rounded-xl h-[250px] object-cover"
                src={c.image}
                width={300}
                alt=""
                height={100}
              />
            </div>
            <div className="flex flex-col mt-10 rounded-xl bg-red-1/10 p-5 gap-2">
              <h2 className="font-bold text-lg text-red-1">How to get the best out of Uwise</h2>
              <ul className="text-sm">
                <li>Be informed that Instructors are mandated keep a record of classes</li>
                <li>You are adviced to keep evidence of each class too</li>
                <li>A good class evidence will show the date, time, and duration of classes</li>
              </ul>
            </div>
            <div className="flex flex-col mt-10 rounded-xl bg-blue-1/5 p-5 text-black gap-5">
              <h2 className="font-bold text-lg text-black">Skills you will gain</h2>
              <ul className="flex flex-wrap gap-3">
                {c.skills.map((skill, index) => (
                  <li
                    className="text-[14px] text-black p-3 rounded-lg bg-white border-[1px]"
                    key={index}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col mt-10 rounded-xl bg-blue-1/5 p-5 text-black gap-5">
              <h2 className="font-bold text-lg text-blue-1">What you will learn</h2>
              <ul className="flex flex-col gap-3">
                {c.topics.map((topic, index) => (
                  <li
                    className="text-[14px] text-black font-bold"
                    key={index}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseDetail;
