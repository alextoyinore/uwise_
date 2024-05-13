import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Newsletter = () => {
  return (
    <div className="flex my-5 justify-between">
          <p className="w-full font-bold text-2xl text-blue-1">
            Stay in the loop with latest{" "}
            <span className="text-green-1">courses</span> and updates
          </p>
          <form action={''} className="flex items-center w-full">
            <Input
              placeholder="Enter your email"
              className="rounded-l-full bg-gray-50 w-[70%] text-gray-400 py-1"
            />
            <Button className="bg-gradient-to-r w-[30%] from-green-1 to-blue-1 text-white text-[14px] rounded-r-full font-bold py-1">
              Join Now
            </Button>
          </form>
        </div>
  )
}

export default Newsletter
