import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

const CourseCard = () => {
  return (
    <Link href='/' className="w-[250px] h-[250px] rounded-2xl bg-gray-50 py-5 px-5 flex flex-col hover:bg-gray-100 hover:cursor-pointer">
      <div className="flex gap-2 content-center">
        <Image
          className="rounded-full"
          src="/images/uwise_c.svg"
          alt=""
          width={35}
          height={35}
        />
        <div className="flex flex-col">
          <p className="text-[14px] text-blue-1">Alexander Ore</p>
          <p className="text-[10px] text-green-1">Uwise Learning</p>
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-gray-700 text-sm font-bold leading-6">
        {/* Maximum of 65 characters to be set on this */}
        Cybersecurity Fundamentals: Introduction to Information Security 
      </p>
      <hr className="my-2" />
      <p className="flex items-center text-sm text-gray-500">
        4.0
        &nbsp;
        {Array.from({ length: 4 }).map((_, index) => (
          <Star key={index} width={15} height={15} color="green" />
        ))}
      </p>
      <hr className="my-2" />
      <p className="text-red-1  text-[16px] ">&#8358; 50,000</p>
      {/* <Button className='text-blue-1 bg-white rounded-3xl w-full'>Enroll</Button> */}
    </Link>
  );
};

export default CourseCard;
