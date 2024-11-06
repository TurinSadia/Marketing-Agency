// src/components/OurWork.tsx

import Image from "next/image";
import CustomButton from "./customeBtn";



const OurWork = () => {


  return (
    <section
      className="px-4 py-20 lg:py-40 bg-white"
      id="our-work"
    >
      <div className="container mx-auto text-center max-w-3xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Our Work
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-4 mb-10">
          A glimpse of our portfolio
        </p>
      </div>

      <div className="lg:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            id: 1,
            src: "/Rectangle 161.png",
            alt: "Project 1",
            name: "Apple",
          },
          {
            id: 2,
            src: "/Rectangle 161 (1).png",
            alt: "Project 2",
            name: "Coca-cola",
          },
          {
            id: 3,
            src: "/Rectangle 161 (2).png",
            alt: "Project 3",
            name: "Nike",
          },
        ].map((work) => (
          <div key={work.id} className="flex flex-col items-center">
            <Image
              src={work.src}
              alt={work.alt}
              width={400}
              height={400}
              className="rounded-md object-contain"
              priority
            />
            <p className="mt-4 text-lg font-semibold text-gray-700">
              {work.name}
            </p>{" "}
            {/* Project name below image */}
          </div>
        ))}
      </div>

      <div className="pt-16 text-center">
        <CustomButton text="See More" size="large" color="secondary" />
      </div>
    </section>
  );
};

export default OurWork;
