import React from "react";
import Image from "../assets/price.png";
import Arrrow from "../assets/arrow.png";
import Star from "../assets/starr.png";
import Star2 from "../assets/star1.png";
import Purple from "../assets/purple.png";
import Purplelens from "../assets/purplelens.png";
import Gold from "../assets/gold.png";
import Silver from "../assets/silver.png";
import Bronze from "../assets/bronze.png";

const Pricing = () => {
  return (
    <div className="pr-28 py-20 flex items-center justify-around  footerBg">
      <div className="w-[500px] relative -mt-64 mb-32">
        <img src={Star} alt="" className="absolute -top-24 left-32" />
        <img src={Star2} alt="" className="absolute -bottom-[490px] left-32" />

        <img src={Image} alt="the big idea" className="absolute z-30" />
        <img
          src={Purplelens}
          alt="the big idea"
          className="absolute -top-16 left-32 w-[600px] z-10"
        />
        <img
          src={Purplelens}
          alt="the big idea"
          className="absolute -top-28 left-10 w-[600px] z-10"
        />
        {/* <img
          src={Purple}
          alt="the big idea"
          className="absolute -right-96 top-72 "
        /> */}
      </div>
      <div className="w-[500px] relative">
        <div className="flex flex-col gap-y-10 mb-8">
          <div className="pl-32 mb-32">
            <h1 className="font-clash text-3xl font-bold">Prizes and</h1>
            <h1 className="font-clash text-3xl font-bold unique mb-3">
              Reward
            </h1>
            <p className="font-monts font-normal text-[14px]">
              Highlight of the prizes or rewards for winners and <br />{" "}
              participants
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-32">
            <div className="border faqborder bg-[#150e28] rounded-lg relative w-48 h-72 pt-28 pb-8 text-center uniqueprice">
              <img
                src={Silver}
                alt="silver"
                className="absolute -top-20 left-4 w-40"
              />
              <h2 className="font-monts text-[36px]">2nd</h2>
              <h3 className="font-monts text-[24px]">Runner</h3>
              <h2 className="font-monts  text-[32px] unique ">N300,000</h2>
            </div>

            <img
              src={Gold}
              alt="gold"
              className="absolute top-44 z-20 left-[179px] w-64 "
            />
            <div className="border faqborder bg-[#150e28] rounded-lg relative mt-7 w-48 pt-28  pb-8 mt- text-center uniqueprice">
              <h2 className="font-monts text-[36px] font-bold">1st</h2>
              <h3 className="font-monts text-[24px]">Runner</h3>
              <h2 className="font-monts  text-[32px] unique ">N400,000</h2>
            </div>

            <div className="border faqborder bg-[#150e28] rounded-lg relative w-48 h-72 pt-28 px-6 pb-8 text-center uniqueprice">
              <img
                src={Bronze}
                alt="bronze"
                className="absolute -top-20 left-4 w-40"
              />
              <h2 className="font-monts text-[36px]">3rd</h2>
              <h3 className="font-monts text-[24px]">Runner</h3>
              <h2 className="font-monts  text-[32px] unique ">N150,000</h2>
            </div>
          </div>
          <img
            src={Purplelens}
            alt="the big idea"
            className="absolute -right-[490px] top-44"
          />
          <img
            src={Purplelens}
            alt="the big idea"
            className="absolute -right-[500px] top-44"
          />
        </div>
        <img
          src={Star2}
          alt="the big idea"
          className="absolute -right-28 top-44 w-5"
        />
        <img
          src={Star2}
          alt="the big idea"
          className="absolute left-20 top-40 w-5"
        />
        <img
          src={Star}
          alt="the big idea"
          className="absolute right-20 -bottom-7 w-5"
        />
      </div>
    </div>
  );
};

export default Pricing;
