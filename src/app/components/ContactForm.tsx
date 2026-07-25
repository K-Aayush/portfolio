"use client";

import type React from "react";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: null as string | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
        headers: { "Content-Type": "application/json" },
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

  const inputClass =
    "flex-1 bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-white/30 px-5 py-3 rounded-xl outline-none w-full transition-all duration-300 focus:border-green-400/50 focus:bg-white/[0.05]";

  return (
    <div className="card p-6 sm:p-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-green-400 text-xs uppercase tracking-[0.3em]">
            Contact
          </span>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-400 text-2xl md:text-3xl font-bold tracking-tight">
            Let&apos;s Work Together
          </h1>
          <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-md">
            Got a project or idea? Let&apos;s work together! Fill out the form
            to connect.
          </p>
        </div>

        {status.submitted && status.success && (
          <div className="bg-green-400/10 border border-green-400/20 text-green-300 p-4 rounded-xl text-sm">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {status.submitted && status.error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
            {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="block w-full overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className={inputClass}
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className={inputClass}
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
                className={inputClass}
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className={`${inputClass} resize-none`}
              rows={6}
              required
            />
            <button
              type="submit"
              disabled={status.submitting}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black hover:bg-green-300 transition-all duration-300 rounded-full w-fit font-semibold text-sm disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_30px_-6px_rgba(74,222,128,0.6)]"
            >
              {status.submitting ? "Sending..." : "Send Message"}
              {!status.submitting && (
                <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
