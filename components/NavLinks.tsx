import {
  Aperture,
  Briefcase,
  Handshake,
  Home,
  Layers,
  MessageCircleQuestion,
  Presentation,
  Rss,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex flex-col gap-1 text-[14px] text-gray-700 font-bold">
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/home"
      >
        <Home width={15} /> Home
      </Link>
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/explore"
      >
        <Aperture width={15} /> Explore
      </Link>
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/explore/categories"
      >
        <Layers width={15} /> Categories
      </Link>
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/request"
      >
        <MessageCircleQuestion width={15} /> Requests
      </Link>
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/teach"
      >
        <Presentation width={15} /> Teach
      </Link>
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/partnership"
      >
        <Handshake width={15} /> Partnership
      </Link>
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/hire"
      >
        <Briefcase width={15} /> Hire
      </Link>
      <Link
        className="hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full p-2 flex gap-1 items-center"
        href="/blog"
      >
        <Rss width={15} /> Blog
      </Link>
    </div>
  );
};

export default NavLinks;
