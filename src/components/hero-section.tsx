// components/HeroSection.tsx
import Image from "next/image";
import EmailSubscription from "@/components/emailSubscription";


const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mx-auto px-4 py-16 pt-32 space-y-8 md:space-y-0">
      {/* Hero Text */}
      <div className="flex flex-col items-left text-center md:text-left w-full md:w-4/5 space-y-6 md:py-10 lg:px-[10vw]">
        <h1 className=" font-extrabold mb-4 leading-tight text-[8vw] md:text-[4vw]">
          We Take <br /> Care of <br /> Your Brand
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          We care about our work and we care about our clients.
        </p>
        <div className="w-full md:w-[50vw] lg:w-[30vw]">
          <EmailSubscription buttonText="Let’s Talk" />
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-[80%] md:w[90%] lg:w-[50%]">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="m-auto w-[80%] md:w[80%]"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
