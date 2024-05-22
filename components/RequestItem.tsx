import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface RequestProps {
  logoUrl?: string;
  firstName: string;
  lastName: string;
  organization: string;
  requested: string;
  location: string;
  budget: number;
  link: string;
}

const Request = ({
  logoUrl,
  firstName,
  lastName,
  organization,
  requested,
  location,
  budget,
  link,
}: RequestProps) => {
  return (
    <div className="flex gap-x-3 items-center text-[13px]">
      <span className="text-blue-1 font-bold w-1/6 flex gap-2 items-center">
        <span>
          {logoUrl ? (
            <Image
              className="rounded-full max-w-[35px] max-h-[35px] object-cover"
              src={logoUrl!}
              alt={organization}
              width={35}
              height={35}
            />
          ) : (
            <div className="p-2 bg-blue-1 text-white rounded-full w-[35px] h-[35px]">
              {firstName.charAt(0)}
              {lastName.charAt(0)}
            </div>
          )}
        </span>{" "}
        {firstName} {lastName}
      </span>{" "}
      &nbsp;
      <span className="text-green-1 w-1/6">{location}</span> &nbsp;
      <span className="w-2/6">
        Wants to learn:{" "}
        <span className="font-semibold text-blue-1">{requested}</span>.
      </span>
      <span className="text-red-1 w-1/6 font-bold">&#8358; {budget}</span>
      <Link
        href={"/request/" + link}
        className="bg-green-1/80 text-white p-3 rounded-full w-1/6 text-center hover:bg-green-1 hover:text-white hover:font-bold border-[1px] border-green-1/20"
      >
        Pick up
      </Link>
    </div>
  );
};

export default Request;
