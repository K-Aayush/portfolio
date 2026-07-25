import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-16 bg-[#0e0e11] w-full overflow-hidden">
      <div className="w-[80%] mx-auto">
        <div className="border-t border-white/[0.06]" />
        <div className="flex flex-col items-center justify-center gap-5 mt-8">
          <Link href="#home" className="group">
            <h1 className="sm:font-semibold font-normal text-lg sm:text-2xl tracking-tight">
              Aayush Karki
              <span className="text-2xl text-green-400 group-hover:text-green-300 transition-colors duration-300">
                {" "}
                .
              </span>
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/K-Aayush"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid place-items-center rounded-full border border-white/[0.08] p-2.5 text-white/60 hover:text-green-400 hover:border-green-400/40 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/karkiayush/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center rounded-full border border-white/[0.08] p-2.5 text-white/60 hover:text-green-400 hover:border-green-400/40 transition-all duration-300"
            >
              <FaLinkedin className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:ayushkarkee6@gmail.com"
              aria-label="Email"
              className="grid place-items-center rounded-full border border-white/[0.08] p-2.5 text-white/60 hover:text-green-400 hover:border-green-400/40 transition-all duration-300"
            >
              <MdOutlineEmail className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-white/40 tracking-wide">
            © {new Date().getFullYear()} Aayush Karki. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
