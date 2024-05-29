import TeachHomeCard from "@/components/TeachHomeCard";
import { courses } from "@/data/local/courses";
import { Plus } from "lucide-react";
import React from "react";

const cardItems = [
  {
    title: "Total Revenue",
    data: 16512567,
    link: "teach/revenue",
  },
  {
    title: "Total Sales",
    data: 212567,
    link: "teach/sales",
  },
  {
    title: "All Courses",
    data: 18,
    link: "teach/course",
  },
  {
    title: "Published",
    data: 12,
    link: "teach/course?q=published",
  },
  {
    title: "Draft",
    data: 6,
    link: "teach/course?q=draft",
  },
];

const Teach = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-sm text-gray-400">Welcome to Teach</h1>
      <div className="flex gap-5 flex-wrap">
        {cardItems.map((item, index) => (
          <TeachHomeCard
            key={index}
            link={item.link}
            title={item.title}
            data={item.data}
          />
        ))}
      </div>

      <div className="flex gap-5 flex-wrap w-full">
        <a
          href="/teach/new"
          className="w-[190px] h-[200px] rounded-lg border-[1px] flex justify-center items-center text-gray-400 hover:bg-blue-1 hover:text-white hover:border-blue-1"
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

export default Teach;
