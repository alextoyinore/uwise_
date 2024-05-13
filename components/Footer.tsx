import Link from "next/link";
import React from "react";
import Newsletter from "./Newsletter";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ClassArray, ClassDictionary } from "clsx";


const Footer = () => {
  return (
    <footer className={cn("flex justify-between")}>
      <div className="flex gap-10">
        <nav className="flex flex-col gap-2 text-[13px]">
            <Link href={'/teach'} className="hover:underline">Teach on Uwise</Link>
            <Link href={'/partnership'} className="hover:underline">Partnership</Link>
            <Link href={'/about'} className="hover:underline">About Us</Link>
            <Link href={'/contact'} className="hover:underline">Contact Us</Link>
        </nav>
        <nav className="flex flex-col gap-2 text-[13px]">
            <Link href={'/careers'} className="hover:underline">Careers</Link>
            <Link href={'/blog'} className="hover:underline">Blog</Link>
            <Link href={'/support'} className="hover:underline">Help & Support</Link>
            <Link href={'/faqs'} className="hover:underline">FAQs</Link>
            <Link href={'/affiliate'} className="hover:underline">Affliates</Link>
        </nav>
        <nav className="flex flex-col gap-2 text-[13px]">
            <Link href={'/terms'} className="hover:underline">Terms</Link>
            <Link href={'/policy'} className="hover:underline">Policy</Link>
            <Link href={'/cookies'} className="hover:underline">Cookies</Link>
            <Link href={'/sitemap'} className="hover:underline">Sitemaps</Link>
        </nav>
      </div>
      <div className="flex flex-col justify-between ">
        <Image className="" src='/images/logo_w.svg' alt='logo' width={80} height={25} />
        <p className="text-white text-[12px]">&copy; Uwise 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
