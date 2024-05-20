import { requests } from '@/data/local/requests'
import { Link, MessageCircleQuestion } from 'lucide-react'
import React from 'react'
import Request from '@/components/Request'

const RequestHome = () => {
  return (
    <div><div className="w-[30%] rounded-2xl border-gray-700">
    <Link href={"/request"}>
      <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
        <MessageCircleQuestion /> Requests
      </h2>
    </Link>

    {requests.map((request, index) => (
      <article
        key={index}
        className="flex flex-col gap-3 my-5 cursor-pointer rounded-2xl border-2 border-gray-700 p-3 hover:border-green-1"
      >
        <Request
          logoUrl={request.logoUrl}
          firstName={request.firstName}
          lastName={request.lastName}
          organization={request.organization}
          requested={request.request}
          location={request.location}
          budget={request.budget}
        />
        {/* <hr className="my-1 border-gray-300"/> */}
      </article>
    ))}
  </div></div>
  )
}

export default RequestHome
