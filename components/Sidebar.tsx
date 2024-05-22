import { requests } from "@/data/local/requests";
import React from "react";
import Request from "./Request";
import Link from "next/link";
import { instructors } from "@/data/local/instructors"
import InstructorInfo from "./InstructorInfo";
import { clients } from "@/data/local/clients";

const Sidebar = () => {
  return (
    <div className="max-h-screen">
      <section className="border-[1px] border-gray-50 rounded-xl mb-5">
        <div className="p-3">
          <Link
            href="/instructor"
            className="text-md font-bold text-gray-700 cursor-pointer"
          >
            Top Instructors
          </Link>
        </div>
        <div className="">
          {instructors.map((instructor, index) => (
            <div key={index} className="hover:bg-gray-50">
              <div className="flex flex-col gap-1 cursor-pointer p-3">
                <InstructorInfo
                  firstName={instructor.firstName}
                  lastName={instructor.lastName}
                  rating={instructor.rating}
                  link={instructor.link}
                  organization={instructor.organization}
                  image={instructor.image}
                />
                {/* <hr className="my-1 border-gray-300"/> */}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="border-[1px] border-gray-50 rounded-xl mb-5">
        <div className="p-3">
          <Link
            href="/instructor"
            className="text-md font-bold text-gray-700 cursor-pointer"
          >
            Top Clients
          </Link>
        </div>
        <div className="">
          {clients.map((client, index) => (
            <div key={index} className="hover:bg-gray-50">
              <div className="flex flex-col gap-1 cursor-pointer p-3">
                <InstructorInfo
                  firstName={client.firstName}
                  lastName={client.lastName}
                  rating={client.rating}
                  link={client.link}
                  organization={client.organization}
                  image={client.logoUrl}
                />
                {/* <hr className="my-1 border-gray-300"/> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-[1px] border-gray-50 rounded-xl my-5">
        <div className="p-3">
          <Link
            href="/request"
            className="text-md font-bold text-gray-700 cursor-pointer"
          >
            Latest Requests
          </Link>
        </div>

        <div className="">
          {requests.map((request, index) => (
            <div key={index} className="hover:bg-gray-50">
              <div className="flex flex-col gap-1 cursor-pointer p-3">
                <Request
                  logoUrl={request.logoUrl}
                  firstName={request.firstName}
                  lastName={request.lastName}
                  organization={request.organization}
                  requested={request.request}
                  location={request.location}
                  budget={request.budget}
                  link={request.link}
                />
                {/* <hr className="my-1 border-gray-300"/> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
