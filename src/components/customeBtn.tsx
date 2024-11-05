

import React from "react";

interface ButtonProps {
  text: string;
  size?:  "medium" | "large";
  color?: "primary" | "secondary" ;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  size = "medium",
  color = "primary",
  onClick,
}) => {
  // Tailwind CSS classes for different sizes
  const sizeClasses = {
    medium: "px-4 py-2 text-base",
    large: "px-12 py-3 text-lg",
  };

  // Tailwind CSS classes for different colors
  const colorClasses = {
    primary:
      "bg-white text-brand-default hover:bg-blue-700 hover:text-white hover:border hover:border-solid hover:border-white",
    secondary:
      "bg-brand-default text-white hover:bg-white hover:text-brand-default hover:border hover:border-solid hover:border-brand-default",
    
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-full  transition duration-300 ${sizeClasses[size]} ${colorClasses[color]}`}
    >
      {text}
    </button>

    
  );
};

export default CustomButton;
