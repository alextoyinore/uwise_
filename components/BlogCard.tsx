import Link from "next/link";
import React from "react";

interface BlogInfo {
  title: string;
  excerpt: string;
  author: string;
  month: string;
  year: number;
  link: string;
}

const BlogCard = ({ title, excerpt, author, month, year, link }: BlogInfo) => {
  return (
    <a
      href={"/blog/" + link}
      className="flex flex-col gap-2 justify-between h-[180px] rounded-lg p-5 cursor-pointer border-[1px]"
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm text-blue-1 font-semibold leading-5">{title}</p>
        <p className="text-[11px] text-gray-600">{excerpt}</p>
      </div>

      <p className="flex gap-2 text-[12px] text-green-1">
        <span className="text-red-1">{author}</span>
        {month} {year}
      </p>
    </a>
  );
};

export default BlogCard;
