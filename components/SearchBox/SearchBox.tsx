import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Router, { useRouter } from "next/router";
import SearchHistory from "./SearchHistory/SearchHistory";
import HistorySearch from "@/helpers/historySearch";
import { SearchHistoryContext } from "@/context/SearchHistoryProvider";
interface SearchBoxProps {
  onFormSubmit?: () => void;
}
const SearchBox = ({ onFormSubmit }: SearchBoxProps) => {
  const router = useRouter();
  const { setHistories } = useContext(SearchHistoryContext);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const { keyword: keywordParam } = router.query;

  const [keyword, setKeyword] = useState<string>("");
  useEffect(() => {
    if (keywordParam) {
      setKeyword(String(keywordParam));
    }
  }, [keywordParam]);

  const historySearch = new HistorySearch();
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

    historySearch.save(keyword);
    setHistories!(historySearch.getAll());
    setShowSearchHistory(false);
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
        <div className="w-full flex relative">
          <div className="w-4/12 md:w-2/12">
            <button className="w-full cursor-pointer hover:bg-indigo-600 h-12 text-center flex justify-center items-center md:text-md text-sm bg-indigo-500 rounded-md text-white font-yekan-regular">
              جستجو
            </button>
          </div>
          <div className="w-8/12 md:w-10/12">
            <input
              value={keyword}
              onChange={handleChangeKeyword}
              className="w-full rounded-md placeholder:text-slate-300 dark:bg-slate-700 bg-slate-50 h-12 text-center font-yekan-regular outline-none"
              placeholder="کلید واژه"
              onFocus={() => setShowSearchHistory(true)}
            />
            <SearchHistory
              keyword={keyword}
              show={showSearchHistory}
              setShow={setShowSearchHistory}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
