// src/components/Team.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./customeBtn";

const Team: React.FC = () => {
  return (
    <section className="py-20 lg:pt-40 px-10 sm:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between md:space-y-5 md:space-x-5 sm:pl-5">
        {/* Column 1: Images */}
        <div className="w-full pb-16 flex-1 grid grid-cols-3  lg:grid-cols-3 gap-4">
          {/* Row 1 */}
          <Link href={`/Rectangle 185.png`}>
            <Image
              src="/Rectangle 185.png"
              alt="Team Member 1"
              width={300}
              height={300}
              className=" rounded-lg transform transition hover:scale-105"
              layout="responsive"
            />
          </Link>
          <Link href={`/Rectangle 184.png`}>
            <Image
              src="/Rectangle 184.png"
              alt="Team Member 2"
              width={300}
              height={300}
              className=" rounded-lg transform transition hover:scale-105"
              layout="responsive"
            />
          </Link>
          <Link href={`/Rectangle 181.png`}>
            <Image
              src="/Rectangle 181.png"
              alt="Team Member 3"
              width={300}
              height={300}
              className=" rounded-lg transform transition hover:scale-105"
              layout="responsive"
            />
          </Link>

          {/* Row 2 */}
          <Link href={`/Rectangle 182.png`}>
            <Image
              src="/Rectangle 182.png"
              alt="Team Member 4"
              width={300}
              height={300}
              className=" rounded-lg transform transition hover:scale-105"
              layout="responsive"
            />
          </Link>
          <Link href={`/Rectangle 183.png`}>
            <Image
              src="/Rectangle 183.png"
              alt="Team Member 5"
              width={300}
              height={300}
              className="rounded-lg transform transition hover:scale-105"
              layout="responsive"
            />
          </Link>
          <Link href={`/Rectangle 186.png`}>
            <Image
              src="/Rectangle 186.png"
              alt="Team Member 6"
              width={300}
              height={300}
              className=" rounded-lg transform transition hover:scale-105"
              layout="responsive"
            />
          </Link>
        </div>

        {/* Column 2: Text and Button */}
        <div className="flex-1 text-center md:text-left w-full md:w-1/2 lg:w-1/3 lg:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-loose">
            Discover the brilliance behind Embrace. Our team blends innovation
            and artistry to craft digital wonders that captivate.
          </p>

          <div className="pt-6 lg:pt-12">
            <CustomButton text="Learn More" size="large" color="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
