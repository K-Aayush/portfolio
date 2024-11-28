import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#27272b] p-4 sm:p-10 rounded-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-green-400 to-green-300 text-2xl md:text-3xl font-bold">
            Let's Work Together
          </h1>
          <p className="text-white/60 text-xs md:text-sm">
            Got a project or idea? Let's work together! Fill out the form to
            connect.
          </p>
        </div>

        {/* input fields */}
        <div className="block w-full overflow-hidden">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
              />
            </div>
            <textarea
              placeholder="message"
              className="bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
              rows={7}
            />
            <button className="px-8 py-3 bg-green-400 text-white hover:bg-green-500 transition-all duration-200 rounded-3xl w-fit">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
