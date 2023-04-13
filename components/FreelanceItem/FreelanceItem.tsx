import Link from "next/link";

const FreelanceItem = () => {
  return (
    <div className="flex w-full mb-5">
      <div className="flex items-center">
        <Link href="https://ponisha.com">
          <img src="/logos/ponisha.png" className="rotate-90" width={200} />
        </Link>
      </div>
      <Link href="">
        <div className="w-full flex flex-col h-auto bg-slate-100 p-5 rounded-md">
          <div className="px-4 flex flex-col gap-1">
            <h3 className="font-yekan-bold text-xl text-slate-600">
              برطرف کردن مشکلات وبسایت
            </h3>
            <p className="py-2 font-yekan-regular text-sm text-slate-500">
              {" "}
              برای سایت فروشگاهی که با django نوشته شده است یک پنل برای مدیریت
              کلی سایت نیاز داریم پنل باید با next js نوشته شود و api های آن
              آماده است فقط نیاز به وصل کردن دارد{" "}
            </p>
          </div>
          <div className="w-full px-4">
            <h4 className="text-md text-indigo-700 font-yekan-bold">
              بودجه: 1800000 ریال
            </h4>
          </div>
          <div className="w-full flex px-4 gap-4 py-5">
            <div className="p-2 border border-indigo-700 rounded-md font-yekan-regular text-sm text-indigo-700">
              برنامه نویسی
            </div>

            <div className="p-2 border border-indigo-700 rounded-md font-yekan-regular text-sm text-indigo-700">
              برنامه نویسی
            </div>

            <div className="p-2 border border-indigo-700 rounded-md font-yekan-regular text-sm text-indigo-700">
              برنامه نویسی
            </div>

            <div className="p-2 border border-indigo-700 rounded-md font-yekan-regular text-sm text-indigo-700">
              برنامه نویسی
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FreelanceItem;
