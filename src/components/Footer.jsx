import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
<footer className="fixed bottom-0 left-0 w-full py-4 bg-black-100/55 text-white flex justify-center gap-6 z-50">      <a
        href="https://www.instagram.com/jatin_motwani_07?igsh=cjA0MHlkZjRieHk4&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="mailto:jatinmotwnai17@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/jatin-motwani-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;