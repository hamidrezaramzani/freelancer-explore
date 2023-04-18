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
    <div className="flex md:flex-row flex-col-reverse bg-slate-100 dark:bg-slate-700 md:bg-transparent rounded-md w-full mb-5">
      <div className="flex justify-center   py-5 md:items-center">
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
      <div className="w-full flex flex-col h-auto bg-slate-100 dark:bg-slate-700 hover:bg-slate-300 p-5 rounded-md">
        <Link target="_blank" href={item.projectLink}>
          <div className="px-4 flex flex-col gap-1">
            <h3 className="font-yekan-bold text-xl text-slate-600 dark:text-slate-50">
              {item.projectTitle}
            </h3>
            <p className="py-2 font-yekan-regular text-sm text-slate-500 dark:text-slate-400">
              {item.projectDescription}
            </p>
          </div>
        </Link>

        <div className="w-full px-4">
          <h4 className="text-md text-indigo-700 dark:text-indigo-400 font-yekan-bold">
            بودجه:
            {item.projectBudget
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            ریال
          </h4>
        </div>
        <div className="w-full flex flex-wrap px-4 gap-4 py-5">
          {item.projectTags.map((tag, index) => (
            <div
              key={index}
              className="p-2 border  rounded-md font-yekan-regular text-sm border-indigo-700 text-indigo-700 dark:border-indigo-400 dark:text-indigo-400"
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
