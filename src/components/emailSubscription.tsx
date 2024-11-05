// components/EmailSubscription.tsx

interface EmailSubscriptionProps {
  buttonText: string; // Prop to customize the button text
  className?: string; // Optional className prop for custom styling
}

const EmailSubscription: React.FC<EmailSubscriptionProps> = ({
  buttonText,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white ${className}`}
    >
      <form className="flex flex-col md:flex-row w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-3 mb-2 bg-gray-100 md:mb-0 md:mr-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
          required
        />
        <button
          type="submit"
          className="bg-brand-default text-white px-6 py-3 rounded-full hover:bg-brand-dark transition duration-300"
        >
          {buttonText} {/* Use the prop for button text */}
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;
