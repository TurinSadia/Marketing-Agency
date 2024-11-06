

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./customeBtn";

const CtaBanner02: React.FC = () => {
  return (
    <section className="bg-white pb-11 md:pb-24">
      <div
        className="bg-brand-dark w-[90%] h-[auto] py-20 px-20 md:px-28 mx-auto bg-cover bg-center bg-no-repeat  rounded-3xl"
        style={{ backgroundImage: "url('/CTA Banner 2.png')" }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-20 lg:space-y-0">
          {/* Column 1: Heading */}
          <div className="text-center lg:text-left ">
            <p className="text-white mb-10  text-[6vw]  mx-auto md:text-[4vw] md:w-3/4  lg:mx-0 lg:text-[3vw] lg:w-1/2 tracking-wide leading-relaxed">
              Start your journey with us now
            </p>

            <div className="">
              <CustomButton text="Start Now" size="large" color="secondary" />
            </div>
          </div>

          {/* Column 2: Paragraph and Button */}
          <div className="flex-1 flex items-center justify-center  text-center md:text-left">
            <Link href="/">
              <Image
                src="/Group 2186.png"
                alt="Logo"
                width={400} // Set the desired width
                height={400} // Set the desired height
                className="object-contain w-full md:w-4/5 h-auto m-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner02;
