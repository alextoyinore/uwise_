import BigInfo from "@/components/BigInfo";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { biginfos } from "@/data/local/biginfo";
import { Mail } from "lucide-react";
import React from "react";

const Welcome = () => {
  return (
    <div>
      <section className="flex gap-5">
        {biginfos.map((info, index) => (
          <div key={index}>
            <BigInfo
              title={info.title}
              link={info.link}
              icon={info.icon}
              image={info.image}
              description={info.description}
              listItem={info.listItem}
            />
          </div>
        ))}
      </section>

      <section className="">
        <h2 className="text-gray-400 my-5 flex flex-wrap items-center gap-2">
          <Mail /> Newsletter
        </h2>
        <Newsletter />
      </section>

      <section className={"bg-blue-1 rounded-lg my-10 p-5 text-white m-[auto]"}>
        <Footer />
      </section>
    </div>
  );
};

export default Welcome;
