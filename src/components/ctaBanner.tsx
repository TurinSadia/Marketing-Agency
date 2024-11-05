// src/components/CtaBanner.tsx

import React from "react";
import CustomButton from "./customeBtn";

const CtaBanner: React.FC = () => {
  return (
    <div id="pricing">
      <section className="bg-white px-5 md:px-12 lg:px-20">
        <div
          className="bg-blue-700 bg-cover bg-center bg-no-repeat py-36 rounded-3xl"
          style={{ backgroundImage: "url('/CTA Banner.png')" }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
            {/* Column 1: Heading */}

            <div className="text-center md:text-left">
              <h1 className="text-[8vw] md:text-[5vw] lg:text-[3vw] font-bold  text-white leading-normal tracking-wide lg:pl-[10vw]">
                Elevate your <br /> brand Today!
              </h1>
            </div>

            {/* Column 2: Paragraph and Button */}
            <div className="text-center md:text-center lg:text-left">
              <p className=" text-white text-wrap tracking-wide mb-16 text-[4vw] px-5 lg:px-0 md:text-[3vw] lg:text-[1.8vw] lg:max-w-screen-md">
                Ready to transform your digital presence? Lets create magic
                together! Book our services now!
              </p>

              <CustomButton text="Book Call" size="large" color="primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaBanner;
