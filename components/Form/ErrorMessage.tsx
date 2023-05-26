import React from "react";

interface ErrorMessageProps {
  message?: string;
}
const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return message ? (
    <div className="w-full mt-2">
      <p className="w-full text-right font-yekan-regular text-red-600 text-sm">
        {message}
      </p>
    </div>
  ) : (
    <></>
  );
};

export default ErrorMessage;
