import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <nav className=" z-20 flex justify-between items-center w-full h-20  fixed px-4">
      {/* name */}
      <div>
        <h1 className="font-signature text-5xl font-bold ml-2">Newbon</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* menu icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? (
          <FaTimes className="text-3xl" />
        ) : (
          <FaBars className="text-3xl" />
        )}
      </div>

      {/* nav menu */}

      {nav ? (
        <ul className=" z-10 flex flex-col justify-center items-center absolute top-0 left-0 h-screen bg-gradient-to-b from-gray-300 w-full to-white text-gray-900">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-5xl duration-300 "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
