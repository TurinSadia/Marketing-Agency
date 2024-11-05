"use client";

import React, { useState } from "react";
import EmailSubscription from "@/components/emailSubscription";
import Link from "next/link";

const Help: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "How can I reset my password?",
      answer: "To reset your password, go to...",
    },
    {
      question: "Where can I view my invoices?",
      answer: "Your invoices can be found...",
    },
    {
      question: "How do I update my profile?",
      answer: "To update your profile, navigate to...",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-14 pb-28 px-6 md:px-20 bg-white">
      <div className="mx-auto flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-36">
        {/* Column 1: Accordion */}
        <div className=" w-full">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-t border-gray-300 overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50 transition"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-semibold text-lg">{item.question}</h3>
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-bold bg-brand-default text-white rounded-full">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-4 text-gray-600 bg-gray-50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          <hr className="border-t border-gray-300" />
        </div>

        {/* Column 2: Header, Paragraph, and Link */}
        <div className="w-full text-center space-y-5 lg:text-left ">
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-800 mb-4">
            How we can help you?
          </h2>
          <p className="text-gray-600  text-lg lg:w-[30vw] ">
            Follow our newsletter. We will regularly update you on our latest
            projects and availability.
          </p>
          <div className="w-full md:w-4/5">
            <EmailSubscription buttonText="Let’s Talk" />
          </div>
          <div>
          <Link
            href="/faq"
            className="text-blue-600 font-semibold hover:underline"
          >
            More FAQ →
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
