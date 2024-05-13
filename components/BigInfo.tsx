import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Notebook } from "lucide-react";

const BigInfo = () => {
  return (
    <article className="w-full">
      <h2 className="text-gray-400 flex items-center gap-2">
        <Notebook /> Teach on Uwise
      </h2>
      <Link href={""} className="flex my-5">
        <Image
          className=""
          src="/images/teach.jpg"
          alt=""
          width={250}
          height={50}
        />
        <div className="flex flex-col p-5 bg-gray-50 rounded-r-2xl">
          {/* <h3 className="flex items-center text-gray-400 text-sm">
                Teach on &nbsp;{" "}
                <Image
                  src="/images/logo.svg"
                  alt="Uwise Logo"
                  width={80}
                  height={25}
                />
              </h3> */}
          <p className="text-blue-1 font-bold text-xl">
            Become an Instructor and earn with your knowledge and expertise on
            Uwise
          </p>
          <ul className="text-[12px] text-gray-500 my-2 px-5">
            <li className="my-1 list-disc">
              We want Instructors from around the world to teach millions of
              learners on Uwise.
            </li>
            <li className="my-1 list-disc">
              We`ll provide the tools and you teach what you love.
            </li>
          </ul>
          <p className=" text-red-1 text-[14px] rounded-full w-[50%]">
            Learn more...
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BigInfo;
