/* eslint-disable no-unused-vars */


export interface TagType {
    link: string;
    title: string;
}
export interface ItemType {
    projectTitle: string;
    projectDescription: string;
    projectBudget: string;
    projectLink: string;
    projectTags: { title: string; link: string };
}
export interface InputConfigType {
    address: string;
    keyword: string;
    name: string;
    selectors: {
        container: string;
        item: string;
        title: string;
        description: string;
        budget: (item: Element) => string | undefined;
        link: (item: Element) => string | undefined;
        tags: (item: Element) => TagType[];
    };
}
const configList: any = {
    ponisha: {
        address:
            "https://ponisha.ir/search/projects/keyword-%s/currency-IRR/sort-newest",
        name: "ponisha",
        selectors: {
            container: ".list-unstyled.projects",
            item: ".item",
            tags(item: Element) {
                const tags: any[] = [];
                item
                    .querySelector(".labels")
                    ?.querySelectorAll("a")
                    .forEach((item: Element) => {
                        const tag = {
                            title: item.querySelector("div")?.innerHTML,
                            link: item.getAttribute("href"),
                        };

                        tags.push(tag);
                    });
                return tags;
            },
            title: ".title a h4",
            description: ".desc",
            budget(item: Element) {
                return (
                    item
                        .querySelector(".thumb .budget ")
                        ?.firstElementChild?.getAttribute("amount") || ""
                );
            },
            link: (item: Element) => {
                return item.querySelector(".title a")?.getAttribute("href") || "";
            },
        },
    },
    parscoders: {
        address:
            "https://parscoders.com/project/title/%s",
        name: "parscoders",
        selectors: {
            container: ".tab-pane.active",
            item: ".todo-tasklist-item",
            tags(item: Element) {
                const tags: any[] = [];
                item
                    .querySelector(".btn-group")
                    ?.querySelectorAll("a")
                    .forEach((item: Element) => {
                        const tag = {
                            title: item.innerHTML,
                            link: item.getAttribute("href"),
                        };

                        tags.push(tag);
                    });
                return tags;
            },
            title: ".todo-tasklist-item-title a",
            description: ".todo-tasklist-item-text",
            budget(item: Element) {
                return (
                    Number(item
                        .querySelector(".todo-tasklist-controls")
                        ?.lastElementChild?.innerHTML
                        .replace("حداکثر بودجه:", "").replace("تومان", "").trim().replaceAll(",", "")) * 10 || ""
                );
            },
            link: (item: Element) => {
                return `https://parscoders.com/${item.querySelector(".todo-tasklist-item-title a")?.getAttribute("href")}` || "";
            },
        },
    },
};
export const websites: any = {
    ponisha: () => {
        return configList.ponisha;
    },
    parscoders: () => {
        return configList.parscoders;
    },
};

