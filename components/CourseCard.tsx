import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

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
  image: string
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
  image
}: CourseCardProps) => {
  return (
    <Link
      href={link}
      className="w-[200px] h-auto border-gray-600 flex flex-col rounded-xl cursor-pointer"
    >
      <Image 
        className="rounded-lg mb-2"
        src={image}
        alt={image}
        width={200}
        height={130}
      />
      <div className="flex gap-2 content-center">
        {logoUrl ? (
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
        )}
        <div className="flex flex-col">
          <p className="text-sm text-blue-1">
            {firstName} {lastName}
          </p>
          <p className="text-[12px] text-green-1">{organization}</p>
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-gray-700 text-sm font-bold leading-5">
        {/* Maximum of 65 characters to be set on this */}
        {courseTitle}
      </p>
      {/* <hr className="my-2" />
      <p className="text-sm">{description}</p> */}
      <hr className="my-2" />
      <p className="flex items-center text-sm text-gray-500">
        Rating: {Math.fround(rating)} &nbsp;
        {Array.from({ length: Math.floor(rating) }).map((_, index) => (
          <Star key={index} width={15} height={15} color="green" />
        ))}
      </p>
      <hr className="my-2" />
      <p className="text-red-1  text-[16px] ">&#8358; {price.toString()}</p>
    </Link>
  );
};

export default CourseCard;
