import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  link
}: RequestProps) => {
  return (
    <Link href={'/request/'+link} className="flex gap-x-3 content-center ">
      {logoUrl ? (
        <Image
          className="rounded-full max-w-[35px] max-h-[35px] object-cover"
          src={logoUrl!}
          alt={organization}
          width={35}
          height={35}
        />
      ) : (
        <div className="text-2xl p-2 bg-blue-1 text-white rounded-full w-[35px] h-[35px] text-center">
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </div>
      )}

      <div className=" text-gray-300">
        <p className="text-[12px] text-blue-1">
          <span className="font-bold">{firstName} {lastName}</span> &nbsp;
          <span className="text-[12px] text-green-1">{location}</span> &nbsp;
          <span className="text-[12px] text-gray-700">
            Wants to learn: <span className="font-semibold">{requested}</span>. Budget:{" "}
            <b className="text-red-1">&#8358; {budget}</b>
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Request;
