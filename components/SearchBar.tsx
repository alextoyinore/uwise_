import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return <form action="" className="flex p-1 bg-gray-50 border-[1px] rounded-full w-[500px] items-center text-gray-200">
    <Input placeholder='I want to learn' className="border-none w-[50%] bg-transparent rounded-full text-gray-400 text-[12px]" /> |
    <Input placeholder='Location' className="border-none w-[25%] bg-transparent rounded-full text-gray-400 text-[12px]" /> |
    <Input placeholder='Budget' className="border-none w-[25%] bg-transparent rounded-full text-gray-400 text-[12px]"/>
    <Button className="bg-blue-1 rounded-full">
        <SearchIcon width={15} height={15} color="white" />
    </Button>
  </form>;
};

export default SearchBar;
