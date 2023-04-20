import Link from "next/link";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>> | undefined;
}
export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  const close = () => {
    setIsOpen!(false);
  };
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute dark:bg-slate-900 bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative flex flex-col w-screen h-full max-w-lg px-4 pb-10 space-y-6 overflow-y-scroll">
          <header className="flex items-center justify-between py-8 text-lg font-bold">
            <Link
              href="/"
              className="text-indigo-700 font-yekan-bold dark:text-indigo-600 text-md md:text-xl animate-bounce"
            >
              فریلنس اکسپلور
            </Link>

            <button onClick={close}>
              <AiOutlineMenuFold fontSize={25} />
            </button>
          </header>
          {children}
        </article>
      </section>
    </main>
  );
}
