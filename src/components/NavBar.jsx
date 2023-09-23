import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { navLinks } from "../data";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <nav className="lg:flex relative items-center justify-between px-10 lg:px-24 py-5 border-b navborder">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="w-32 lg:w-full" />
        </NavLink>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <img src={Close} alt="menu icon" className="block lg:hidden" />
          ) : (
            <img src={Menu} alt="menu icon" className="block lg:hidden" />
          )}
        </button>
      </div>
      <div className="flex-col lg:flex items-center">
        <ul
          className={`absolute lg:static lg:pb-0 bg-[#150e28]  pl-10 w-full lg:w-auto z-[1000] transition-all duration-500 ease-in left-0 lg:z-auto items-center lg:space-x-10 space-y-8 pb-10 lg:space-y-0 pt-10 lg:pt-0 border-b lg:border-none navborder shadow-xl mr-16 lg:flex  lg:top-0 ${
            open ? "top-10" : "top-[-500px]"
          }`}
        >
          {/* {navLinks.map((link, idx) => {
            const { label, path } = link;
            return ( */}
          <li className="font-monts cursor-pointer">
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={1000}
            >
              Timeline
            </Link>
          </li>
          <li className="font-monts cursor-pointer">
            <NavLink to="/">Overview</NavLink>
          </li>
          <li className="font-monts cursor-pointer">
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={1000}
            >
              FAQs
            </Link>
          </li>
          <li className="font-monts cursor-pointer">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {/* );
          })} */}
          <button
            onClick={() => navigate("/register")}
            className="btn font-monts block"
          >
            Register
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
