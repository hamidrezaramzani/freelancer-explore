import { SearchHistoryContext } from "@/context/SearchHistoryProvider";
import HistorySearch, { HistorySearchItemProps } from "@/helpers/historySearch";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef } from "react";
import { CiSquareRemove } from "react-icons/ci";
interface SearchHistoryProps {
  show: boolean;
  keyword: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchHistory = ({ show, setShow }: SearchHistoryProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const historySearch = new HistorySearch();
  const router = useRouter();
  const {histories, setHistories} = useContext(SearchHistoryContext);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShow]);


  const handleClick = (keyword: string) => {
    historySearch.update(keyword);
    setHistories!(historySearch.getAll());
    router.push(`/search?keyword=${keyword}`);
  };

  const handleRemoveHistorySearch = (keyword: string) => {
    historySearch.remove(keyword);
    setHistories!(historySearch.getAll());
  };
  const renderHistorySearchItems = () => {
    return histories.length ? (
      histories.map((item: HistorySearchItemProps) => (
        <div
          className="w-full flex items-center justify-around py-3 hover:bg-indigo-300 dark:hover:bg-slate-600 px-3 rounded-md transition-all"
          key={item.title}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.title);
            }}
            className="w-11/12  cursor-pointer font-yekan-regular"
          >
            <span>{item.title}</span>
          </a>
          <button
            title="حذف"
            type="button"
            className="w-1/12 flex justify-end"
            onClick={() => handleRemoveHistorySearch(item.title)}
          >
            <CiSquareRemove fontSize={30} />
          </button>
        </div>
      ))
    ) : (
      <div className="w-full py-3 flex justify-center items-center">
        <p className="font-yekan-regular text-sm dark:text-white text-slate-800">
          قبلا جستجویی انجام نشده است
        </p>
      </div>
    );
  };
  return show ? (
    <div
      className="w-full z-50 bg-indigo-200 drop-shadow-lg dark:bg-slate-500 rounded-md top-44 p-2 left-0"
      ref={ref}
    >
      {renderHistorySearchItems()}
    </div>
  ) : (
    <></>
  );
};

export default SearchHistory;
