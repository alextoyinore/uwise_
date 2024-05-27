import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const paragraphs = [
  {
    parag:
      "In the digital age, children are growing up surrounded by technology, and as such, there's a growing need for educational platforms that cater specifically to their developmental needs and interests. Enter Uwise Kids, a vibrant and interactive online learning platform designed to engage and inspire young learners through fun and educational content.",
  },
  {
    parag:
      "At the heart of Uwise Kids' appeal is its diverse collection of courses and activities tailored to children aged 3 to 12. From foundational subjects like math and language arts to creative disciplines like art and music, Uwise Kids offers a wide range of content designed to stimulate curiosity, foster creativity, and support early learning milestones.",
  },
  {
    parag:
      "One of the key advantages of Uwise Kids is its child-friendly interface and engaging multimedia content. Designed with colorful visuals, playful animations, and interactive elements, the platform captures children's attention and keeps them actively engaged in their learning journey. Whether it's through interactive games, animated stories, or hands-on activities, Uwise Kids makes learning fun and enjoyable for young minds.",
  },
  {
    parag:
      "Moreover, Uwise Kids offers parents and caregivers peace of mind with its curated selection of age-appropriate content and parental controls. With built-in filters and monitoring tools, parents can ensure that their children are accessing content that aligns with their developmental stage and learning objectives, while also safeguarding their online experience.",
  },
  {
    parag:
      "Furthermore, Uwise Kids fosters a sense of exploration and discovery, allowing children to learn at their own pace and pursue their interests. With a diverse array of topics and themes to explore, from dinosaurs and space exploration to animals and nature, Uwise Kids encourages children to follow their curiosity and dive deeper into subjects that spark their imagination.",
  },
  {
    parag:
      "In addition to its core offerings, Uwise Kids provides supplemental resources for parents and educators, including activity guides, printable worksheets, and parenting tips. These resources empower parents to extend learning beyond the screen and engage their children in meaningful learning experiences both online and offline.",
  },
  {
    parag:
      "Moreover, Uwise Kids prioritizes safety and privacy, ensuring that children's personal information is protected and that they can explore and learn in a secure online environment. With robust privacy policies and safety measures in place, Uwise Kids gives parents peace of mind knowing that their children are learning and playing in a safe and responsible manner.",
  },
  {
    parag: "In conclusion, Uwise Kids is not just an online learning platform; it's a gateway to a world of exploration, discovery, and learning for young children. By offering engaging and educational content in a safe and secure online environment, Uwise Kids empowers young learners to unleash their creativity, develop essential skills, and embark on a lifelong journey of discovery and growth."
  }
];

const Kids = () => {
  return (
    <div className="flex gap-5">
      <div className="w-4/5 px-5">
        <h2 className="text-gray-700 text-2xl font-bold leading-8">
        Uwise Kids: Igniting Young Minds with Fun and Educational Content
        </h2>
        <div className="text-gray-500 text-[13px] my-2">
          {paragraphs.map((item, index) => (
            <p key={index} className="my-3 leading-6">
              {item.parag}
            </p>
          ))}
        </div>
      </div>

      <form className="max-w-md flex flex-col gap-3 w-1/2 px-5">
        <h2 className="text-md text-gray-600 my-2">
          Begin a conversation with us
        </h2>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Subject" />
        <Textarea rows={5} placeholder="Message" />
        <Button className="bg-gradient-to-r from-green-1 to-blue-1 rounded-full text-white">
          Send Message
        </Button>
        <p className="text-gray-400 text-[11px]">
          By clicking &apos;Sign up&apos; you agree to our
          <a href={"/terms"} className="text-green-1">
            &nbsp; contact, conversation and messaging terms and conditions
          </a>{" "}
          and community and privacy
          <a href={"/policy"} className="text-green-1">
            &nbsp; policies
          </a>
        </p>
      </form>
    </div>
  );
};

export default Kids;
