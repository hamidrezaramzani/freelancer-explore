export interface HistorySearchItemProps {
    title: string;
    time: number;
}
class HistorySearch {
    private static storeName = "freelanceexplore-history-searches";

    getAll() {
        const previousSearchesStringify = localStorage.getItem(HistorySearch.storeName);
        let previousSearchesJSON: HistorySearchItemProps[] = [];
        if (previousSearchesStringify) {
            previousSearchesJSON = JSON.parse(previousSearchesStringify);
        }

        return previousSearchesJSON.sort((a, b) => {
            if (Number(a.time) > Number(b.time)) {
                return -1;
            }
            if (Number(a.time) < Number(b.time)) {
                return 1;
            }
            return 0;
        });
    }
    private checkIfKeywordAlreadySaved(keyword: string) {

        const previousSearches = this.getAll();
        let isAlreadySaved = false;
        previousSearches.forEach((historySearchItem: HistorySearchItemProps) => {
            if (historySearchItem.title === keyword) {
                isAlreadySaved = true;
            }
        });

        return isAlreadySaved;
    }

    save(keyword: string) {
        if (!this.checkIfKeywordAlreadySaved(keyword)) {
            if (!localStorage.getItem(HistorySearch.storeName)) {
                localStorage.setItem(HistorySearch.storeName, JSON.stringify([{ title: keyword, time: Date.now() }]));
            } else {
                const all: HistorySearchItemProps[] = this.getAll();
                all.push({ title: keyword, time: Date.now() });
                localStorage.setItem(HistorySearch.storeName, JSON.stringify(all));
            }
        }
    }


    update(keyword: string) {
        if (this.checkIfKeywordAlreadySaved(keyword)) {
            let historySearches: HistorySearchItemProps[] = this.getAll();
            historySearches = historySearches.map((item: HistorySearchItemProps) => {
                if (item.title === keyword) {
                    item.time = Date.now();
                }
                return item;
            });

            localStorage.setItem(HistorySearch.storeName, JSON.stringify(historySearches));
        }
    }

    remove(keyword: string) {
        let historySearches: HistorySearchItemProps[] = this.getAll();
        historySearches = historySearches.filter((item) => item.title !== keyword);
        localStorage.setItem(HistorySearch.storeName, JSON.stringify(historySearches));
    }
}

export default HistorySearch;
