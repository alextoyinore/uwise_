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
    title: "As a Student",
    buttonTitle: "Join as a Student",
    icon: <GraduationCap size={25} className="w-[25px] h-[25px]" />,
    link: "signup/home/student",
  },
  {
    id: 2,
    title: "As an Instructor",
    buttonTitle: "Join as an Instructor",
    icon: <Presentation size={25} className="w-[25px] h-[25px]" />,
    link: "signup/home/instructor",
  },
  {
    id: 3,
    title: "To hire Talents",
    buttonTitle: "Join as a Client",
    icon: <Briefcase size={25} className="w-[25px] h-[25px]" />,
    link: "signup/home/client",
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
      <section className="flex flex-col m-[auto] w-[80%] py-[25px]">
        <h1 className="text-lg text-blue-1 mb-10 text-center">
          Sign Up as a <span className="text-green-1">Student</span>, an{" "}
          <span className="text-green-1">Instructor</span> or a{" "}
          <span className="text-green-1">Client</span>
        </h1>
        <div className="flex gap-2 m-[auto]">
          {options.map((item) => {
            const isActive = active === true && keyId === item.id;
            return (
              <SignUpOptionCard
                key={item.id}
                title={item.title}
                // icon={item.icon}
                onClick={() => handleClick(item.id)}
                className={cn("", {
                  "bg-green-1/5 border-green-1 text-green-1": isActive,
                })}
                checkStyle={isActive === true ? "bg-green-1/80 text-white" : ""}
              />
            );
          })}
        </div>

        <a
          href={keyId === 0 ? "#" : options[keyId - 1].link}
          className="mt-10 mb-5 text-center"
        >
          <Button className="bg-gradient-to-r from-green-1 to-blue-1 text-white rounded-full px-10 py-5">
            {keyId === 0 ? "Join Uwise" : options[keyId - 1].buttonTitle}
          </Button>
        </a>
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <a href={"/login"} className="text-green-1">
            Login
          </a>
        </p>
      </section>
    </div>
  );
};

export default ChooseAccountType;
