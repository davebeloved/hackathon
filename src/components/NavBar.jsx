import React from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../data";
import Menu from "../assets/menu.png";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex relative items-center justify-between px-10 lg:px-24 py-5 border-b navborder">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" className="" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="hidden items-center space-x-10 mr-16 lg:flex">
          {navLinks.map((link, idx) => {
            const { label, path } = link;
            return (
              <li key={idx} className="font-monts font-normal">
                <Link to={path}>{label}</Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => navigate("/register")}
          className="btn  hidden font-monts lg:block"
        >
          Register
        </button>
        <img src={Menu} alt="menu icon" className="block lg:hidden" />
      </div>
    </nav>
  );
};

export default NavBar;
