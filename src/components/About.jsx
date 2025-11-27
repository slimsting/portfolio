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

        <p className="text-xl mt-6">
          Hello! My name is Newbon Gadson, a passionate full‑stack developer
          dedicated to building seamless and satisfying user experiences on the
          web. With a strong commitment to modern development practices, I craft
          applications that are not only visually appealing and highly
          functional but also scalable, efficient, and accessible. From
          translating UI designs into responsive, interactive interfaces to
          architecting robust back‑end systems, I ensure that every solution I
          deliver performs flawlessly across devices and platforms. By
          leveraging technologies such as JavaScript, React, Node.js, Express,
          and MongoDB, I create end‑to‑end web applications that balance
          user‑centric design with technical excellence.
        </p>
        {/* <p className=" text-xl mt-3 ">
          Accessibility is at the heart of my development philosophy. I adhere
          to the Web Content Accessibility Guidelines (WCAG), incorporating
          features like keyboard navigation, descriptive alt text for images,
          semantic HTML, and sufficient color contrast to make my websites
          usable for everyone. Utilizing modern technologies ensures fast
          loading times, secure connections, and a native app-like experience
          through Progressive Web Apps (PWAs). I am constantly learning and
          updating my skills to integrate new technologies and improve the user
          experience. Your feedback is invaluable to me, and I look forward to
          creating amazing web experiences together.
        </p> */}

        <br />

        <p className="text-xl mb-20"></p>
      </div>
    </section>
  );
};

export default About;
