import Link from "next/link";
import React from "react";
import Newsletter from "./Newsletter";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ClassArray, ClassDictionary } from "clsx";

const Footer = () => {
  return (
    <footer className={cn("flex flex-col justify-between gap-5 text-[12px]")}>
      <div className="flex flex-wrap gap-2 justify-center">
        <Link href={"/teach"} className="hover:underline">
          Teach on Uwise
        </Link>
        <Link href={"/partnership"} className="hover:underline">
          Partnership
        </Link>
        <Link href={"/about"} className="hover:underline">
          About Us
        </Link>
        <Link href={"/contact"} className="hover:underline">
          Contact Us
        </Link>

        <Link href={"/careers"} className="hover:underline">
          Careers
        </Link>
        <Link href={"/blog"} className="hover:underline">
          Blog
        </Link>
        <Link href={"/support"} className="hover:underline">
          Help & Support
        </Link>
        <Link href={"/faqs"} className="hover:underline">
          FAQs
        </Link>
        <Link href={"/affiliate"} className="hover:underline">
          Affliates
        </Link>

        <Link href={"/terms"} className="hover:underline">
          Terms
        </Link>
        <Link href={"/policy"} className="hover:underline">
          Policy
        </Link>
        <Link href={"/cookies"} className="hover:underline">
          Cookies
        </Link>
        <Link href={"/sitemap"} className="hover:underline">
          Sitemaps
        </Link>
      </div>
      <div className="flex justify-center gap-2 ">
        <Link href={"/"}>
          <Image
            className="cursor-pointer filter brightness-100 saturate-0"
            src="/images/logo.svg"
            alt="logo"
            width={80}
            height={25}
          />
        </Link>
        <p className="text-[12px]">&copy; Uwise 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
