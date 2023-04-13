import { HiOutlineSun } from "react-icons/hi";
const ThemeToggle = () => {
  return (
    <div>
      <button className="bg-slate-500 p-2 rounded-full hover:bg-slate-600">
        <HiOutlineSun fontSize={25} className="text-white" />
      </button>
    </div>
  );
};

export default ThemeToggle;
