import {
  Chrome,
  Linkedin,
  DraftingCompass,
  Facebook,
  Link,
  Home,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center m-5">
      <div className="flex flex-col justify-center gap-3 w-1/2 px-5 border-r-[1px]">
        <div className="flex flex-col gap-5">
          <a className="cursor-pointer" href="/">
            <Image src={Logo} alt="logo" width={120} height={35} />
          </a>
          <p className="text-[13px] text-gray-400">
            Let&apos;s make working knowledge and skills accessible and
            affordable for all
          </p>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg text-gray-600 my-2">Log in with socials</h2>
          <div className="flex gap-3 flex-wrap">
            <div className="rounded-full border-[1px] border-gray-600 flex text-gray-600 items-center gap-2 py-2 px-5 hover:bg-blue-1/5 hover:text-blue-1 hover:border-blue-1/5 cursor-pointer">
              <Chrome size={15} /> Google
            </div>
            <div className="rounded-full border-[1px] border-gray-600 flex text-gray-600 items-center gap-2 py-2 px-5 hover:bg-blue-1/5 hover:text-blue-1 hover:border-blue-1/5 cursor-pointer">
              <Linkedin size={15} /> Linkedin
            </div>
            <div className="rounded-full border-[1px] border-gray-600 flex text-gray-600 items-center gap-2 py-2 px-5 hover:bg-blue-1/5 hover:text-blue-1 hover:border-blue-1/5 cursor-pointer">
              <DraftingCompass size={15} /> Apple
            </div>
            <div className="rounded-full border-[1px] border-gray-600 flex text-gray-600 items-center gap-2 py-2 px-5 hover:bg-blue-1/5 hover:text-blue-1 hover:border-blue-1/5 cursor-pointer">
              <Facebook size={15} /> Facebook
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <p className="text-gray-400 text-[13px]">
          Dont&apos;t have an account yet?{" "}
          <a href={"/signup/home/students"} className="text-green-1">
            Sign up
          </a>
        </p>
      </div>
      {children}
    </div>
  );
};

export default LoginLayout;
