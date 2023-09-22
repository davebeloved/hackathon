import React from "react";
import Idea from "../assets/idea.png";
import Arrrow from "../assets/arrow.png";
import Star from "../assets/starr.png";

const GetlinkedIntro = () => {
  return (
    <div className="px-10 mt-44 lg:mt-0 lg:px-24 gap-y-28 py-16 flex flex-col lg:flex-row items-center lg:justify-around border-b navborder">
      <div className="w-72 relative">
        <img
          src={Star}
          alt=""
          className="hidden lg:block absolute top-10 -left-20"
        />
        <img src={Idea} alt="the big idea" />
        <img
          src={Arrrow}
          alt="arrow"
          className="absolute  right-28 lg:-right-16 -bottom-20 lg:-bottom-5"
        />
      </div>
      <div className="lg:w-[500px] text-center lg:text-left relative">
        <img
          src={Star}
          alt=""
          className="absolute top-6 lg:top-10 right-0 lg:-right-20 w-3 lg:w-5"
        />
        <h1 className="font-clash text-xl lg:text-3xl font-bold">
          Introduction to getlinked
        </h1>
        <h1 className="font-clash text-xl lg:text-3xl font-bold unique mb-3">
          {" "}
          tech Hackathon 1.0{" "}
        </h1>
        <p className="font-monts font-normal text-[13px] lg:text-[14px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default GetlinkedIntro;
