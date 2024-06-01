import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { NumberFormatter } from "react-number-formatter";

interface CourseCardProps {
  logoUrl?: string;
  firstName: string;
  lastName: string;
  organization: string;
  courseTitle: string;
  description: string;
  rating: number;
  price: number;
  link: string;
  image: string;
}

const CourseCard = ({
  logoUrl,
  firstName,
  lastName,
  organization,
  courseTitle,
  description,
  rating,
  price,
  link,
  image,
}: CourseCardProps) => {
  return (
    <a
      href={link}
      className="w-full h-auto flex flex-col rounded-xl cursor-pointer bg-white border-[1px]"
    >
      <Image
        className="rounded-t-lg object-cover h-[120px] w-full"
        src={image}
        alt={image}
        width={200}
        height={130}
      />
      <div className="flex content-center px-3 mt-3">
        {/* {logoUrl ? (
          <Image
            className="rounded-full w-[35px] h-[35px]"
            src={logoUrl!}
            alt={organization}
            width={35}
            height={35}
          />
        ) : (
          <div className="text-md p-1 bg-blue-1 text-white rounded-full w-[35px] h-[35px] text-center">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </div>
        )} */}
        <div className="flex flex-col text-[12px]">
          <p className="text-gray-700">
            {firstName} {lastName}
          </p>
          <p className=" text-gray-400">{organization}</p>
        </div>
      </div>
      <div className="px-3 mb-3">
        <p className="text-black text-[13px] font-semibold leading-5">
          {/* Maximum of 65 characters to be set on this */}
          {courseTitle}
        </p>
        {/* <hr className="my-2" />
      <p className="text-sm">{description}</p> */}
        <p className="flex items-center text-[13px] text-gray-500">
          Rating: {Math.fround(rating)} &nbsp;
          {Array.from({ length: Math.floor(rating) }).map((_, index) => (
            <Star key={index} width={15} height={15} color="gray" />
          ))}
        </p>
        {/* <p className="text-blue-1  text-[13px] ">&#8358;{price.toString()}</p> */}
      </div>
    </a>
  );
};

export default CourseCard;
