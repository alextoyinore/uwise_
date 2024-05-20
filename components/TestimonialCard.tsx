import React from "react";
import Image from "next/image";

interface TestimonialInfo {
  logoUrl: string;
  firstName: string;
  lastName: string;
  testimony: string;
  month: string;
  year: number;
}

const TestimonialCard = ({
  logoUrl,
  firstName,
  lastName,
  testimony,
  month,
  year,
}: TestimonialInfo) => {
  return (
    <div className="flex gap-5 p-5 rounded-lg bg-gray-50">
      {logoUrl ? (
        <Image
          className="rounded-full"
          src={logoUrl!}
          alt={firstName}
          width={50}
          height={50}
        />
      ) : (
        <div className="text-2xl p-2 bg-blue-1 text-white rounded-full w-[50px] h-[50px] text-center">
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </div>
      )}
      <div className="flex flex-col gap-5">
        <p className="text-[16px] text-gray-600 italic">
          &ldquo;{testimony}&rdquo;
        </p>
        <p className="flex gap-2 text-[12px] text-green-1">
          <span className="text-red-1">
            {firstName} {lastName}
          </span>{" "}
          {month} {year}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
