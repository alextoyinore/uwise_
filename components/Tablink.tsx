'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface TablinkProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const Tablink = ({ title, icon, link }: TablinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={cn(
        "hover:text-blue-1 hover:bg-blue-1/5 py-2 w-[25%] flex gap-1 justify-center items-center",
        { "bg-blue-1/5 font-bold text-blue-1": pathname === link }
      )}
    >
      {icon}
      {title}
    </Link>
  );
};

export default Tablink;
