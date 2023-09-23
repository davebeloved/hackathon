import React from "react";
import Logo from "../assets/logo.png";
import SocialMedia from "../assets/socialmedia.png";
import Group from "../assets/group.png";
import Vector from "../assets/vectorr.png";
import { footerLinks } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <div className="px-10 lg:px-28 py-20 grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-16 footerBg ">
        <div className="">
          <img src={Logo} alt="logo image" className="mb-4" />
          <p className="font-monts text-[12px] leading-6 mb-12">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology Copy
          </p>
          <div className="flex gap-x-5">
            <p className="text-[12px] font-monts">Terms of Use</p>
            <div className="uniquebg w-[2px] h-5"></div>
            <p className="text-[12px] font-monts">Privacy Policy</p>
          </div>
        </div>

        <div className="lg:pl-32">
          <h2 className="unique font-monts text-[14px] mb-5">Useful Links</h2>
          {footerLinks.map((link, idx) => (
            <li key={idx} className="list-none mb-5 font-monts text-[12px]">
              {" "}
              <Link>{link.label}</Link>{" "}
            </li>
          ))}
          <p className="flex items-center gap-x-5 font-monts text-[12px]">
            Follow Us <img src={SocialMedia} alt="social icons" />{" "}
          </p>
        </div>

        <div className="lg:pl-28">
          <h2 className="unique font-monts text-[14px] mb-5">Contact Us</h2>
          <div className="flex items-center gap-x-4 mb-6">
            <img src={Group} alt="" />
            <strong className="text-[12px] font-monts">+23467981819</strong>
          </div>
          <div className="flex items-center gap-x-4">
            <img src={Vector} alt="" className="-mt-12" />
            <div className="space-y-1">
              <p className="text-[12px] font-monts">27, Alara Street</p>
              <p className="text-[12px] font-monts">Yaba 100012</p>
              <p>Lagos State</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:text-center pl-10 lg:pl-0 -mt-10">
        <p className="font-monts text-[12px]">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
