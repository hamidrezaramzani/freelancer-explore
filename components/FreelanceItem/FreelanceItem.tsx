import { ListItemProps } from "@/pages/search";
import Image from "next/image";
import Link from "next/link";

interface FreelanceItemProps {
  item: ListItemProps;
}
const FreelanceItem = ({ item }: FreelanceItemProps) => {
  const websiteLinks: { [key: string]: string } = {
    ponisha: "https://ponisha.ir",
    parscoders: "https://parscoders.com/",
  };
  return (
    <div className="flex flex-col-reverse w-full mb-5 rounded-md md:flex-row bg-slate-100 dark:bg-slate-700 md:bg-transparent">
      <div className="flex justify-center py-5 md:items-center">
        <Link target="_blank" href={websiteLinks[item.name]}>
          <Image
            src={`/logos/${item.name}.png`}
            className="md:rotate-90"
            width={200}
            height={40}
            alt={item.name}
          />
        </Link>
      </div>
      <div className="flex flex-col w-full h-auto p-5 rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-slate-300">
        <Link target="_blank" href={item.projectLink}>
          <div className="flex flex-col gap-1 px-4">
            <h3 className="w-full text-xl font-yekan-bold text-slate-600 dark:text-slate-50">
              {item.projectTitle}
            </h3>
            <p className="w-full py-2 text-sm font-yekan-regular text-slate-500 dark:text-slate-400">
              {item.projectDescription}
            </p>
          </div>
        </Link>

        <div className="w-full px-4">
          <h4 className="text-indigo-700 text-md dark:text-indigo-400 font-yekan-bold">
            بودجه:
            {item.projectBudget
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            ریال
          </h4>
        </div>
        <div className="flex flex-wrap w-full gap-4 px-4 py-5">
          {item.projectTags.map((tag, index) => (
            <div
              key={index}
              className="p-2 text-sm text-indigo-700 border border-indigo-700 rounded-md font-yekan-regular dark:border-indigo-400 dark:text-indigo-400"
            >
              <Link href={tag.link}>{tag.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelanceItem;
