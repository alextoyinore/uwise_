import React from "react";
import Image from "next/image";

interface RequestProps {
  logoUrl?: string;
  firstName: string;
  lastName: string;
  organization: string;
  requested: string;
  location: string;
  budget: number;
}

const Request = ({
  logoUrl,
  firstName,
  lastName,
  organization,
  requested,
  location,
  budget,
}: RequestProps) => {
  return (
    <div className="flex gap-x-5 content-center ">
      {logoUrl ? (
          <Image
            className="rounded-full max-w-[35px] max-h-[35px]"
            src={logoUrl!}
            alt={organization}
            width={35}
            height={35}
          />
        ) : (
          <div className="font-bold text-2xl p-2 bg-blue-1 text-white rounded-full w-[35px] h-[35px] text-center">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </div>
        )}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1 text-gray-300">
          <p className="text-[12px] text-blue-1">
            {firstName} {lastName}
          </p>
          <p className="text-[12px] text-green-1">{location}</p>
        </div>
        <p className="text-[12px] text-gray-700">
          Wants to learn: <b className="">{requested}</b>.
           Budget:{" "}
          <b className="text-red-1">&#8358; {budget}</b>
        </p>
      </div>
    </div>
  );
};

export default Request;
