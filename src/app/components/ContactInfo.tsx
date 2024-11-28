import React from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Contacts } from "../constant/constant";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center space-x-8">
        <div className="flex flex-col justify-center items-center w-10 h-10 md:w-16 md:h-16 bg-[#27272b]">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-green-400" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs md:text-sm text-white/60">Phone</span>
          <h3 className="text-xl md:text-2xl font-bold">{Contacts.phone}</h3>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="flex flex-col justify-center items-center w-10 h-10 md:w-16 md:h-16 bg-[#27272b]">
          <MdOutlineEmail className="w-4 h-4 md:w-7 md:h-7 text-green-400" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs md:text-sm text-white/60">Email</span>
          <h3 className="text-xl md:text-2xl font-bold">{Contacts.email}</h3>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="flex flex-col justify-center items-center w-10 h-10 md:w-16 md:h-16 bg-[#27272b]">
          <FaLocationDot className="w-4 h-4 md:w-7 md:h-7 text-green-400" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs md:text-sm text-white/60">Address</span>
          <h3 className="text-xl md:text-2xl font-bold">{Contacts.address}</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
