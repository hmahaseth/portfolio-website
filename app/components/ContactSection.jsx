"use client";
import React, { useState } from "react";

// FIXED: Added the 'onGlobalSubmit' prop destructuring to sync with app/page.js state machine logic
const ContactSection = ({ onGlobalSubmit }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/contact@himanshumahaseth.com.np",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // FIXED: Invokes the global full-screen state layout layer switch instead of changing a local toggle hook
        if (onGlobalSubmit) {
          onGlobalSubmit();
        }
      } else {
        alert("There was an issue with your submission. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacts"
      className="grid grid-cols-1 md:grid-cols-12 gap-10 my-12 py-16 px-4 sm:px-6 md:px-12 items-center max-w-screen-2xl mx-auto"
    >
      {/* Left Column: Context Text Block */}
      <div className="md:col-span-5 flex flex-col justify-center text-center md:text-left">
        <h5
          data-aos="zoom-out-right"
          className="text-white mb-4 text-3xl sm:text-4xl font-black tracking-tighter uppercase font-mono"
        >
          Let's Connect
        </h5>
        <p
          data-aos="zoom-out-right"
          className="text-zinc-400 text-sm sm:text-base leading-relaxed tracking-wide font-sans max-w-md mx-auto md:mx-0 text-justify"
        >
          I'm currently looking for new opportunities. Feel free to reach
          out to me! Whether you have a question, want to discuss a new web project, 
          or need high-end photography media production, my inbox is always open.
        </p>
      </div>

      {/* Right Column: Premium iOS Glass Form Card */}
      <div className="md:col-span-7 flex justify-center items-center w-full">
        <form
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          onSubmit={handleSubmit}
          className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-10 rounded-3xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)] group transition-all duration-300 hover:border-white/[0.15]"
        >
          <input type="hidden" name="_captcha" value="false" />
          
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 font-mono tracking-tight uppercase">
            Contact Me
          </h2>
          
          {/* Name Input Box */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-3.5 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-zinc-500 font-sans text-sm tracking-wide transition-all duration-300 focus:outline-none focus:bg-white/[0.04] focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input Box */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3.5 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-zinc-500 font-sans text-sm tracking-wide transition-all duration-300 focus:outline-none focus:bg-white/[0.04] focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              placeholder="name@example.com"
            />
          </div>

          {/* Message Textarea Box */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-sans"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3.5 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-zinc-500 font-sans text-sm tracking-wide transition-all duration-300 focus:outline-none focus:bg-white/[0.04] focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)] resize-none"
              rows="4"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Premium Silver Solid Metal Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-b from-white via-zinc-200 to-zinc-400 hover:from-zinc-100 hover:to-zinc-300 text-black font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
