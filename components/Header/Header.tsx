import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import UserNavbar from "./UserNavbar/UserNavbar";
interface HeaderProps {
  isLogged: boolean;
}
const Header = ({ isLogged }: HeaderProps) => {
  return (
    <div className="w-11/12 md:w-2/3 py-10 flex">
      <Logo />
      <Navbar />
      <UserNavbar isLogged={isLogged} />
    </div>
  );
};

export default Header;
