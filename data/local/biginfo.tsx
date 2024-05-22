import { Briefcase, Presentation } from "lucide-react";

export const biginfos = [
    {
        id: 1,
        title: 'Teach on Uwise',
        link: '/teach',
        icon: <Presentation size={15} />,
        image: 'teach',
        description: 'Teach on Uwise and earn money with your skills',
        listItem: [
            'We provide the tools for you to impact your wealth of knowledge and expertise',
            'Gain industry recognition and authority by teaching what you know'
        ]
    },
    {
        id: 2,
        title: 'Hire top talents',
        link: '/hire',
        icon: <Briefcase size={15} />,
        image: 'hire',
        description: 'Hire top talents on Uwise. Get the best hands for the job',
        listItem: [
            'Hire from the top 1% of students on Uwise both past and present',
            'Hire top 20% of Instructors with proven industry expertise and track record'
        ]
    }
]