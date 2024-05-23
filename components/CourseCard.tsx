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
    <Link
      href={link}
      className="w-full h-auto flex flex-col gap-2 rounded-xl cursor-pointer"
    >
      <Image
        className="rounded-lg mb-2 object-cover w-[200px] h-[130px]"
        src={image}
        alt={image}
        width={200}
        height={130}
      />
      <div className="flex gap-2 content-center">
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
          <p className="text-blue-1">
            {firstName} {lastName}
          </p>
          <p className=" text-green-1">{organization}</p>
        </div>
      </div>
      <p className="text-gray-700 text-[13px] font-semibold leading-5">
        {/* Maximum of 65 characters to be set on this */}
        {courseTitle}
      </p>
      {/* <hr className="my-2" />
      <p className="text-sm">{description}</p> */}
      <p className="flex items-center text-[13px] text-gray-500">
        Rating: {Math.fround(rating)} &nbsp;
        {Array.from({ length: Math.floor(rating) }).map((_, index) => (
          <Star key={index} width={15} height={15} color="green" />
        ))}
      </p>
      <p className="text-red-1  text-[13px] ">&#8358;{price.toString()}</p>
    </Link>
  );
};

export default CourseCard;
