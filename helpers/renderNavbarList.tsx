import { LINKS } from "@/constants/constants";
import { DrawerContext } from "@/context/DrawerProvider";
import Link from "next/link";
import { useContext } from "react";

export const renderNavbarItems = (isMobile?: boolean) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setOpen } = useContext(DrawerContext);
  const closeDrawer = () => {
    if (isMobile) {
      setOpen!(false);
    }
  };
  return LINKS.map((nav) => (
    <li key={nav.link}>
      <Link
        className="font-yekan-regular dark:hover:text-gray-200 hover:text-slate-900 dark:text-white text-slate-700 text-md"
        href={nav.link}
        onClick={closeDrawer}
      >
        {nav.title}
      </Link>
    </li>
  ));
};
