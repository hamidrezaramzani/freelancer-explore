import { LINKS } from "@/constants/constants";
import Link from "next/link";

export const renderNavbarItems = () => {
  return LINKS.map((nav) => (
    <li key={nav.link}>
      <Link
        className="font-yekan-regular dark:hover:text-gray-200 hover:text-slate-900 dark:text-white text-slate-700 text-md"
        href={nav.link}
      >
        {nav.title}
      </Link>
    </li>
  ));
};
