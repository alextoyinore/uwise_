import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Newsletter = () => {
  return (
    <div className="flex flex-col my-5">
          <p className="w-full text-blue-1">
            Stay in the loop with latest{" "}
            <span className="text-green-1">courses</span> and updates
          </p>
          <form action={''} className="flex flex-col w-full">
            <Input
              placeholder="Enter your email"
              className="rounded-full bg-gray-50 w-full text-gray-400 my-5"
            />
            {/* <Button className="bg-gradient-to-r w-[30%] from-green-1 to-blue-1 text-white text-[14px] rounded-r-full font-bold py-1">
              Join Now
            </Button> */}

            <Button className="bg-blue-1 text-white text-[14px] rounded-full py-1">
              Join Newsletter
            </Button>
          </form>
        </div>
  )
}

export default Newsletter
