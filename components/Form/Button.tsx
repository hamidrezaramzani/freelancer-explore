import React, { ReactNode } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
interface ButtonProps {
  children: ReactNode;
  isLoading: boolean;
}
const Button = ({ children, isLoading }: ButtonProps) => {
  return (
    <button
      className="w-full md:w-1/2 p-2 font-yekan-regular text-indigo-500 disabled:text-indigo-300 disabled:cursor-wait transition-all hover:bg-indigo-500
     hover:text-white border rounded-md border-transparent border-indigo-500 flex gap-2 items-center justify-center"
     disabled={isLoading}
    >
      {children}
      {isLoading ? (
        <>
          <CgSpinnerTwo className="animate-spin" />
        </>
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;
