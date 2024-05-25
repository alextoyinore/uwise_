"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Tablink from "@/components/Tablink";
import { hiretabs } from "@/data/local/hiretab";
import { tablinks } from "@/data/local/tablinks";
import { cn } from "@/lib/utils";
import {
  Aperture,
  Briefcase,
  Earth,
  Layers,
  MessageCircleQuestion,
  Rss,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="w-[95%] m-[auto] flex justify-between">
      <div className="fixed h-screen w-[13%] px-2 border-r-[1px] border-gray-50 overflow-y-auto">
        <Navbar />
      </div>
      <div className="left-[15.5%] sticky flex flex-col min-h-screen w-[66.5%]">
        <div className="flex flex-col">
          {/**
           * Center Column
           */}
          {/* Search Bar */}
          <div className="py-3 border-b-[1px] border-gray-50 w-full">
            <div className="m-[auto] w-[95%] flex gap-5">
              <h1 className="w-[20%] text-blue-1 text-sm leading-5">
                Find a course or post a new request
              </h1>
              <div className="w-[80%]">
                <SearchBar />
              </div>
            </div>
          </div>

          {/* Nav Bar */}
          <div className="border-b-[1px] border-gray-50">
            <div className="text-sm text-gray-700 flex w-full">
              {tablinks.map((tablink, index) => (
                <Tablink
                  key={index}
                  title={tablink.title}
                  icon={tablink.icon}
                  link={tablink.link}
                />
              ))}
            </div>
          </div>
        </div>

        {pathname.includes("hire") ? (
          <div className="flex text-center">
            {hiretabs.map((tab, index) => (
              <a
                key={index}
                href={tab.link}
                className={cn(
                  "w-1/2 py-1 text-gray-600 hover:bg-green-1/5 hover:text-green-1",
                  {
                    "bg-green-1/5 text-green-1":
                      pathname === tab.link,
                  }
                )}
              >
                {tab.title}
              </a>
            ))}
          </div>
        ) : null}

        <div className="p-5">{children}</div>
      </div>

      {/** Side Bar */}
      <div className="w-[20%] border-l-[1px] border-gray-50 px-3 h-screen">
        <Sidebar />
      </div>
    </div>
  );
};

export default HomeLayout;
