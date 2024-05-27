import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const paragraphs = [
  {
    parag:
      "In the rapidly evolving landscape of education, technology has become an indispensable tool for enhancing teaching and learning experiences. Uwise, an innovative online learning platform, is at the forefront of this transformation, offering educators and institutions a powerful suite of tools and resources to engage students, personalize learning, and drive academic success.",
  },
  {
    parag:
      "Central to Uwise's appeal to schools and colleges is its vast repository of educational content spanning a wide range of subjects and grade levels. From math and science to history and literature, Uwise hosts expert-curated courses that align with academic standards and objectives, providing educators with a wealth of resources to enrich their curriculum and support diverse learning needs.",
  },
  {
    parag:
      "One of the key advantages of Uwise for educational institutions is its ability to personalize learning experiences for students. By leveraging data analytics and adaptive learning technologies, Uwise delivers personalized recommendations and learning paths tailored to each student's strengths, weaknesses, and interests. This personalized approach not only enhances student engagement and motivation but also enables educators to differentiate instruction and meet the needs of diverse learners.",
  },
  {
    parag:
      "Moreover, Uwise offers educators a range of tools and features to create dynamic and interactive learning experiences. From multimedia content and virtual simulations to collaborative projects and assessments, Uwise empowers educators to design engaging lessons that foster critical thinking, creativity, and problem-solving skills.",
  },
  {
    parag:
      "Furthermore, Uwise facilitates collaboration and knowledge sharing among educators through its professional development resources and community forums. Educators have the opportunity to connect with peers, share best practices, and access expert-led workshops and training sessions to enhance their teaching skills and stay abreast of the latest pedagogical trends and technologies.",
  },
  {
    parag:
      "In addition to its core offerings, Uwise partners with educational institutions to develop custom solutions that address specific institutional needs and goals. Whether it's implementing a blended learning model, rolling out a new digital curriculum, or supporting remote and hybrid learning environments, Uwise collaborates with schools and colleges to design tailored solutions that drive student success and academic excellence.",
  },
  {
    parag:
      "In conclusion, Uwise is not just an online learning platform; it's a catalyst for educational innovation and transformation. By offering personalized learning experiences, empowering educators, and fostering collaboration, Uwise is redefining the future of teaching and learning, empowering schools and colleges to prepare students for success in the 21st century and beyond.",
  },
];

const School = () => {
  return (
    <div className="flex gap-5">
      <div className="w-4/5 px-5">
        <h2 className="text-gray-700 text-2xl font-bold leading-8">
          Uwise in Education: Transforming Teaching and Learning for Schools and
          Colleges
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
        <Input placeholder="School Name" />
        <Input placeholder="Location" />
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

export default School;
