"use client";

import AuthNav from "@/components/auth/AuthNav";
import SignUpOptionCard from "@/components/auth/SignUpOptionCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Brush,
  Check,
  GraduationCap,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const options = [
  {
    id: 1,
    title: "I want to join as a Student",
    buttonTitle: "Join as a Student",
    icon: <GraduationCap className="w-[40px] h-[40px]" />,
    link: "signup/student",
  },
  {
    id: 2,
    title: "I want to join as an Instructor",
    buttonTitle: "Join as an Instructor",
    icon: <Presentation className="w-[40px] h-[40px]" />,
    link: "signup/instructor",
  },
  {
    id: 3,
    title: "I'm joining to hire Talents",
    buttonTitle: "Join as a Client",
    icon: <Briefcase className="w-[40px] h-[40px]" />,
    link: "signup/client",
  },
];

const ChooseAccountType = () => {
  const [active, setActive] = useState(false);
  const [keyId, setKeyId] = useState(0);

  const handleClick = (id: number) => {
    setActive(true);
    setKeyId(id);
    console.log(id);
    // console.log(active);
    console.log(keyId);
  };

  return (
    <div className="">
      <section className="flex flex-col m-[auto] w-[60%] py-[25px]">
        <h1 className="text-2xl text-blue-1 my-10 text-center">
          Sign Up as a <span className="text-green-1">Student</span>, an{" "}
          <span className="text-green-1">Instructor</span> or a{" "}
          <span className="text-green-1">Client</span>
        </h1>
        <div className="flex gap-10 justify-between">
          {options.map((item) => {
            const isActive = active === true && keyId === item.id;
            return (
              <SignUpOptionCard
                key={item.id}
                title={item.title}
                icon={item.icon}
                onClick={() => handleClick(item.id)}
                className={cn("", {
                  "bg-green-1/5 border-green-1 text-green-1": isActive,
                })}
                checkStyle={isActive === true ? "bg-green-1/80 text-white" : ""}
              />
            );
          })}
        </div>

        <Link
          href={keyId === 0 ? "#" : options[keyId - 1].link}
          className="mt-10 mb-5 text-center"
        >
          <Button className="bg-gradient-to-r from-green-1 to-blue-1 text-white rounded-full px-10 py-5">
            {keyId === 0 ? "Join Uwise" : options[keyId - 1].buttonTitle}
          </Button>
        </Link>
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-green-1">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
};

export default ChooseAccountType;
