import { renderNavbarItems } from "@/helpers/renderNavbarList";

const Navbar = () => {
  return (
    <div className="hidden w-2/4 md:inline">
      <ul className="flex justify-center w-full gap-10 text-slate-800 dark:text-indigo-400">
        {renderNavbarItems()}
      </ul>
    </div>
  );
};

export default Navbar;
