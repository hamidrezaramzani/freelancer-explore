import ThemeToggle from "./ThemeToggle/ThemeToggle";
import UserMenu from "./UserMenu/UserMenu";
const UserNavbar = () => {
  return (
    <div className="w-1/4 flex justify-center items-center gap-4">
      <ThemeToggle />
      <UserMenu />
    </div>
  );
};

export default UserNavbar;
