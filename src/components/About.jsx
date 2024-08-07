import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full h-screen lg:px-24 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-16">
          Hello! my name is Newbon Gadson, a passionate front-end developer
          dedicated to creating seamless and satisfying user experiences on the
          web. With a strong commitment to modern web development practices, I
          ensure that every website I build is visually appealing, highly
          functional, and accessible. By leveraging responsive design
          techniques, I guarantee that my sites look and function perfectly on
          any device, from smartphones to desktops.
        </p>

        <br />

        <p className="text-xl mb-20"></p>
      </div>
    </section>
  );
};

export default About;
