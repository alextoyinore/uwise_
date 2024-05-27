'use client'

import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const partnershipRoutes = [
  {
    title: "Corporate",
    link: "/partnership/corporate",
  },
  {
    title: "Government",
    link: "/partnership/government",
  },
//   {
//     title: "Probono",
//     link: "/partnership/probono",
//   },
  {
    title: "School",
    link: "/partnership/school",
  },
  {
    title: "Kids",
    link: "/partnership/kids",
  },
];

const PatnershipLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-blue-1/5"
    //   style={{ backgroundImage: "url('/authbg2.svg')", objectFit: "contain" }}
    >
      <div className="w-2/3 h-4/5 z-10 border-[1px] flex bg-white px-5 py-10 rounded-2xl">
        <div className="w-[17.5%] flex flex-col border-r-[1px] px-3 gap-1">
          <a className="cursor-pointer flex flex-col" href="/">
            <Image src={Logo} alt="logo" width={100} height={35} />
            <p className="text-[12px] text-gray-400 my-1">Partnerships</p>
          </a>
          <hr className="my-3" />
          {partnershipRoutes.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={cn(
                "p-2 text-sm hover:bg-green-1/5 hover:text-green-1 rounded-full text-gray-500",
                {
                  "bg-green-1/5 text-green-1":
                     pathname.includes(item.title.toLowerCase())
                }
              )}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="w-[82.5%] overflow-auto relative">{children}</div>
      </div>
    </div>
  );
};

export default PatnershipLayout;
