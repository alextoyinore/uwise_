import React from 'react'

interface BlogInfo {
  title: string
  excerpt: string
  author: string
  month: string
  year: number
}

const BlogCard = ({title, excerpt, author, month, year}:BlogInfo) => {
  return (
    <div className='flex flex-col gap-2 rounded-lg p-5 bg-gray-50 cursor-pointer hover:bg-blue-1/5'>
        <p className='text-md text-blue-1'>{title}</p>
        <p className='text-[11px] text-gray-600'>{excerpt}</p>
        <p className='flex gap-2 text-[12px] text-green-1'><span className='text-red-1'>{author}</span>{month} {year}</p>
    </div>
  )
}

export default BlogCard
