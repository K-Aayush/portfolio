"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { fadeIn, staggerContainer, viewportConfig } from "../lib/motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0e0e11] scroll-mt-28 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-green-400/[0.05] blur-[140px]" />
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto items-center gap-12 relative"
      >
        <motion.div variants={fadeIn("right", 40)}>
          <ContactForm />
        </motion.div>
        <motion.div variants={fadeIn("left", 40)} className="lg:mx-auto w-full">
          <ContactInfo />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
