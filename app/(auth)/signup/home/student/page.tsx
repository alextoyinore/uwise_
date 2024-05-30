"use client";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { register } from "@/lib/auth";
import { redirect } from "next/navigation";

const StudentSignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = register(email, password, firstName + " " + lastName);
    // redirect("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md flex flex-col gap-3 w-1/2 px-5"
    >
      <h2 className="text-lg text-gray-600 my-2">Sign up with email</h2>
      <Input
        placeholder="Email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="First Name"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        placeholder="Last Name"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="bg-gradient-to-r from-green-1 to-blue-1 rounded-full text-white">
        Sign up
      </Button>
      <p className="text-gray-400 text-[11px]">
        By clicking &apos;Sign up&apos; you agree to our
        <a href={"/terms"} className="text-green-1">
          &nbsp; terms and conditions
        </a>{" "}
        and community and privacy
        <a href={"/policy"} className="text-green-1">
          &nbsp; policies
        </a>
      </p>
    </form>
  );
};

export default StudentSignUp;
