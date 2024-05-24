import CategoryCard from "@/components/CategoryCard";
import { categories, exploreCategories } from "@/data/local/categories";
import { Link, Layers } from "lucide-react";
import React from "react";

const Categories = () => {
  return (
    <div>
      {exploreCategories.map((item, index) => (
        <section key={index} className="my-5">
          <a className="my-5" href={item.subjectlink}>
            <h2 className="text-gray-700 flex items-center gap-2 hover:text-blue-1">
              {/* <Layers /> Categories */}
              {item.subject}
            </h2>
          </a>

          <div className="flex flex-wrap gap-5 mt-5 mb-10">
            {item.categories.map((category, index) => (
              <div key={index}>
                <CategoryCard
                  title={category.title}
                  link={category.link}
                  icon={category.icon}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Categories;
