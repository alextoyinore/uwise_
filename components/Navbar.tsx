"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import {
  Aperture,
  Briefcase,
  Handshake,
  Layers,
  MessageCircleQuestion,
  Notebook,
  Presentation,
} from "lucide-react";
import NavLink from "./NavLink";
import { navlinks } from "@/data/local/navlinks";

export default function Navbar() {
  return (
    <nav className="flex flex-col min-h-screen justify-between py-5">
      <div className="flex flex-col">
        <Link href={"/"} className="cursor-pointer mb-5">
          <Image src={Logo} alt="logo" width={100} height={35} />
        </Link>
        {/**
         * Nav Links
         */}
        <div className="flex flex-col gap-1 text-[14px] text-gray-600 font-thin">
          {navlinks.map((navlink, index) => (
            <NavLink
              key={index}
              icon={navlink.icon}
              title={navlink.title}
              link={navlink.link}
            />
          ))}{" "}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href={"/login"}
          className="cursor-pointer bg-transparent text-green-1 text-[14px] p-2 font-bold hover:bg-green-1/5 hover:rounded-full"
        >
          Sign in
        </Link>
        <Link href={"/signup"}>
          <Button className="bg-gradient-to-r w-full from-green-1 to-blue-1 text-white text-[14px] rounded-full">
            Create Account
          </Button>
        </Link>
      </div>
    </nav>
  );
}
