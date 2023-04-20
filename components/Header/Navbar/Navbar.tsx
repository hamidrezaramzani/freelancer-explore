import { renderNavbarItems } from "@/helpers/renderNavbarList";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden w-2/4 md:inline">
      <ul className="flex justify-center w-full gap-10 text-white">
        {renderNavbarItems()}
      </ul>
    </div>
  );
};

export default Navbar;
