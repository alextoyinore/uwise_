import { cn } from "@/lib/utils";
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
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

const NavLink = ({ title, icon, link }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "hover:text-blue-1 hover:bg-blue-1/5 hover:rounded-full hover:font-bold p-2 flex gap-1 items-center",
        { "bg-blue-1/5 rounded-full font-bold text-blue-1": link === pathname }
      )}
      href={link}
    >
      {icon} {title}
    </Link>

    // </div>
  );
};

export default NavLink;
