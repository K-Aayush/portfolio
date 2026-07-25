import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0e0e11] scroll-mt-28 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-green-400/[0.05] blur-[140px]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto items-center gap-12 relative">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="lg:mx-auto w-full"
        >
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
