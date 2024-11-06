// src/components/CommitmentsSection.tsx

import React from "react";
import Link from "next/link";

const CommitmentsSection = () => {
  return (
    <section className="px-4 py-20 lg:py-40 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* First Column: Statistics */}
        <div className="grid grid-cols-2 gap-8 lg:w-1/2 lg:pl-20 text-center lg:text-left">
          {/* Row 1 */}
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-customBlack">
              245%
            </p>
            <p
              className="text-sm sm:text-base text-gray-600 mt-2"
              data-aos="fade-right"
            >
              More revenues for the brand
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-customBlack">
              130K+
            </p>
            <p
              className="text-sm sm:text-base text-gray-600 mt-2"
              data-aos="fade-right"
            >
              Audiences reached
            </p>
          </div>

          {/* Row 2 */}
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-customBlack">
              50+
            </p>
            <p
              className="text-sm sm:text-base text-gray-600 mt-2"
              data-aos="fade-right"
            >
              Brands trust us
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-customBlack">
              24+
            </p>
            <p
              className="text-sm sm:text-base text-gray-600 mt-2"
              data-aos="fade-right"
            >
              Worldwide awards
            </p>
          </div>
        </div>

        {/* Second Column: Text and Button */}
        <div className="lg:w-1/2 lg:pl-8 text-center lg:text-left ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl  text-black font-semibold mb-4">
            Commitments
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <Link href="/learn-more">
            {/* No <a> tag used here */}
            <span className="inline-block py-2 sm:py-3 text-customTextBlue  transition duration-300">
              Learn More →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
