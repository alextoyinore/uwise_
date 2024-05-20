import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Notebook } from "lucide-react";

interface BigInfoProps {
  title: string;
  link: string;
  icon: string;
  image: string;
  description: string;
  listItem: Array<string>;
}

const BigInfo = ({
  title,
  link,
  icon,
  image,
  description,
  listItem,
}: BigInfoProps) => {
  return (
    <article className="w-full">
      <h2 className="text-gray-700 flex items-center gap-2">
        <Image
          className=""
          src={"/icons/" + icon + ".svg"}
          alt={title}
          width={25}
          height={25}
        />{" "}
        {title}
      </h2>
      <Link href={link} className="flex my-5 border-2 border-gray-700 rounded-2xl">
        <Image
          className="rounded-l-2xl"
          src={"/images/" + image + ".jpg"}
          alt=""
          width={250}
          height={50}
        />
        <div className="flex flex-col p-5 rounded-r-2xl">
          <p className="text-blue-1 font-bold text-xl">{description}</p>
          <ul className="text-[12px] text-gray-500 my-2 px-5">
            {listItem.map((item, index) => (
              <li key={index} className="my-1 list-disc">
                {item}
              </li>
            ))}
          </ul>
          <p className=" text-red-1 text-[14px] rounded-full w-[50%]">
            Learn more...
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BigInfo;
