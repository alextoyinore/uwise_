import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const paragraphs = [
  {
    parag:
      "In the realm of government agencies and public sector organizations, the demand for efficient training and development solutions has never been higher. With Uwise Government Edition, a specialized online learning platform tailored for governmental use, agencies can now harness the power of technology to enhance workforce capabilities, improve service delivery, and drive organizational effectiveness.",
  },
  {
    parag:
      "At the core of Uwise Government Edition's appeal lies its comprehensive suite of training modules designed specifically for public sector professionals. From compliance and regulatory training to leadership development and technical skills enhancement, the platform offers a diverse range of courses that address the unique challenges and priorities of government agencies at all levels.",
  },
  {
    parag:
      "One of the key advantages of Uwise Government Edition is its ability to streamline training processes and maximize efficiency. By providing a centralized platform for delivering, managing, and tracking training activities, Uwise Government Edition simplifies administrative tasks and reduces the administrative burden on agency personnel. This efficiency gains translate into cost savings and resource optimization for government organizations.",
  },
  {
    parag:
      "Moreover, Uwise Government Edition offers flexibility and accessibility, allowing employees to access training materials anytime, anywhere, and on any device. This flexibility not only accommodates the diverse needs and schedules of government employees but also ensures continuity of learning in the face of evolving work environments and remote work arrangements.",
  },
  {
    parag:
      "Furthermore, Uwise Government Edition incorporates features tailored to the specific needs of government agencies, such as compliance tracking, reporting tools, and security protocols. These features ensure that agencies remain compliant with regulatory requirements, maintain accurate records of training activities, and safeguard sensitive information and data.",
  },
  {
    parag:
      "In addition to its core offerings, Uwise Government Edition provides agencies with customizable solutions to address specific organizational needs and objectives. Whether it's developing custom training modules, integrating with existing learning management systems, or providing tailored support and consulting services, Uwise Government Edition collaborates with agencies to design solutions that align with their strategic priorities and mission objectives.",
  },
  {
    parag:
      "Moreover, Uwise Government Edition prioritizes accessibility and inclusivity, ensuring that training materials are designed to meet the needs of diverse learners, including those with disabilities or limited English proficiency. By promoting accessibility and inclusivity, Uwise Government Edition helps government agencies foster a culture of diversity, equity, and inclusion within their workforce.",
  },
  {
    parag:
      "In conclusion, Uwise Government Edition is not just a training platform; it's a strategic asset for government agencies seeking to enhance workforce capabilities, improve service delivery, and drive organizational performance. By offering tailored solutions, streamlined processes, and robust support, Uwise Government Edition empowers public sector organizations to thrive in an increasingly complex and dynamic operating environment, ultimately serving the needs of citizens and communities more effectively and efficiently.",
  },
];

const Government = () => {
  return (
    <div className="flex gap-5">
      <div className="w-4/5 px-5">
        <h2 className="text-gray-700 text-2xl font-bold leading-8">
          Uwise Government Edition: Revolutionizing Public Sector Training and
          Development
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
        <Input placeholder="Agency / Ministry Name" />
        <Input placeholder="State (Optional)" />
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

export default Government;
