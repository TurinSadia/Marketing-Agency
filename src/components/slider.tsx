"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Card {
  image: string;
  name: string;
  designation: string;
  description: string;
}

const ClientSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const cards: Card[] = [
    {
      image: "/Ellipse 80.png",
      name: "Amelia Joseph",
      designation: "Chief Manager",
      description:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
    {
      image: "/Ellipse 80 (1).png",
      name: "Jacob Joshua",
      designation: "Chief Manager",
      description:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
    {
      image: "/Ellipse 80 (2).png",
      name: "Jacob Joshua",
      designation: "Chief Manager",
      description:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
    {
      image: "/Ellipse 80 (1).png",
      name: "Alice Johnson",
      designation: "CFO, Company C",
      description:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div id="about-us">
      <section className="py-10 px-5 md:px-16 lg:px-20 mb-10 md:mb-40 bg-white">
        <div className="flex items-center justify-between mb-10 px-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            What Our Client Said About Us
          </h2>
          <div className="flex">
            <button
              className="p-2 bg-gray-200 hover:text-white hover:bg-brand-default rounded-full w-10 h-10 focus:bg-brand-default"
              onClick={() => {
                const prevButton = document.querySelector(
                  ".slick-prev"
                ) as HTMLElement;
                prevButton?.click();
              }}
            >
              &#8592;
            </button>
            <button
              className="p-2 bg-gray-200 hover:text-white hover:bg-brand-default rounded-full w-10 h-10 focus:outline-none ml-2"
              onClick={() => {
                const nextButton = document.querySelector(
                  ".slick-next"
                ) as HTMLElement;
                nextButton?.click();
              }}
            >
              &#8594;
            </button>
          </div>
        </div>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-4">
              {" "}
              {/* Adjust gap with padding here */}
              <div
                className={`p-5 rounded-3xl shadow-lg ${
                  index === activeSlide
                    ? "bg-brand-default text-white"
                    : "bg-customGray text-gray-700"
                }`}
              >
                <div className="rounded-lg overflow-hidden p-5 lg:p-12">
                  <div className="flex items-center mb-2">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{card.name}</h3>
                      <p className="text-sm ">{card.designation}</p>
                    </div>
                  </div>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default ClientSlider;
