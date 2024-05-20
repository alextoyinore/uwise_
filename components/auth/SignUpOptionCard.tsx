import { cn } from "@/lib/utils";
import { Briefcase, Check } from "lucide-react";
import React, { useState } from "react";

interface SignUpOptionCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  checkStyle?: string;
  onClick?: () => void;
}

const SignUpOptionCard = ({
  title,
  icon,
  className,
  checkStyle,
  onClick,
}: SignUpOptionCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col rounded-lg p-5 border-2 cursor-pointer border-gray-700 text-gray-700",
        className
      )}
    >
      <div className="flex justify-between mb-10">
        {icon}
        <div className={cn("center rounded-full p-1 bg-gray-100", checkStyle)}>
          <Check className="w-[30px] h-[30px]" />
        </div>
      </div>
      <p className="text-2xl text-center">{title}</p>
    </div>
  );
};

export default SignUpOptionCard;
