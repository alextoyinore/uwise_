import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const paragraphs = [
  {
    parag:
      "In today's competitive business landscape, the ability to adapt and innovate is essential for success. As industries evolve and technologies advance, organizations must invest in continuous learning to stay ahead of the curve. Enter Uwise: an online learning platform that is revolutionizing corporate training and development, empowering businesses to cultivate a culture of learning and drive sustainable growth.",
  },
  {
    parag:
      "At the heart of Uwise's appeal to businesses is its comprehensive suite of corporate training solutions. From leadership development and employee onboarding to technical skills training and compliance, Uwise offers a diverse range of courses designed to meet the unique needs of modern organizations. With expert-led content and interactive learning experiences, Uwise equips employees with the knowledge and skills they need to excel in their roles and contribute to the success of the business.",
  },
  {
    parag:
      "One of the key advantages of Uwise for businesses is its scalability. Whether you're a small startup or a multinational corporation, Uwise can scale to accommodate organizations of all sizes and structures. With customizable learning paths, progress tracking, and reporting features, Uwise provides businesses with the tools they need to effectively manage and monitor employee development initiatives.",
  },
  {
    parag:
      "Moreover, Uwise offers flexibility and convenience, allowing employees to access training materials anytime, anywhere, and on any device. This flexibility not only enhances employee engagement and satisfaction but also minimizes disruptions to productivity by enabling learning to occur on employees' own schedules.",
  },
  {
    parag:
      "Furthermore, Uwise provides businesses with valuable insights and analytics to measure the impact of their training investments. Through data-driven reporting and performance metrics, organizations can track learner progress, identify areas for improvement, and make informed decisions to optimize their training programs.",
  },
  {
    parag:
      "In addition to its core offerings, Uwise partners with businesses to develop custom-tailored training solutions that address specific organizational challenges and objectives. Whether it's upskilling teams for digital transformation or fostering a culture of diversity and inclusion, Uwise collaborates with businesses to design learning experiences that drive tangible results and impact.",
  },
  {
    parag:
      "In conclusion, Uwise is not just a learning platform; it's a strategic partner for businesses looking to thrive in the digital age. By offering scalable, customizable, and data-driven training solutions, Uwise empowers organizations to invest in their most valuable asset—their people—and unlock their full potential for innovation and growth.",
  },
];

const Corporate = () => {
  return (
    <div className="flex gap-5">
      <div className="w-4/5 px-5">
        <h2 className="text-gray-700 text-2xl font-bold leading-8">
          Uwise for Business: Empowering Organizations through Continuous
          Learning
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
        <Input placeholder="Business Name" />
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

export default Corporate;
