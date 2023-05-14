import ThemeToggle from "./ThemeToggle/ThemeToggle";
const UserNavbar = () => {
  return (
    <div className="w-2/4 md:w-1/4 flex justify-end items-center gap-4">
      <ThemeToggle />
    </div>
  );
};

export default UserNavbar;
