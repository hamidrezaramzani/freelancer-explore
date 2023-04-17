import { ListItemProps } from "@/pages/search";
import Link from "next/link";

interface FreelanceItemProps {
  item: ListItemProps;
}
const FreelanceItem = ({ item }: FreelanceItemProps) => {
  return (
    <div className="flex w-full mb-5">
      <div className="flex items-center">
        <Link href="https://ponisha.ir">
          <img
            src={`/logos/${item.name}.png`}
            className="rotate-90"
            width={200}
          />
        </Link>
      </div>
      <div className="w-full flex flex-col h-auto bg-slate-100 hover:bg-slate-300 p-5 rounded-md">
        <Link target="_blank" href={item.projectLink}>
          <div className="px-4 flex flex-col gap-1">
            <h3 className="font-yekan-bold text-xl text-slate-600">
              {item.projectTitle}
            </h3>
            <p className="py-2 font-yekan-regular text-sm text-slate-500">
              {item.projectDescription}
            </p>
          </div>
        </Link>

        <div className="w-full px-4">
          <h4 className="text-md text-indigo-700 font-yekan-bold">
            بودجه:
            {item.projectBudget
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            ریال
          </h4>
        </div>
        <div className="w-full flex px-4 gap-4 py-5">
          {item.projectTags.map((tag, index) => (
            <div
              key={index}
              className="p-2 border border-indigo-700 rounded-md font-yekan-regular text-sm text-indigo-700"
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
