import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin className="text-3xl" />
        </>
      ),
      href: "https://www.linkedin.com/in/newbon-gadson-51099794/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub className="text-3xl" />
        </>
      ),
      href: "https://github.com/slimsting",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail className="text-3xl" />
        </>
      ),
      href: "mailto:newbon.gadson@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill className="text-3xl" />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <section className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              " text-xl font-semibold pl-5  flex justify-between items-center w-40 h-14 px-4 bg-green-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              "" +
              style
            }
          >
            <a
              href={href}
              className=" flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialLinks;
