import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import UserNavbar from "./UserNavbar/UserNavbar";
const Header = () => {
  return (
    <div className="w-11/12 md:w-2/3 py-10 flex">
      <Logo />
      <Navbar />
      <UserNavbar />
    </div>
  );
};

export default Header;
