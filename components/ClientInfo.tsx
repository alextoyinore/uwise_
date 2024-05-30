import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ClientInfoProps {
  firstName: string;
  lastName: string;
  organization: string;
  rating: number;
  link: string;
  image?: string;
}

const ClientInfo = ({
  firstName,
  lastName,
  organization,
  rating,
  link,
  image,
}: ClientInfoProps) => {
  return (
    <a
      href={'/client/'+link}
      className="h-auto flex flex-col gap-2 rounded-xl cursor-pointer"
    >
      <div className="flex gap-2 content-center">
        {image ? (
          <Image
            className="rounded-full w-[35px] h-[35px] object-cover"
            src={image!}
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
        <div className="flex flex-col text-[12px]">
          <p className="text-gray-700 font-semibold">
            {firstName} {lastName}
          </p>
          <p className="text-gray-400">{organization}</p>
          <p className="flex items-center text-gray-500">
            Rating: {Math.fround(rating)} &nbsp;
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <Star key={index} width={12} height={12} color="gray" />
            ))}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ClientInfo;
