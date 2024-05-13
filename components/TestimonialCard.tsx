import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="flex gap-2 p-5 rounded-lg bg-gray-50">
      {/* <Image src="" alt="" width={30} height={30} /> */}
      <p className="bg-blue-1 p-2 text-white font-extrabold rounded-full max-w-[40px] max-h-[40px] text-center">
        AO
      </p>
      <div className="flex flex-col gap-5">
        <p className="text-[16px] text-gray-600 italic">
          &quote;I found Uwise when I needed a real career change. A friend told me
          about it before it became mega when they just started.&quote;
        </p>
        <p className="flex gap-2 text-[12px] text-green-1">
          <span className="text-red-1">Alexander Ore</span> March 2024
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
