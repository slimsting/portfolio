import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  const technologies = [
    {
      id: 1,
      img: <AiOutlineHtml5 className="text-5xl w-20 mx-auto text-orange-500" />,
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      img: <TbBrandCss3 className="text-5xl mx-auto text-blue-500" />,
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      img: <RiTailwindCssFill className="text-5xl  mx-auto text-teal-500" />,
      name: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 3,
      img: <TbBrandJavascript className="text-5xl  mx-auto text-yellow-500" />,
      name: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      img: <FaReact className="text-5xl  mx-auto text-cyan-500" />,
      name: "React",
      style: "shadow-cyan-500",
    },
  ];
  return (
    <div name="skills" className="h-screen w-full lg:px-24 ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="py-6">These are the technologies i have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, img, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              {img}
              <p className="mt-4 ">{name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
