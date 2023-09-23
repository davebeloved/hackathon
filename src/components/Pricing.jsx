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
    <div className="footerBg pb-44">
      <div className="py-12 mb-44 lg:ml-[880px] text-center lg:text-left">
        <h1 className="font-clash text-xl lg:text-3xl font-bold">Prizes and</h1>
        <h1 className="font-clash text-xl lg:text-3xl font-bold unique mb-3">
          Reward
        </h1>
        <p className="font-monts font-normal text-[13px] lg:text-[14px]">
          Highlight of the prizes or rewards for winners and <br /> participants
        </p>
      </div>
      <div className=" px-10 lg:px-0 pr-28 pt-44  lg:pt-0 lg:py-20  flex flex-col  lg:flex-row gap-y-80 items-center justify-around  ">
        <div className="w-[300px] lg:w-[500px] ml-20 lg:ml-0 relative -mt-64 mb-32">
          <img src={Star} alt="" className="absolute -top-24 left-32" />
          <img
            src={Star2}
            alt=""
            className="absolute -bottom-[490px] left-32"
          />

          <img src={Image} alt="the big idea" className="absolute z-30" />
          <img
            src={Purplelens}
            alt="the big idea"
            className="absolute -top-16 lg:left-32 w-[600px] z-10"
          />
          {/* <img
            src={Purplelens}
            alt="the big idea"
            className="absolute -top-28 left-10 w-[600px] z-10"
          /> */}
          {/* <img
          src={Purple}
          alt="the big idea"
          className="absolute -right-96 top-72 "
        /> */}
        </div>

        <div className="lg:w-[500px] relative">
          <div className="">
            <div className="grid grid-cols-3 gap-x-20 lg:gap-x-32">
              <div className="border faqborder bg-[#150e28] rounded-lg relative w-24 lg:w-48  lg:h-72 pt-20 lg:pt-28 lg:pb-8 text-center uniqueprice">
                <img
                  src={Silver}
                  alt="silver"
                  className="absolute -top-12 lg:-top-20  lg:left-4 w-40"
                />
                <h2 className="font-monts text-[12px] lg:text-[36px]">2nd</h2>
                <h3 className="font-monts text-[12px] lg:text-[24px]">
                  Runner
                </h3>
                <h2 className="font-monts text-[14px] lg:text-[32px] unique ">
                  N300,000
                </h2>
              </div>

              <img
                src={Gold}
                alt="gold"
                className="absolute -top-16 lg:-top-40 z-20 left-24 lg:left-[179px] w-32 lg:w-64 "
              />
              <div className="border faqborder bg-[#150e28] rounded-lg relative mt-7 w-24 lg:w-48 pt-16 lg:pt-28  lg:pb-8 mt- text-center uniqueprice">
                <h2 className="font-monts text-[12px] lg:text-[36px]">1st</h2>
                <h3 className="font-monts text-[12px] lg:text-[36px]">
                  Runner
                </h3>
                <h2 className="font-monts unique text-[14px] lg:text-[36px]">
                  N400,000
                </h2>
              </div>

              <div className="border faqborder bg-[#150e28] rounded-lg relative w-24 lg:w-48 pt-20 h-44 lg:h-72 lg:pt-28 px-6 lg:pb-8 text-center uniqueprice">
                <img
                  src={Bronze}
                  alt="bronze"
                  className="absolute -top-12 lg:-top-20 -left-1 lg:left-4 w-40"
                />
                <h2 className="font-monts text-[12px] lg:text-[36px]">3rd</h2>
                <h3 className="font-monts text-[12px] lg:text-[36px]">
                  Runner
                </h3>
                <h2 className="font-monts unique  text-[14px] lg:text-[36px] unique ">
                  N150,000
                </h2>
              </div>
            </div>
          </div>

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
    </div>
  );
};

export default Pricing;
