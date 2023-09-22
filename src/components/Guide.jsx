import React from "react";
import Image from "../assets/img.png";
import Arrrow from "../assets/arrow.png";
import Star from "../assets/starr.png";
import Star2 from "../assets/star1.png";
import Purple from "../assets/purple.png";

const Guide = () => {
  return (
    <div className="px-10 lg:px-24 gap-y-16 py-16 flex  lg:flex-row flex-col-reverse items-center justify-around border-b navborder">
      <div className="lg:w-[500px] text-center lg:text-left relative">
        <img
          src={Star}
          alt=""
          className="absolute -top-28 lg:top-10 right-1 lg:right-64"
        />
        <img
          src={Purple}
          alt=""
          className="absolute -top-[500px] lg:-top-12 -left-20 lg:left-6 "
        />
        <h1 className="font-clash text-xl lg:text-3xl font-bold">Rules and</h1>
        <h1 className="font-clash text-xl lg:text-3xl font-bold unique mb-3">
          Guidelines
        </h1>
        <p className="font-monts font-normal text-[13px] lg:text-[14px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
        <img
          src={Star2}
          alt="the big idea"
          className="absolute lg:-right-10 bottom-[590px] lg:-bottom-5 w-5"
        />
      </div>
      <div className="w-[430px] relative">
        <img src={Image} alt="the big idea" className="-z-20 " />
        <img
          src={Purple}
          alt="the big idea"
          className="absolute hidden lg:block -right-40 top-64 "
        />
        <img
          src={Purple}
          alt="the big idea"
          className="absolute -right-40 lg:-right-96 top-72 "
        />
      </div>
    </div>
  );
};

export default Guide;
