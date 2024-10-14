import React from "react";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...props }: props) => {
  return (
    <div>
      <button
        className="bg-purple-100 text-white font-medium rounded-3xl h-[50px] flex items-center justify-center w-full leading-6 my-[10px]"
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
