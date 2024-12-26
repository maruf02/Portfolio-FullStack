import { NavLink } from "react-router-dom";
import "./MenuBarList.css";

const MenuBarList = () => {
  return (
    <div>
      <ul className=" hidden lg:inline-flex text-white text-lg flex flex-row items-center gap-6 font-f ">
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
          <NavLink to="/" className="activeNavLink ">
            Home
          </NavLink>
        </li>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
          <NavLink to="/About" className="activeNavLink ">
            About
          </NavLink>
        </li>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
          <NavLink to="/Skills" className="activeNavLink ">
            Skills
          </NavLink>
        </li>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
          <NavLink to="/Blogs" className="activeNavLink ">
            Blogs
          </NavLink>
        </li>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
          <NavLink to="/Projects" className="activeNavLink ">
            Projects
          </NavLink>
        </li>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
          <NavLink to="/Contact" className="activeNavLink ">
            Contact
          </NavLink>
        </li>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
          <NavLink to="/login" className="activeNavLink ">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuBarList;
