import Drawer from "@/components/Drawer/Drawer";
import { DrawerContext } from "@/context/DrawerProvider";
import { renderNavbarItems } from "@/helpers/renderNavbarList";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Logo = () => {
  const { open, setOpen } = useContext(DrawerContext);
  return (
    <div className="flex items-center w-2/4 gap-3 md:w-1/4">
      <button className="inline md:hidden" onClick={() => setOpen!(true)}>
        <AiOutlineMenu fontSize={25} />
      </button>
      <Link
        href="/"
        className="text-indigo-700 font-yekan-bold dark:text-indigo-600 text-md md:text-xl animate-bounce"
      >
        فریلنس اکسپلور
      </Link>
      <Drawer isOpen={open} setIsOpen={setOpen}>
        {renderNavbarItems(true)}
      </Drawer>
    </div>
  );
};

export default Logo;
