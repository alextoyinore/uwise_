"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import MainSearchBar from "./MainSearchBar";
import SearchBar from "./SearchBar";
import { Aperture, Handshake, Layers, MessageCircleQuestion, Notebook, WholeWordIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-col">
      <div className="flex w-[80%] justify-between py-4 m-[auto] align-middle">
        <Image src={Logo} alt="logo" width={100} height={35} />
        <SearchBar />
        <div className="flex gap-2 items-center">
          <Button className="bg-transparent text-blue-1 text-[14px] hover:text-green-1 rounded-full">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-green-1 to-blue-1 text-white text-[14px] rounded-full">
            Create Account
          </Button>
        </div>
      </div>
      <div className="flex w-[80%] py-2 gap-10 m-[auto] text-[12px] text-gray-500 ">
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/"><Aperture width={15} /> Explore</Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/"><Layers width={15} /> Categories</Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/"><MessageCircleQuestion width={15} /> Requests</Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/"><Notebook width={15} /> Teach</Link>
        <Link className="hover:text-blue-1 flex gap-1 items-center" href="/"><Handshake width={15} /> Partnership</Link>
      </div>
    </nav>
  );
}
