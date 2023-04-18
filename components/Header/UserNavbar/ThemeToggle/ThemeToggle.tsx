import { useTheme } from "next-themes";
import { HiOutlineSun, HiMoon } from "react-icons/hi";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-10 h-10">
      <button
        onClick={toggleTheme}
        className="bg-slate-500 p-2 rounded-full hover:bg-slate-600"
      >
        {theme === "light" ? (
          <HiMoon fontSize={25} className="text-white" />
        ) : (
          <HiOutlineSun fontSize={25} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
