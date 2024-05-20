import CategoryCard from '@/components/CategoryCard'
import { categories } from '@/data/local/categories'
import { Link, Layers } from 'lucide-react'
import React from 'react'

const Categories = () => {
  return (
    <div><section className="my-10">
    <Link href={"/explore/categories"}>
      <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
        <Layers /> Categories
      </h2>
    </Link>

    <div className="flex flex-wrap justify-between my-5">
      {categories.map((category, index) => (
        <div key={index}>
          <CategoryCard
            title={category.title}
            link={category.link}
            icon={category.icon}
          />
        </div>
      ))}
    </div>
  </section></div>
  )
}

export default Categories
