import React from "react";
import Image from "next/image";

const HowItWorkSection = () => {
  return (
    <div id="how-it-works">
      <section className="px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Column: Heading, Paragraph, and Image */}
          <div className="space-y-7 flex flex-col items-center lg:px-16 lg:items-start text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
              How It Works
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              We believe that the best way to create successful marketing
              campaigns is to work closely with our clients to understand their
              goals and challenges.
            </p>
            <div className="w-full lg:w-[90%]">
              <Image
                src="/Rectangle 160.png"
                alt="How it works illustration"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>
          </div>

          {/* Second Column: Cards */}
          <div className="space-y-6">
            {[
              {
                id: 1,
                img: "/majesticons_dollar-circle.png",
                title: "Discovery",
                desc: "We meet with you to learn about your business, your goals, and your target audience.",
              },
              {
                id: 2,
                img: "/majesticons_dollar-circle (1).png",
                title: "Strategy",
                desc: "We develop a customized marketing strategy that is based on your unique needs and goals.",
              },
              {
                id: 3,
                img: "/majesticons_dollar-circle (2).png",
                title: "Execution",
                desc: "We execute our strategy using the latest digital marketing tools and techniques.",
              },
              {
                id: 4,
                img: "/majesticons_dollar-circle (3).png",
                title: "Measurement",
                desc: "We track the results of our campaigns so that we can make adjustments as needed.",
              },
            ].map((step) => (
              <article
                data-aos="fade-up"
                data-aos-duration="2000"
                key={step.id}
                className="flex flex-col sm:flex-row items-center text-wrap space-y-4 sm:space-y-0 sm:space-x-4 p-4 pt-10 md:pr-28 sm:pb-12 md:pb-0 bg-gray-100 md:bg-white rounded-md"
              >
                <Image
                  src={step.img}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm px-10 sm:px-0 pt-5 sm:pt-0 pb-10 sm:pb-0 sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorkSection;
