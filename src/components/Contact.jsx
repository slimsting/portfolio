import React from "react";

const Contact = () => {
  return (
    <section name="contact" className="w-full h-screen lg:px-24">
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/awngyyqb"
            method="POST"
            className="flex flex-col w-full gap-4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-green-500"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-green-500"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-green-500"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-yellow-500 to-green-500 px-6 py-3 rounded-md my-8 mx-auto flex items-center hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
