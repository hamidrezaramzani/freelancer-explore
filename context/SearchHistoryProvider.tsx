import HistorySearch, { HistorySearchItemProps } from "@/helpers/historySearch";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


interface SearchHistoryContextProps {
    histories: HistorySearchItemProps[];
    setHistories?: Dispatch<SetStateAction<HistorySearchItemProps[]>>;
}
export const SearchHistoryContext = createContext<SearchHistoryContextProps>({
    histories: []
});
const SearchHistoryProvider = ({children}: {children: ReactNode}) => {
    const historySearch = new HistorySearch();
    
    const [histories, setHistories] = useState(typeof window !== "undefined" ? historySearch.getAll() : []);
    return <SearchHistoryContext.Provider value={{ histories, setHistories}}>{children}</SearchHistoryContext.Provider>;
};

export default SearchHistoryProvider;