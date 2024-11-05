// src/components/Footer.tsx

import React from "react";
import CustomButton from "./customeBtn";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa"; // Import social media icons

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-customGray text-black pt-12 items-center"
      id="book-a-call"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 pb-20 ">
        {/* Column 1: Logo, Social Icons, Contact Us Button */}
        <div className="flex flex-col items-center md:items-start justify-center m-auto">
          <div className="text-2xl font-bold mb-4">
            {" "}
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={170} // Set the desired width
                  height={170} // Set the desired height
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="flex space-x-14 my-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-brand-default hover:text-gray-400 transition"
                size={24}
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-brand-default hover:text-gray-400 transition"
                size={24}
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="text-brand-default hover:text-gray-400 transition"
                size={24}
              />
            </Link>
          </div>

          <Link href="/contact" className="pt-10">
            <CustomButton text="Contact Us" size="large" color="secondary" />
          </Link>
        </div>

        {/* Column 2: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 m-auto pt-10 md:pt-0">
          <div>
            <ul className="space-y-4">
              <li>
                <Link href="/link1" className="hover:underline">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/link2" className="hover:underline">
                  Advertise With Us
                </Link>
              </li>
              <li>
                <Link href="/link3" className="hover:underline">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/link4" className="hover:underline">
                  Business Advices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <Link href="/link1" className="hover:underline">
                  Private Coaching
                </Link>
              </li>
              <li>
                <Link href="/link2" className="hover:underline">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/link3" className="hover:underline">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link href="/link4" className="hover:underline">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <Link href="/link1" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/link2" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/link3" className="hover:underline">
                  Report a Bug
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black flex flex-col md:flex-row justify-between items-center border-t border-gray-700 p-8">
        <div className="text-xs md:text-sm  text-white text-center">
          &copy; {new Date().getFullYear()} © 2022 Embrace, Inc. - All Rights
          Reserved
        </div>
        <div className="text-xs md:text-sm flex flex-col md:flex-row justify-around items-center space-y-2 md:space-y-0 mt-4 md:mt-0  text-white">
          <div className="px-3">
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
          <div className="px-3">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
