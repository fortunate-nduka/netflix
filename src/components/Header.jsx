import logo from "../assets/netflix-logo.png";
import user from "../assets/user.jpg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 md:px-10 lg:px-16 py-1">
      <img src={logo} className="w-32" alt="netflix" />
      <div className="md:hidden">
        <HiOutlineMenuAlt3 className="text-white text-4xl" />
      </div>
      <div className="hidden md:flex items-center justify-between space-x-10">
        <VscSearch className="text-white text-xl cursor-pointer hover:text-red-500" />
        <img src={user} alt="user" className="rounded-full w-8" />
      </div>
    </header>
  );
};

export default Header;
