import Drawer from "@/components/Drawer/Drawer";
import { renderNavbarItems } from "@/helpers/renderNavbarList";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Logo = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleToggleOpenDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="flex items-center w-2/4 gap-3 md:w-1/4">
      <button className="inline md:hidden" onClick={handleToggleOpenDrawer}>
        <AiOutlineMenu fontSize={25} />
      </button>
      <Link
        href="/"
        className="text-indigo-700 font-yekan-bold dark:text-indigo-600 text-md md:text-xl animate-bounce"
      >
        فریلنس اکسپلور
      </Link>
      <Drawer isOpen={open} setIsOpen={setOpen}>
        {renderNavbarItems()}
      </Drawer>
    </div>
  );
};

export default Logo;
