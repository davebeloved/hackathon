import React from "react";
import FaqImage from "../assets/faq.png";
import Arrrow from "../assets/arrow.png";
import Star from "../assets/starr.png";
import Star2 from "../assets/star1.png";
import Purple from "../assets/purple.png";
import { faqs } from "../data";

const Faq = () => {
  return (
    <div
      id="faq"
      className="px-10 lg:px-24 py-32 flex flex-col lg:flex-row gap-y-40 items-center justify-around border-b navborder"
    >
      <div className="lg:w-[500px] relative text-center lg:text-left">
        <img src={Star} alt="" className="absolute -top-10 -left-7" />
        {/* <img src={Purple} alt="" className="absolute -top-12 left-6 " /> */}
        <h1 className="font-clash text-xl lg:text-3xl font-bold">
          Frequently Ask
        </h1>
        <h1 className="font-clash text-xl lg:text-3xl font-bold unique mb-3">
          Question
        </h1>
        <p className="font-monts font-normal text-[13px] lg:text-[14px]">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>

        <div className="mt-16 text-left">
          {faqs.map((item) => {
            const { question, answer, id } = item;
            return (
              <div className="flex">
                <li
                  key={id}
                  className="w-full list-none flex justify-between border-b faqborder mb-7 pb-2 font-monts text-[13px] lg:text-[14px]"
                >
                  {question}
                  <span className="unique cursor-pointer">+</span>
                </li>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:w-[530px] text-center lg:text-left relative">
        <img
          src={Star2}
          alt="the big idea"
          className="absolute  -bottom-5 right-20 w-5"
        />
        <img src={Star} alt="" className="absolute -top-10 left-64" />
        <img src={Star} alt="" className="absolute top-32 left-20" />
        <img src={Star} alt="" className="absolute top-64 left-10" />
        <h2 className="font-tommy absolute unique text-8xl left-12 -top-10">
          ?
        </h2>
        <h2 className="font-tommy absolute text-9xl unique left-40 -top-28">
          ?
        </h2>
        <h2 className="font-tommy absolute text-8xl unique right-44 -top-12">
          ?
        </h2>
        <img src={FaqImage} alt="the big idea" className="w-full" />
        <img
          src={Purple}
          alt="the big idea"
          className="absolute hidden lg:block -right-96 -top-56 "
        />
        <img
          src={Purple}
          alt="the big idea"
          className="absolute hidden lg:block -right-96 -top-52 "
        />
        <img
          src={Purple}
          alt="the big idea"
          className="absolute hidden lg:block -right-72 -top-44 "
        />
      </div>
    </div>
  );
};

export default Faq;
