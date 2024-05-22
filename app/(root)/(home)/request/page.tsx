import { requests } from "@/data/local/requests";
import { Link, MessageCircleQuestion } from "lucide-react";
import React from "react";
import Request from "@/components/Request";
import RequestItem from "@/components/RequestItem";
import { cn } from "@/lib/utils";

const RequestHome = () => {
  return (
    <div>
      <p className="text-gray-400 my-3">Total Requests: {requests.length}</p>
      <div className="w-full flex flex-col">
        {/* <Link href={"/request"}>
      <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
        <MessageCircleQuestion /> Requests
      </h2>
    </Link> */}

        {requests.map((request, index) => (
          <div
            key={index}
            className={cn("cursor-pointer p-3 border-b-[1px] border-gray-50 hover:bg-gray-50", {
              "bg-white": index % 2 == 0,
            })}
          >
            <RequestItem
              logoUrl={request.logoUrl}
              firstName={request.firstName}
              lastName={request.lastName}
              organization={request.organization}
              requested={request.request}
              location={request.location}
              budget={request.budget}
              link={request.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestHome;
