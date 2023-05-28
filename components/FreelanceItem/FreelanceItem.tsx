import { ItemType } from "@/config/config";
import digest from "@/helpers/digest";
import getFreelancerJobId from "@/helpers/getLinkId";
import { ListItemProps } from "@/pages/search";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
interface FreelanceItemProps {
  item: ListItemProps;
  keyword?: string;
  isLogged: boolean;
}
const FreelanceItem = ({ item, keyword, isLogged }: FreelanceItemProps) => {
  const websiteLinks: { [key: string]: string } = {
    ponisha: "https://ponisha.ir",
    parscoders: "https://parscoders.com/",
  };

  const [isSaveButtonLoading, setIsSaveButtonLoading] = useState(false);

  const client = useQueryClient();

  const toggleSavePostMutation = useMutation(
    () => axios.post(`/api/posts/toggleSavePost`, item),
    {
      onSuccess: async ({ data: { isSaved } }) => {
        const prevData: ItemType[] | undefined = client.getQueryData([
          "list",
          keyword,
        ]);
        const selectedJobHash = await digest({
          message: `${getFreelancerJobId(item.projectLink)}${item.name}`,
        });

        client.setQueryData(
          ["list", keyword],
          prevData?.map((item) => {
            if (item.hash === selectedJobHash) {
              item.isSaved = isSaved;
            }
            return item;
          })
        );
        setIsSaveButtonLoading(false);
      },
      onError() {
        toast.error(
          "خطایی در ثبت موقعیت شغلی پیش آمده است. لطفا مجدد امتحان کنید"
        );
      },
    }
  );
  const handleToggleSavePost = async () => {
    setIsSaveButtonLoading(true);
    await toggleSavePostMutation.mutate();
  };
  return (
    <div className="flex flex-col-reverse w-full mb-5 p-5 rounded-md md:flex-row bg-slate-100 dark:bg-slate-700 md:bg-transparent">
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
        <div className="flex gap-1 px-4 w-full">
          <Link target="_blank" href={item.projectLink}>
            <h3 className="w-full text-xl font-yekan-bold text-slate-600 dark:text-slate-50">
              {item.projectTitle}
            </h3>
            <p className="w-full py-2 text-sm font-yekan-regular text-slate-500 dark:text-slate-400">
              {item.projectDescription}
            </p>
          </Link>
        </div>

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
      <div className="flex justify-end items-start">
        {isLogged ? (
          <button
            disabled={isSaveButtonLoading}
            onClick={() => handleToggleSavePost()}
            title={item.isSaved ? "حذف ذخیره" : "ذخیره"}
            className={`
          cursor-pointer p-2 bourder rounded-md border text-indigo-600
           border-indigo-600 hover:shadow-md transition hover:shadow-indigo-600
           flex items-center
           ${
             item.isSaved
               ? "bg-indigo-600 disabled:bg-indigo-500 text-white"
               : ""
           }
           `}
          >
            {isSaveButtonLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin ml-3" />
            ) : (
              <></>
            )}
            <HiOutlineSave fontSize={20} />{" "}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FreelanceItem;
