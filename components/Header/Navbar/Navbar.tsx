import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden md:inline w-2/4">
      <ul className="w-full flex justify-center text-white gap-10">
        <li>
          <Link
            className="font-yekan-regular dark:hover:text-gray-200 hover:text-slate-900 dark:text-white text-slate-700 text-md"
            href="/"
          >
            خانه
          </Link>
        </li>

        <li>
          <Link
            className="font-yekan-regular dark:hover:text-gray-200 hover:text-slate-900 dark:text-white text-slate-700 text-md"
            href="/"
          >
            درباره من
          </Link>
        </li>

        <li>
          <Link
            className="font-yekan-regular dark:hover:text-gray-200 hover:text-slate-900 dark:text-white text-slate-700 text-md"
            href="/"
          >
            تماس با ما
          </Link>
        </li>

        <li>
          <Link
            className="font-yekan-regular dark:hover:text-gray-200 hover:text-slate-900 dark:text-white text-slate-700 text-md"
            href="/"
          >
            پنل کاربری
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
