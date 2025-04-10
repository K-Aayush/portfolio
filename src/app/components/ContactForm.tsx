"use client";

import type React from "react";
import { useState } from "react";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Form status state
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: null,
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      success: false,
      error: null,
    });

    try {
      const response = await fetch("https://formspree.io/f/mkgjkpwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          success: true,
          error: null,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || "Something went wrong");
      }
    } catch (error: any) {
      setStatus({
        submitted: true,
        submitting: false,
        success: false,
        error: error.message,
      });
    }
  };

  return (
    <div className="bg-[#27272b] p-4 sm:p-10 rounded-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-green-400 to-green-300 text-2xl md:text-3xl font-bold">
            Let&apos;s Work Together
          </h1>
          <p className="text-white/60 text-xs md:text-sm">
            Got a project or idea? Let&apos;s work together! Fill out the form
            to connect.
          </p>
        </div>

        {/* Form status messages */}
        {status.submitted && status.success && (
          <div className="bg-green-500/20 text-green-400 p-4 rounded-md">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {status.submitted && status.error && (
          <div className="bg-red-500/20 text-red-400 p-4 rounded-md">
            {status.error}
          </div>
        )}

        {/* input fields */}
        <form onSubmit={handleSubmit} className="block w-full overflow-hidden">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="flex-1 bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-[#1c1b22] text-white placeholder:text-white/60 px-6 py-3 rounded-md outline-none w-full"
              rows={7}
              required
            />
            <button
              type="submit"
              disabled={status.submitting}
              className="px-8 py-3 bg-green-400 text-white hover:bg-green-500 transition-all duration-200 rounded-3xl w-fit disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
