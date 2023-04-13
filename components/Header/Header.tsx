import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-2/3 py-10 flex">
      <div className="w-1/4">1</div>
      <div className="w-2/4">
        <ul className="w-full flex justify-center text-white gap-10">
          <li>
            <Link className="font-yekan-regular dark:text-white text-slate-700 text-md" href="/">
              خانه
            </Link>
          </li>

          <li>
            <Link className="font-yekan-regular dark:text-white text-slate-700 text-md" href="/">
              درباره من
            </Link>
          </li>

          <li>
            <Link className="font-yekan-regular dark:text-white text-slate-700 text-md" href="/">
              تماس با ما
            </Link>
          </li>

          <li>
            <Link className="font-yekan-regular dark:text-white text-slate-700 text-md" href="/">
              پنل کاربری
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-1/4">3</div>
    </div>
  );
};

export default Navbar;
