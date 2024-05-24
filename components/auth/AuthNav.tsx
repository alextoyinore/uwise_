"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="flex flex-col">
      <div className="flex w-full justify-center my-4 m-[auto] items-center">
        <Link href={"/"} className="cursor-pointer">
          <Image src={Logo} alt="logo" width={100} height={35} />
        </Link>
      </div>
    </nav>
  );
}

