import { requests } from "@/data/local/requests";
import React from "react";
import Request from "./Request";
import Link from "next/link";
import { instructors } from "@/data/local/instructors"
import InstructorInfo from "./InstructorInfo";
import { clients } from "@/data/local/clients";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import ClientInfo from "./ClientInfo";

const Sidebar = () => {
  return (
    <div className="">
      {/**
       * TOP INSTRUCTORS
       */}
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
            <div key={index} className="hover:bg-gray-100 hover:rounded-lg">
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

      {/**
       * TOP CLIENTS
       */}

      <section className="border-[1px] border-gray-100 rounded-xl mb-5">
        <div className="p-3">
          <Link
            href="/client"
            className="text-md font-bold text-gray-700 cursor-pointer"
          >
            Top Clients
          </Link>
        </div>
        <div className="">
          {clients.map((client, index) => (
            <div key={index} className="hover:bg-gray-100 hover:rounded-lg">
              <div className="flex flex-col gap-1 cursor-pointer p-3">
                <ClientInfo
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

      {/**
       * LATEST REQUESTS
       */}

      <section className="border-[1px] border-gray-50 rounded-xl my-5">
        <div className="p-3">
          <Link
            href="/request"
            className="text-md font-bold text-gray-500 cursor-pointer"
          >
            Latest Requests
          </Link>
        </div>

        <div className="">
          {requests.map((request, index) => (
            <div key={index} className="hover:bg-gray-100 hover:rounded-lg">
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

      {/**
       * NEWSLETTER
       */}

      <section className="text-gray-400 my-5 p-3 border-[1px] border-gray-50 rounded-xl">
        <Newsletter />
      </section>

      {/**
       * FOOTER
       */}
       <section className="text-gray-400 my-5 p-3 border-[1px] border-gray-50 rounded-xl">
        <Footer />
       </section>
    </div>
  );
};

export default Sidebar;
