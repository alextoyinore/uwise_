import {
  BarChart,
  Brain,
  BrainCircuit,
  CircuitBoard,
  Earth,
  Paperclip,
  Phone,
  PieChart,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

export const categories = [
  {
    id: 1,
    title: "Artificial Intelligence",
    link: "/explore/categories/artificial-intelligence",
    icon: <Brain size={15} />,
  },
  {
    id: 2,
    title: "Web Development",
    link: "/explore/categories/web-development",
    icon: <Earth size={15} />,
  },
  {
    id: 3,
    title: "App Development",
    link: "/explore/categories/mobile-app-development",
    icon: <Phone size={15} />,
  },
  {
    id: 4,
    title: "Digital Marketing",
    link: "/explore/categories/digital-marketing",
    icon: <ShoppingCart size={15} />,
  },
  {
    id: 5,
    title: "Data Analysis",
    link: "/explore/categories/data-analysis",
    icon: <BarChart size={15} />,
  },
  {
    id: 6,
    title: "Software",
    link: "/explore/categories/software",
    icon: <CircuitBoard size={15} />,
  },
  {
    id: 7,
    title: "Fashion",
    link: "/explore/categories/fashion",
    icon: <ShoppingBag size={15} />,
  },
  {
    id: 8,
    title: "Art & Craft",
    link: "/explore/categories/art-craft",
    icon: <Paperclip size={15} />,
  },
  {
    id: 9,
    title: "Engineering",
    link: "/explore/categories/engineering",
    icon: <CircuitBoard size={15} />,
  },
];

export const exploreCategories = [
  {
    subject: "Fashion",
    subjectlink: "/subject/fashion",
    categories: [
      {
        id: 1,
        title: "Artificial Intelligence",
        link: "/explore/categories/artificial-intelligence",
        icon: <Brain size={15} />,
      },
      {
        id: 2,
        title: "Web Development",
        link: "/explore/categories/web-development",
        icon: <Earth size={15} />,
      },
      {
        id: 3,
        title: "App Development",
        link: "/explore/categories/mobile-app-development",
        icon: <Phone size={15} />,
      },
    ],
  },
  {
    subject: "Software Engineering",
    subjectlink: "/subject/software-enginerring",
    categories: [
      {
        id: 4,
        title: "Digital Marketing",
        link: "/explore/categories/digital-marketing",
        icon: <ShoppingCart size={15} />,
      },
      {
        id: 5,
        title: "Data Analysis",
        link: "/explore/categories/data-analysis",
        icon: <BarChart size={15} />,
      },
      {
        id: 6,
        title: "Software",
        link: "/explore/categories/software",
        icon: <CircuitBoard size={15} />,
      },
      {
        id: 7,
        title: "Fashion",
        link: "/explore/categories/fashion",
        icon: <ShoppingBag size={15} />,
      },
      {
        id: 8,
        title: "Art & Craft",
        link: "/explore/categories/art-craft",
        icon: <Paperclip size={15} />,
      },
      {
        id: 9,
        title: "Engineering",
        link: "/explore/categories/engineering",
        icon: <CircuitBoard size={15} />,
      },
    ],
  },
];
