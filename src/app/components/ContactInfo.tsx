import React from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex items-center space-x-8">
      <div className="flex flex-col justify-center items-center w-10 h-10 md:w-16 md:h-16 bg-[#27272b]">
        <FaPhone className="w-4 h-4 md:w-7 md:h-7" />
      </div>
    </div>
  );
};

export default ContactInfo;
