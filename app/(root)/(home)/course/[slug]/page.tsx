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
                <p className=" text-gray-700">{c.firstName} {c.lastName} | {c.organization}</p>
                <div className="flex">
                  <Button className="hover:bg-blue-1 bg-green-1 text-white px-10 py-1">Enroll in this course</Button>
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
          </div>
        ))}
    </div>
  );
};

export default CourseDetail;
