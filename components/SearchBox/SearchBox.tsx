import React, { FormEventHandler, useState } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
interface SearchBoxProps {
  onFormSubmit?: () => void;
  searchValue?: string;
}
const SearchBox = ({ onFormSubmit, searchValue }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!keyword.length) {
      toast("کلید واژه نمیتواند خالی باشد", {
        type: "error",
        position: "bottom-left",
      });
      return;
    }

    if (onFormSubmit) {
      onFormSubmit();
    }

    Router.push({
      pathname: "/search",
      query: {
        keyword,
      },
    });
  };

  const handleChangeKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  return (
    <div className="w-full md:w-1/2 dark:bg-slate-700 bg-white rounded-md h-12">
      <form action="" onSubmit={handleSubmit}>
        <div className="w-full flex">
          <div className="w-2/12">
            <button className="w-full cursor-pointer hover:bg-indigo-600 h-12 text-center flex justify-center items-center md:text-md text-sm bg-indigo-500 rounded-md text-white font-yekan-regular">
              جستجو
            </button>
          </div>
          <div className="w-10/12">
            <input
              value={searchValue || keyword}
              onChange={handleChangeKeyword}
              className="w-full rounded-md placeholder:text-slate-300 dark:bg-slate-700 bg-slate-50 h-12 text-center font-yekan-regular outline-none"
              placeholder="کلید واژه"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
