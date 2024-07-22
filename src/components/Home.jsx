import React from "react";
import HeroImage from "../assets/hero_image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-300 to-white  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col flex-col-reverse items-center justify-center h-full px-4 md:flex-row gap-8">
        <div className="flex flex-col justify-center">
          <h2 className=" text-4xl sm:text-7xl font-bold ">
            I'm a Front End Developer
          </h2>
          <p className="py-4 ">
            Passionate about creating seamlses, user-centric web expereinces.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={600}
              className=" group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to bg-blue-500 text-white "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="text-xl" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={HeroImage}
            alt="my picture"
            className=" rounded-full  mx-auto w-2/3 md:w-full max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
