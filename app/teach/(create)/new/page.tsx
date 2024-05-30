import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NewCourse = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-gray-700 text-2xl">Create New Course</h1>
      <form className="flex gap-5">
        <div className="w-2/3 flex flex-col gap-3">
          <Input placeholder="Course Title" />
          <Input type="file" placeholder="Image" />
          <Textarea placeholder="Course Description" rows={10} />
          <Input type="number" placeholder="Price" />
          <div className="flex gap-5">
            <Select>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Choose Field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Programming</SelectItem>
                <SelectItem value="dark">Computing</SelectItem>
                <SelectItem value="system">Fashion</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Choose Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Software</SelectItem>
                <SelectItem value="dark">Digital Marketing</SelectItem>
                <SelectItem value="system">Data Analysis</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-3">
          <Input placeholder="Slug" />
          <Input placeholder="Link" />
          <Textarea placeholder="Excerpt" rows={5} />
          <Button type="submit" className="bg-gray-100 text-gray-600">
            Save as Draft
          </Button>
          <Button type="submit" className="bg-blue-1 text-white">
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewCourse;
