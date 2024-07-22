import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia
          iure sunt ipsum minima debitis voluptate. Magnam in molestias
          laboriosam nobis nihil explicabo quisquam voluptatem expedita
          incidunt, quaerat, ipsam nostrum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          nihil consequatur ratione, culpa quis architecto qui atque tempora
          nisi hic asperiores.
        </p>
      </div>
    </section>
  );
};

export default About;
