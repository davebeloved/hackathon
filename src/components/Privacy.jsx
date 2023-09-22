import React from "react";
import PrivacyImg from "../assets/privacy.png";
import Vector from "../assets/vectorpri.png";
import List from "../assets/list.png";
import Star1 from "../assets/starr.png";
import Star2 from "../assets/star1.png";
import Purple from "../assets/purplelens.png";

const Privacy = () => {
  return (
    <div className="px-24 py-32 pb-64 grid grid-cols-2 gap-x-16 relative">
      <div className="">
        <div className="mb-20">
          <h2 className="font-clash text-[32px]">Privacy Policy and</h2>
          <h2 className="font-clash text-[32px] unique">Terms</h2>
          <p className="text-[14px] font-monts mb-4">
            Last updated on Septembeer 12, 2023
          </p>
          <p className="text-[14px] font-monts">
            Below are our privacy & policy, which outline a log goodies. <br />{" "}
            its our aim to always take of our participant
          </p>
        </div>

        <div className="border faqborder rounded-lg p-20 relative">
          <img
            src={Purple}
            alt="purple"
            className="absolute -left-48 -bottom-56"
          />
          <img
            src={Star1}
            alt="star"
            className="absolute top-80 -left-16 w-5"
          />
          <img
            src={Star1}
            alt="star"
            className="absolute left-72 -top-72 w-5"
          />
          <img
            src={Star1}
            alt="star"
            className="absolute right-0 -top-40 w-5"
          />
          <p className="font-monts text-[14px] mb-8">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy. Copy
          </p>
          <div>
            <h2 className="font-monts unique leading-5">Licensing Policy</h2>
            <p className="font-monts mb-5 text-[14px]">
              Here are terms of our Standard License:
            </p>
            <ul>
              <li className="flex items-center gap-x-4 mb-5 font-monts text-[14px]">
                <img src={List} alt="list" className="mb-5" /> The Standard
                License grants you a non-exclusive right to navigate and
                register for our event
              </li>
              <li className="flex items-center gap-x-4 mb-5 font-monts text-[14px]">
                <img src={List} alt="list" className="mb-5" /> You are licensed
                to use the item available at any free source sites, for your
                project developement
              </li>
              <button className="btn font-monts inline-block ml-32 mt-4">
                Read More
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={Star2} alt="star" className="absolute right-20 w-3 top-40" />
        <img src={Star1} alt="star" className="absolute right-0 w-5 bottom-0" />
        <img
          src={Star1}
          alt="star"
          className="absolute left-40 w-3 bottom-52 "
        />
        <img
          src={Star2}
          alt="star"
          className="absolute left-32 w-3 bottom-20 "
        />
        <img
          src={PrivacyImg}
          alt="privacy image"
          className="absolute z-20 top-52"
        />
        <img
          src={Vector}
          alt="vector image"
          className="absolute z-20 left-20"
        />
      </div>
    </div>
  );
};

export default Privacy;
