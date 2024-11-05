// components/ScrollToTopButton.tsx

"use client"; // Required for Next.js 13+ with the App Router

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Optional: Install via `npm install react-icons`

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-16 right-8 bg-brand-default text-white p-3 rounded-full shadow-lg hover:bg-brand-hover transition-colors duration-300 focus:outline-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
