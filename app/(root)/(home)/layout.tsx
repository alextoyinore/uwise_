import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import {
  Aperture,
  Briefcase,
  Earth,
  Layers,
  MessageCircleQuestion,
  Rss,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between">
      <div className=" w-[15%] px-2 border-r-[1px]">
        <Navbar />
      </div>
      <div className="flex flex-col min-h-screen w-[65%]">
        <div className="flex flex-col">
          {/* Search Bar */}
          <div className="py-3 border-b-[1px] w-full">
            <div className="m-[auto] w-[95%] flex gap-5">
              <h1 className="w-[20%] font-bold text-blue-1 text-lg leading-5">Find a course or make a request</h1>
              <div className="w-[80%]">
                <SearchBar />
              </div>
            </div>
          </div>

          {/* Nav Bar */}
          <div className="border-b-[1px]">
            <div className="text-sm text-gray-700 flex w-full">
              <Link
                href={"/explore"}
                className="hover:text-blue-1 hover:bg-blue-1/5 py-2 w-[25%] flex gap-1 justify-center items-center"
              >
                <Aperture width={15} />
                Explore
              </Link>

              <Link
                className="hover:text-blue-1 hover:bg-blue-1/5 py-2 w-[25%] flex gap-1 justify-center items-center"
                href="/explore/categories"
              >
                <Layers width={15} />
                Categories
              </Link>

              <Link
                className="hover:text-blue-1 hover:bg-blue-1/5 py-2 w-[25%] flex gap-1 justify-center items-center"
                href="/request"
              >
                <MessageCircleQuestion width={15} />
                Requests
              </Link>

              <Link
                className="hover:text-blue-1 hover:bg-blue-1/5 py-2 w-[25%] flex gap-1 justify-center items-center"
                href="/hire"
              >
                <Briefcase width={15} />
                Hire
              </Link>
            </div>
          </div>
        </div>

        <div className="p-5">
        {children}

        </div>

      </div>
      <div className="w-[20%] border-l-[1px] px-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default HomeLayout;
