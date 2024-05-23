import CourseCard from "@/components/CourseCard";
import { courses, explorelist } from "@/data/local/courses";
import { Link, Aperture } from "lucide-react";
import React from "react";

const ExploreHome = () => {
  return (
    <div>
      {/**
       * LATEST COURSES
       */}

      {explorelist.map((item, index) => (
        <section key={index} className="flex flex-col">
          <Link href={item.subjectlink}>
            <p className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
              {item.subject}
            </p>
          </Link>

          <div className="flex flex-wrap my-5 gap-6">
            {item.courses.map((course, index) => (
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
        </section>
      ))}
    </div>
  );
};

export default ExploreHome;
