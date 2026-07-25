"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Contacts } from "../constant/constant";
import { itemFadeUp, staggerContainer } from "../lib/motion";

const ContactInfo = () => {
  const items = [
    {
      icon: <FaPhone className="w-4 h-4 md:w-5 md:h-5 text-green-400" />,
      label: "Phone",
      value: Contacts.phone,
    },
    {
      icon: <MdOutlineEmail className="w-4 h-4 md:w-5 md:h-5 text-green-400" />,
      label: "Email",
      value: Contacts.email,
    },
    {
      icon: <FaLocationDot className="w-4 h-4 md:w-5 md:h-5 text-green-400" />,
      label: "Address",
      value: Contacts.address,
    },
  ];

  return (
    <motion.ul
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-5"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={itemFadeUp}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="card card-hover flex items-center gap-5 p-5 group list-none"
        >
          <div className="grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-400/10 border border-green-400/20 group-hover:bg-green-400/20 transition-colors duration-300">
            {item.icon}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-white/40 uppercase tracking-wider">
              {item.label}
            </span>
            <h3 className="text-base md:text-lg font-semibold text-white/90">
              {item.value}
            </h3>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ContactInfo;
