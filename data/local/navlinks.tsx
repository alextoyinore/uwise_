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


export const navlinks = [
  {
    title: "Home",
    icon: <Home size={15} />,
    link: "/",
  },
  {
    title: "Explore",
    icon: <Aperture size={15} />,
    link: "/explore",
  },
  {
    title: "Categories",
    icon: <Layers size={15} />,
    link: "/explore/categories",
  },
  {
    title: "Requests",
    icon: <MessageCircleQuestion size={15} />,
    link: "/request",
  },
  {
    title: "Teach",
    icon: <Presentation size={15} />,
    link: "/teach",
  },
  {
    title: "Partnership",
    icon: <Handshake size={15} />,
    link: "/partnership",
  },
  {
    title: "Hire",
    icon: <Briefcase size={15} />,
    link: "/hire",
  },
  {
    title: "Blog",
    icon: <Rss size={15} />,
    link: "/blog",
  },
];
