import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      }, 200);
    } else {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    }
    setIsOpen(false);
  };
  const sectionLinks = [
    { name: "HOME", section: "home" },
    { name: "ABOUT", section: "about" },
    { name: "SERVICES", section: "services" },
    { name: "PROJECTS", section: "project" },
  ];
  return (
    <nav className="">
      {" "}
      <div className="max-w-screen px-4 sm:px-6 lg:px-5 py-3 flex justify-between fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800 items-center">
        {" "}
        {/* Logo */}{" "}
        <div className="flex items-center gap-3">
          {" "}
          <img
            src="./logo.png"
            alt="logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
          />{" "}
          <span className="text-white text-xl sm:text-2xl font-bold">
            {" "}
            Hanzala{" "}
          </span>{" "}
        </div>{" "}
        {/* Desktop Menu */}{" "}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10  text-white font-medium">
          {" "}
          {sectionLinks.map((link) => (
            <li key={link.name}>
              {" "}
              <button
                onClick={() => handleScroll(link.section)}
                className="hover:text-amber-200 transition-colors duration-200"
              >
                {" "}
                {link.name}{" "}
              </button>{" "}
            </li>
          ))}{" "}
          <li>
            {" "}
            <Link
              to="/contact"
              className="hover:text-amber-200 transition-colors duration-200"
            >
              {" "}
              CONTACT{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
        {/* CTA Button */}{" "}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-amber-200 text-black px-4 sm:px-6 py-2 rounded-md font-semibold hover:bg-amber-300 transition text-sm sm:text-base"
        >
          {" "}
          Let’s Talk →{" "}
        </Link>{" "}
        {/* Mobile Menu Toggle */}{" "}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >

          {isOpen ? <X size={28} /> : <Menu size={28} />}{" "}
        </button>{" "}
      </div>{" "}
      {/* Mobile Menu */}{" "}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 py-10 space-y-4 animate-slideDown">
          {" "}
          {sectionLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.section)}
              className="block w-full text-left text-lg hover:text-amber-200 transition-colors"
            >
              {" "}
              {link.name}{" "}
            </button>
          ))}{" "}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-amber-200 transition-colors"
          >
            {" "}
            CONTACT{" "}
          </Link>{" "}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-amber-200 text-black px-6 py-3 rounded-md font-semibold text-center hover:bg-amber-300 transition"
          >
            {" "}
            Let’s Talk →{" "}
          </Link>{" "}
        </div>
      )}{" "}
    </nav>
  );
};
export default Navbar;
