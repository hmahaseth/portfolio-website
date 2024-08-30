"use client";
import React, { useState } from "react";
import Thanks from "./Thanks";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section
      id="contacts"
      className="grid md:grid-cols-2 gap-8 my-12 py-24 px-6 md:px-12"
    >
      {submitted ? (
        <Thanks />
      ) : (
        <>
          <div className="flex flex-col justify-center">
            <h5 className="text-3xl font-bold text-white mb-4">
              Let's Connect
            </h5>
            <p className="text-gray-300 mb-8 max-w-md">
              I'm currently looking for new opportunities. Feel free to reach
              out to me!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <form
              className="w-full max-w-lg bg-black bg-opacity-70 p-8 rounded-lg shadow-glow group transition-shadow duration-300 hover:shadow-glowHover"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false"></input>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Contact Me
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg shadow-glowInput transition-shadow duration-300 group-hover:shadow-glowInputHover focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg shadow-glowInput transition-shadow duration-300 group-hover:shadow-glowInputHover focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 border border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg shadow-glowInput transition-shadow duration-300 group-hover:shadow-glowInputHover focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-blue-500 transition duration-300 shadow-glowHover"
              >
                Send
              </button>
              <input
                type="hidden"
                name="_next"
                value="https://himanshumahaseth.com.np"
              ></input>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default ContactSection;
