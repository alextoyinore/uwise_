import React from 'react'

const BlogCard = () => {
  return (
    <div className='flex flex-col gap-2 rounded-lg p-5 bg-gray-50 cursor-pointer hover:bg-blue-1/5'>
        <p className='text-md text-blue-1'>A beginner’s guide to React. Getting started with Front-end</p>
        <p className='text-[11px] text-gray-600'>I found Uwise when I needed a real career change. A friend told me about it before it became mega....</p>
        <p className='flex gap-2 text-[12px] text-green-1'><span className='text-red-1'>Alexander Ore</span> March 2024</p>
    </div>
  )
}

export default BlogCard
