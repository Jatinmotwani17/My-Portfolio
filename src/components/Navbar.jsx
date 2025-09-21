import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className="text-white text-[20px] sm:text-[24px] font-bold cursor-pointer flex ">
            Jatin Motwani&nbsp;
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-6 md:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] md:text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="p-2 rounded focus:outline-none"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-8 h-8 object-contain"
            />
          </button>
         

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } flex-col p-6 black-gradient absolute top-16 left-0 w-full min-h-[180px] z-10 rounded-b-xl shadow-lg`}
          >
            <ul className="list-none flex flex-col gap-6">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[18px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;