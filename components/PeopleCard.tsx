import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface PeopleCardProps {
  firstName: string;
  lastName: string;
  image?: string;
  link: string;
  role: string;
  designation: string;
  organization: string;
  logoUrl?: string;
  rating: number;
  joined: string;
}

const PeopleCard = ({
  firstName,
  lastName,
  image,
  link,
  role,
  designation,
  organization,
  logoUrl,
  rating,
  joined,
}: PeopleCardProps) => {
  return (
    <a href={link} className="text-[12px] text-gray-500 text-center h-auto cursor-pointer p-5">
      <div className="flex flex-col items-center gap-1">
        <p>{role.toLocaleUpperCase()}</p>
        {image ? (
          <Image
            className="rounded-full w-[120px] h-[120px] object-cover"
            src={image!}
            alt={organization}
            width={120}
            height={120}
          />
        ) : (
          <div className="text-lg p-2 bg-blue-1 text-white rounded-full w-[120px] h-[120px] text-center">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-lg text-gray-700">
            {firstName} {lastName}
          </p>
          <p>{designation}</p>
          <p className="text-gray-400">{organization}</p>
          <p className="flex items-center justify-center text-gray-500">
            Rating: {Math.fround(rating)} &nbsp;
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <Star key={index} width={12} height={12} color="gray" />
            ))}
          </p>
        </div>
        <p>Member since: {joined}</p>
      </div>
    </a>
  );
};

export default PeopleCard;
