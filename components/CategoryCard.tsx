import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  link: string;
  icon?: string;
}

const CategoryCard = ({ title, link, icon }: CategoryCardProps) => {
  return (
    <Link
      href={link}
      className="bg-transparent p-5 rounded-md flex gap-2 items-center text-gray-700 border-2 border-gray-700 text-sm text-center  hover:text-blue-1 hover:border-blue-1"
    >
      <Image
        className="h-[25px] w-[25px]"
        src={'/icons/' + icon! + '.svg'}
        alt={title}
        width={25}
        height={25}
      />{" "}
      {title}
    </Link>
  );
};

export default CategoryCard;
