import React from "react";

interface TeachHomeCardProps {
  title: string;
  data: number | string;
  link?: string;
}

const TeachHomeCard = ({ title, data, link }: TeachHomeCardProps) => {
  return (
    <a
      href={link}
      className="flex flex-col min-w-[190px] cursor-pointer rounded-lg border-[1px] p-5 gap-2 justify-between"
    >
      <span className="text-[11px] text-center text-gray-400">{title}</span>
      <b className="text-2xl text-center text-blue-1">{data}</b>
    </a>
  );
};

export default TeachHomeCard;
