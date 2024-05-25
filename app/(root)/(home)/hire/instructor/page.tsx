import PeopleCard from '@/components/PeopleCard'
import { people } from '@/data/local/people'
import React from 'react'

const HireInstructor = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg text-gray-700 font-bold mb-5">
        Hire Top Instructors
      </h2>
      <div className="flex flex-wrap gap-5">
        {people
          .filter((item) => item.role.toLowerCase() === "instructor")
          .map((person, index) => (
            <div
              className="w-1/4 rounded-xl border-[1px] hover:bg-gray-50/60"
              key={index}
            >
              <PeopleCard
                firstName={person.firstName}
                lastName={person.lastName}
                link={person.link}
                role={person.role}
                rating={person.rating}
                image={person.image}
                joined={person.joined}
                organization={person.organization}
                logoUrl={person.logoUrl}
                designation={person.designation}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default HireInstructor
