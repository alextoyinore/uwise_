import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <form
      action=""
      className="flex p-1 border-[1px] focus:border-blue-1 rounded-full items-center text-gray-300 bg-gray-50"
    >
      <Input
        placeholder="I want to learn"
        className="border-none w-[50%] bg-transparent rounded-full text-gray-600 text-sm placeholder:text-gray-500"
      />{" "}
      |
      <Input
        placeholder="Location"
        className="border-none w-[25%] bg-transparent rounded-full text-gray-600 text-sm placeholder:text-gray-500"
      />{" "}
      |
      <Input
        placeholder="Budget"
        className="border-none w-[25%] bg-transparent rounded-full text-gray-600 text-sm placeholder:text-gray-500"
      />
      <Button className="bg-blue-1 rounded-full flex items-center gap-2 text-white">
        <span>Find</span>
        <SearchIcon width={15} height={15} color="white" />
      </Button>
    </form>
  );
};

export default SearchBar;
