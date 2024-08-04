import React from "react";
import HeroImage from "../assets/hero_image.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className=" h-screen w-full lg:px-24">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-screen px-4 md:flex-row gap-8">
        <div className=" relative flex flex-col justify-center">
          {/* animated divs */}
          <div className=" absolute top-2 left-2 lg:left-56 w-52 h-52 lg:w-72 lg:h-72 bg-yellow-300 filter blur-2xl opacity-40 animate-blob animation-delay-2000 mix-blend-multiply -z-10 rounded-full "></div>
          <div className=" absolute top-2 right-12 lg-right-96 w-52 h-52 lg:w-72 lg:h-72 bg-green-300 filter blur-2xl opacity-40 animate-blob mix-blend-multiply -z-10 rounded-full "></div>
          <div className=" absolute top-2 right-16 lg:right-96 w-52 h-52 lg:w-72 lg:h-72 bg-purple-300 filter blur-2xl opacity-40 animate-blob animation-delay-4000  mix-blend-multiply -z-10 rounded-full "></div>

          {/* header text */}
          <h2 className=" text-4xl sm:text-4xl lg:text-7xl font-bold ">
            I'm a Front End Developer
          </h2>
          <p className="py-4 ">
            Passionate about creating seamless, user-centric web expereinces.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={600}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to bg-green-500 text-white "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="text-xl" />
              </span>
            </Link>
          </div>
        </div>

        {/* hero image */}

        <div className="flex items-center justify-center">
          <img
            src={HeroImage}
            alt="my picture"
            className=" rounded-full  mx-auto w-2/3 md:w-full max-w-[250px] md:max-w-[400px] bg-green-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
