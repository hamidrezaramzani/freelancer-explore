import { CgSpinner } from "react-icons/cg";
const Loading = () => {
  return (
    <div className="w-full h-44 flex flex-col justify-center gap-1 items-center">
      <CgSpinner fontSize={35} className="animate-spin text-indigo-700" />
      <span className="text-center font-yekan-regular text-sm">
        صبر کنید...
      </span>
    </div>
  );
};

export default Loading;
