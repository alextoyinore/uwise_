import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  link: string;
  icon?: React.ReactNode;
}

const CategoryCard = ({ title, link, icon }: CategoryCardProps) => {
  return (
    <Link
      href={link}
      className="bg-green-1/20 px-5 py-2 border-green-1/50 rounded-md flex gap-2 items-center text-black border-[1px] text-sm text-center  hover:text-white hover:bg-green-1/50"
    >
      {/* <Image
        className="h-[25px] w-[25px]"
        src={'/icons/' + icon! + '.svg'}
        alt={title}
        width={20}
        height={20}
      />{" "} */}
      {icon}
      {title}
    </Link>
  );
};

export default CategoryCard;
