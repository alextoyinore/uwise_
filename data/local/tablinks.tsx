import { Aperture, Briefcase, Layers, MessageCircleQuestion } from "lucide-react";

export const tablinks = [
    {
        title: 'Explore',
        icon: <Aperture size={15} />,
        link: '/explore'
    },
    {
        title: 'Categories',
        icon: <Layers size={15} />,
        link: '/explore/categories'
    },
    {
        title: 'Requests',
        icon: <MessageCircleQuestion size={15} />,
        link: '/request'
    },
    {
        title: 'Hire',
        icon: <Briefcase size={15} />,
        link: '/hire'
    }
]

