import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-[#1c1b22] scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto items-center gap-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="lg:mx-auto">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
