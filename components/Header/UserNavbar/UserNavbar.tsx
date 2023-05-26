import ThemeToggle from "./ThemeToggle/ThemeToggle";
import UserMenu from "./UserMenu/UserMenu";
import { BiUserCircle } from "react-icons/bi";
import { CiSaveDown2 } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { RxExit } from "react-icons/rx";
interface UserNavbarProps {
  isLogged: boolean;
}
const UserNavbar = ({ isLogged }: UserNavbarProps) => {
  return (
    <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-4">
      <ThemeToggle />
      <UserMenu isLogged={isLogged}>
        <UserMenu.Item link="/user/profile" Icon={BiUserCircle}>
          پروفایل کاربری
        </UserMenu.Item>
        <UserMenu.Item link="/user/saveds" Icon={CiSaveDown2}>
          موقعیت های ذخیره شده
        </UserMenu.Item>

        <UserMenu.Item link="/user/saveds" Icon={GiSkills}>
          مهارت های من
        </UserMenu.Item>

        <UserMenu.Item link="/user/logout" Icon={RxExit}>
          خروج
        </UserMenu.Item>
      </UserMenu>
    </div>
  );
};

export default UserNavbar;
