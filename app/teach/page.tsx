import { courses } from "@/data/local/courses";
import { Plus } from "lucide-react";
import React from "react";

const Teach = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <a
          href="/teach/new"
          className="w-1/6 h-[200px] rounded-lg border-[1px] flex justify-center items-center text-gray-400 hover:text-green-1/50 hover:border-green-1/30"
        >
          <div className="flex flex-col gap-2 items-center">
            <Plus size={80} />
            <span className="text-center">New Course</span>
          </div>
        </a>

        {courses
          .filter((item) => item.id < 5)
          .map((course, index) => (
            <a
              key={index}
              href={course.editLink}
              className="w-1/6 h-[200px] rounded-lg border-[1px] border-gray-100 bg-gray-50 flex justify-center text-gray-700 hover:text-blue-1 hover:bg-blue-1/5 hover:border-blue-1/20 p-3"
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

export default Teach;
