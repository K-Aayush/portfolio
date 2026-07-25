"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const sectionIds = navLinks.map((nav) => nav.url.replace("#", ""));

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [sidebarActive, setSidebarActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSidebarActive(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveSection(id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed h-[12vh] z-[10] w-full transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between mx-auto w-[95%] sm:w-[90%] lg:w-[80%]">
        {/* Logo */}
        <Link href="#home" className="group">
          <h1 className="sm:font-semibold font-normal text-lg sm:text-2xl tracking-tight">
            Aayush Karki
            <span className="text-2xl text-green-400 group-hover:text-green-300 transition-colors duration-300">
              {" "}
              .
            </span>
          </h1>
        </Link>

        <div className="flex items-center space-x-10">
          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((nav) => {
              const isActive = activeSection === nav.url.replace("#", "");
              return (
                <Link key={nav.id} href={nav.url} className="relative">
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {nav.label}
                  </p>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-green-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-command-palette"))
              }
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-xs text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Open command palette"
            >
              <FiSearch className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] text-white/40">
                ⌘K
              </kbd>
            </button>
            <button className="px-5 py-2 rounded-full bg-green-400 text-black text-sm font-semibold hover:bg-green-300 transition-all duration-300 hover:shadow-[0_0_24px_-6px_rgba(74,222,128,0.6)]">
              <Link href="#contact">Hire Me</Link>
            </button>

            {/* Burger */}
            <button
              aria-label="Open menu"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden"
            >
              <HiBars3BottomRight className="w-7 h-7 cursor-pointer text-white/80 hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm w-full h-screen z-[50] transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[60%] h-full glass z-[100] p-6 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[20px]">
            Aayush Karki <span className="text-2xl text-green-400">.</span>
          </h1>
          <button
            aria-label="Close menu"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoMdClose className="w-7 h-7 cursor-pointer text-white/80 hover:text-white transition-colors" />
          </button>
        </div>

        <div className="flex flex-col justify-center items-start space-y-6 py-10">
          {navLinks.map((nav) => {
            const id = nav.url.replace("#", "");
            const isActive = sidebarActive === id;
            return (
              <Link key={nav.id} href={nav.url}>
                <p
                  onClick={() => {
                    setSidebarActive(id);
                    setIsSidebarOpen(false);
                  }}
                  className={`text-[18px] border-b pb-2 transition-colors duration-300 ${
                    isActive
                      ? "text-green-400 border-green-400"
                      : "text-white/70 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  {nav.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
