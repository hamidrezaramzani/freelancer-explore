// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { IconType } from "react-icons";

interface UserMenuProps {
  children: ReactNode;
  isLogged: boolean;
}

interface UserMenuItemProps {
  children: ReactNode;
  link: string;
  Icon: IconType;
}

const UserMenu = ({ children, isLogged }: UserMenuProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleToggleShow = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <div className="w-32 h-12 relative">
      {isLogged && (
        <div>
          <Image
            src="/images/avatar.png"
            alt="random"
            width={80}
            height={80}
            className="p-1 bg-indigo-800 rounded-full w-12 h-12 cursor-pointer"
            onClick={handleToggleShow}
          />
        </div>
      )}
      {isLogged && (
        <div
          className={`w-60 h-auto rounded-md p-5 absolute bg-slate-700 left-0 top-14 z-50 ${
            show ? "" : "hidden"
          }`}
        >
          <div className="w-full flex flex-col gap-2">
            <h3 className="w-full font-yekan-bold text-white text-md">
              <span className="text-indigo-500">حمیدرضا</span> رمضانی
            </h3>
            <p className="w-full font-yekan-regular text-sm text-slate-400">
              ReactJS - PHP{" "}
            </p>
          </div>
          <div className="w-full flex flex-col font-yekan-regular text-sm py-4 gap-4">
            {children}
          </div>
        </div>
      )}
      {!isLogged && (
        <div className="flex items-center h-12 gap-2">
          <Link
            href="/user/login"
            className="font-yekan-regular text-indigo-400 hover:text-indigo-500 text-md"
          >
            ورود
          </Link>
          /
          <Link
            href="/user/register"
            className="font-yekan-regular text-indigo-400 hover:text-indigo-500 text-md"
          >
            ثبت نام
          </Link>
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react/display-name
UserMenu.Item = ({ Icon, children, link }: UserMenuItemProps) => {
  return (
    <Link href={link} className="hover:text-slate-300 gap-4 items-center flex">
      <Icon fontSize={20} className="text-indigo-500" />
      <span className="flex">{children}</span>
    </Link>
  );
};

export default UserMenu;
