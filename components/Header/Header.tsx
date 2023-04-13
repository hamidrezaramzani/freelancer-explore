import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import UserNavbar from "./UserNavbar/UserNavbar";
const Header = () => {
  return (
    <div className="w-2/3 py-10 flex">
      <Logo />
      <Navbar />
      <UserNavbar />
    </div>
  );
};

export default Header;
