"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

// Define the function with the explicit type for the 'href' parameter
const handleSmoothScroll = (href: string) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md md:shadow-none fixed w-full z-10 py-0 md:py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between pr-6 md:pr-0 items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain w-5/6 md:w-fit"
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleSmoothScroll("#how-it-works"); // Smooth scroll to section
              }}
            >
              How it Works
            </a>
            <a
              href="#our-work"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#our-work");
              }}
            >
              Our Work
            </a>
            <a
              href="#pricing"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#pricing");
              }}
            >
              Pricing
            </a>
            <a
              href="#about-us"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#about-us");
              }}
            >
              About Us
            </a>
          </div>
          {/* Book a Call Button */}
          <div className="hidden md:block">
            <Link
              href="#book-a-call"
              className="bg-brand-default text-white px-6 py-4 rounded-full hover:bg-indigo-700"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#book-a-call");
              }}
            >
              Book a Call
            </Link>
          </div>
          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg h-[100vh]">
          <div className="flex flex-col items-center space-y-10 py-4">
            <a
              href="#how-it-works"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#how-it-works");
                toggleMenu(); // Close the menu after clicking
              }}
            >
              How it Works
            </a>
            <a
              href="#our-work"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#our-work");
                toggleMenu();
              }}
            >
              Our Work
            </a>
            <a
              href="#pricing"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#pricing");
                toggleMenu();
              }}
            >
              Pricing
            </a>
            <a
              href="#about-us"
              className="text-gray-800 hover:text-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#about-us");
                toggleMenu();
              }}
            >
              About Us
            </a>
            <a
              href="#book-a-call"
              className="bg-brand-default text-white px-6 py-4 rounded-full hover:bg-indigo-700"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("#book-a-call");
                toggleMenu();
              }}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
