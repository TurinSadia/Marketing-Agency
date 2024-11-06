// components/WorkSection.tsx
import Image from "next/image";

const WorkSection = () => {
  return (
    <section className="py-24 pb-24 md:pb-32 md:px-14 bg-customGray">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-20">
          Companies We Work With
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-y-16 sm:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {/* Row 1 */}
          <div>
            <Image
              src="/spotify.png"
              alt="Spotify"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
            />
          </div>
          <div>
            <Image
              src="/google.png"
              alt="Google"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
              data-aos="zoom-in-up"
            />
          </div>
          <div>
            <Image
              src="/uber.png"
              alt="Uber"
              width={100}
              height={100}
              className="w-16 md:w-20 lg:w-24 h-auto object-contain" // Increased size for Uber
            />
          </div>
          <div>
            <Image
              src="/microsoft.png"
              alt="Microsoft"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
              data-aos="zoom-in-up"
            />
          </div>
          <div>
            <Image
              src="/shopify.png"
              alt="Shopify"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
            />
          </div>

          {/* Row 2 */}
          <div>
            <Image
              src="/evernote.png"
              alt="Evernote"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
            />
          </div>
          <div>
            <Image
              src="/adobe.png"
              alt="Adobe"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain" // Increased size for Adobe
              data-aos="zoom-in-up"
            />
          </div>
          <div>
            <Image
              src="/paypal.png"
              alt="PayPal"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
            />
          </div>
          <div>
            <Image
              src="/amazon.png"
              alt="Amazon"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32  p-2 h-auto object-contain"
              data-aos="zoom-in-up"
            />
          </div>
          <div>
            <Image
              src="/asana.png"
              alt="Asana"
              width={100}
              height={100}
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
