import React, { InputHTMLAttributes } from "react";
import ErrorMeessage from "./ErrorMessage";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col w-full md:w-1/2">
      <label htmlFor="" className="py-2 font-yekan-regular">
        {label}
      </label>
      <input
        className="h-10 rounded-md bg-slate-300 dark:bg-slate-800 outline-none px-3 font-yekan-regular text-sm text-slate-900 dark:text-slate-300"
        {...props}
      />
      <ErrorMeessage message={error} />
    </div>
  );
};

export default Input;
