import React from "react";
import Chain from "../assets/chain.png";
import Fire from "../assets/fire.png";
import Man from "../assets/man.png";
import Ai from "../assets/ai.png";
import Matrix from "../assets/matrix.png";
import Purple from "../assets/purplelens.png";
import Vector from "../assets/vect.png";
import Star from "../assets/starr.png";
import Star1 from "../assets/star1.png";
import Creative from "../assets/creative.png";

const Header = () => {
  return (
    <div className="px-10 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-y-36 gap-x-5 pt-32 pb-12 lg:overflow-hidden lg:border-b navborder">
      <div className="mt-10 lg:mt-20 relative">
        <img
          src={Creative}
          alt=""
          className="absolute right-32 w-4 lg:right-24 -top-7 lg:-top-9 mb-3"
        />
        <img
          src={Purple}
          alt=""
          className="absolute -left-20 lg:left-10 -top-32 lg:-top-56 mb-3"
        />
        <img
          src={Star1}
          alt=""
          className="absolute -top-12 left-20 lg:left-16 lg:-top-36 mb-3 w-5"
        />
        <img
          src={Star}
          alt=""
          className="absolute -top-20 right-0 lg:left-0 lg:-right-10 lg:-top-24 mb-3 w-4 lg:w-5"
        />
        <img
          src={Star}
          alt=""
          className="absolute bottom-28 w-4 lg:bottom-16 right-0 lg:right-44 mb-3 lg:w-5"
        />
        <h1 className="font-clash font-bold text-3xl text-center lg:text-left leading-4 lg:text-7xl lg:leading-[55px] mb-5">
          getlinked Tech
        </h1>
        <div className="flex items-center justify-center lg:justify-start gap-x-2 mb-3">
          <h1 className="font-clash font-bold text-[30px] text-center lg:text-left lg:text-6xl">
            Hackathon <span className="unique"> 1.0</span>
          </h1>
          <img src={Chain} alt="chain" className="w-5 lg:w-16" />
          <img src={Fire} alt="fire" className="w-5 lg:w-16" />
        </div>
        <p className="mb-3 leading-5 text-center lg:text-left">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <button className="btn font-monts  mt-5 mx-auto lg:mx-0 block ">
          Register
        </button>
        <div className="flex items-center justify-center lg:justify-start gap-x-4 mt-5 lg:mt-16">
          <h2 className="font-unica text-5xl">
            00<span className="text-sm">H</span>
          </h2>
          <h2 className="font-unica text-5xl">
            00<span className="text-sm">M</span>
          </h2>
          <h2 className="font-unica text-5xl">
            00<span className="text-sm">S</span>
          </h2>
        </div>
      </div>
      <div className="relative -mt-28 ">
        <div className="font-monts italic font-bold absolute -top-[420px] w-full lg:w-auto  lg:relative">
          <h2 className="lg:text-right text-[12px] text-center  lg:text-3xl">
            Igniting a Revolution in HR Innovation
          </h2>
          <img
            src={Vector}
            alt=""
            className="absolute  lg:right-0 right-28 lg:w-32 w-16"
          />
        </div>
        <div className="relative">
          <img src={Matrix} alt="" className="absolute left-6 left-4" />
          <img src={Purple} alt="" className="absolute left-16" />
          <img
            src={Purple}
            alt=""
            className="absolute hidden lg:block top-56 -left-16"
          />
          <img src={Man} alt="" className="absolute top-12" />
          <img src={Ai} alt="" className="absolute top-5" />
          {/* <img src={Ai} alt="" className="absolute -left-20 -top-16 " /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
