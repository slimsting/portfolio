import React from "react";
import Trivia from "../assets/trivia.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Trivia,
    },
    {
      id: 2,
      src: Trivia,
    },
    {
      id: 3,
      src: Trivia,
    },
  ];
  return (
    <section
      name="portfolio"
      className="w-full h-sceen md:h-screen lg:px-24 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className=" max-w-[500px] shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:scale-105 duration-200"
            >
              <img src={src} alt="" className="rounded-md " />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px py-3 m4  duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px py-3 m4  duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
