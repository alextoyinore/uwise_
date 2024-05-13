"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import {
  Aperture,
  Handshake,
  Layers,
  MessageCircleQuestion,
  Notebook,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-col">
      <div className="flex w-[80%] justify-between py-4 m-[auto] items-center">
        <Link href={"/"} className="cursor-pointer">
          <Image src={Logo} alt="logo" width={100} height={35} />
        </Link>
        <SearchBar />
        <div className="flex gap-5 items-center">
          <Link
            href={"/login"}
            className="cursor-pointer bg-transparent text-green-1 text-[14px] hover:text-blue-1 rounded-full"
          >
            Login
          </Link>
          <Link href={"/signup"}>
            <Button className="bg-gradient-to-r from-green-1 to-blue-1 text-white text-[14px] rounded-full">
              Create Account
            </Button>
          </Link>
        </div>
      </div>

      {/**
       * Nav Links
       */}
      <div className="flex w-[80%] py-2 gap-10 m-[auto] text-[12px] text-gray-500 ">
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/explore">
          <Aperture width={15} /> Explore
        </Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/explore/categories">
          <Layers width={15} /> Categories
        </Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/request">
          <MessageCircleQuestion width={15} /> Requests
        </Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/teach">
          <Notebook width={15} /> Teach
        </Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/partnership">
          <Handshake width={15} /> Partnership
        </Link>
      </div>
    </nav>
  );
}
