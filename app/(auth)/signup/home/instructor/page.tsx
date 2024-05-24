import AuthNav from "@/components/auth/AuthNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import {
  Apple,
  Chrome,
  DraftingCompass,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const SignUpAsInstructor = () => {
  return (
    <form className="max-w-md flex flex-col gap-3 w-1/2 px-5">
      <h2 className="text-lg text-gray-600 my-2">Sign up with email</h2>
      <Input placeholder="Email" />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Organization" />
      <Input placeholder="City" />
      <Input placeholder="Password" />
      <Button className="bg-gradient-to-r from-green-1 to-blue-1 rounded-full text-white">
        Sign up
      </Button>
      <p className="text-gray-400 text-[11px]">
        By clicking &apos;Sign up&apos; you agree to our
        <a href={"/terms"} className="text-green-1">
          &nbsp; terms and conditions
        </a>{" "}
        and community and privacy
        <a href={"/policy"} className="text-green-1">
          &nbsp; policies
        </a>
      </p>
    </form>
  );
};

export default SignUpAsInstructor;
