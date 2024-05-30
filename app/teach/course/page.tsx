import { courses } from "@/data/local/courses";
import React from "react";

const Courses = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-gray-700">Courses</h1>
      <div className="flex gap-5 flex-wrap w-full">
        {courses
          .filter((item) => item.id < 10)
          .map((course, index) => (
            <a
              key={index}
              href={course.editLink}
              className="w-[190px] h-[200px] rounded-lg border-[1px] bg-gray-50/30 border-gray-200 flex justify-center text-gray-700 hover:text-blue-1 hover:bg-blue-1/5 hover:border-blue-1 p-5"
            >
              <div className="flex flex-col gap-5 justify-between">
                <p className="text-sm">{course.courseTitle}</p>
                <div className="flex flex-col gap-1 text-[12px]">
                  <p>{course.category}</p>
                  <p>&#8358;{course.price}</p>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Courses;
