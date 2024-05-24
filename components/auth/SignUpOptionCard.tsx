import { cn } from "@/lib/utils";
import { Briefcase, Check } from "lucide-react";
import React, { useState } from "react";

interface SignUpOptionCardProps {
  title: string;
  icon?: React.ReactNode;
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
        "rounded-lg p-2 border-[1px] cursor-pointer border-gray-300 text-gray-500",
        className
      )}
    >
      <div className="flex justify-between gap-2 align-top">
        {icon}
        <span className="text-sm text-center">{title}</span>
        <div className={cn("max-w-[25px] max-h-[25px] center rounded-full p-1 bg-gray-100", checkStyle)}>
          <Check size={15} className="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpOptionCard;
