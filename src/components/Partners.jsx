import React from "react";
import Star1 from "../assets/starr.png";
import Star2 from "../assets/star1.png";
import Uberty from "../assets/uberty.png";
import Paybox from "../assets/paybox.png";
import Winwise from "../assets/winwise.png";
import Liberty from "../assets/liberty.png";
import Viz from "../assets/viz.png";
import Whisper from "../assets/whisper.png";
import Purple from "../assets/purplelens.png";

const Partners = () => {
  return (
    <div className="px-24 py-16 border-b navborder">
      <div className="text-center">
        <h2 className="font-clash text-[32px]">Partners and Sponsors</h2>
        <p className="text-[14px] font-monts">
          Getlinked Hackathon 1.0 is honored to have the major <br></br>{" "}
          companies as its patners and sponsors
        </p>
      </div>

      <div className="border rounded-lg faqborder flex items-center justify-center  py-48 mt-32">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-32 relative mb-6">
            <div className="absolute uniquebg w-1 h-32 left-64"></div>
            <img
              src={Purple}
              alt="purple"
              className="absolute -left-[480px] -top-[500px]"
            />
            <img
              src={Star1}
              alt="purple"
              className="absolute -top-60 -left-16 w-7"
            />
            <img
              src={Star1}
              alt="purple"
              className="absolute -top-10 left-[500px]"
            />
            <img
              src={Star2}
              alt="purple"
              className="absolute top-96 w-5 left-[500px]"
            />
            <img
              src={Purple}
              alt="purple"
              className="absolute -bottom-[700px] -right-[600px]"
            />
            <div className="absolute uniquebg w-1 h-32 right-80"></div>
            <div className="absolute uniquebg w-64 -left-6 top-40 h-1"></div>
            <div className="absolute uniquebg w-72 left-[296px] top-40 h-1"></div>
            <div className="absolute uniquebg w-72 right-4 top-40 h-1"></div>
            <div className="p-5">
              <img src={Uberty} alt="uberty" />
            </div>
            <div className="p-5">
              <img src={Liberty} alt="liberty" />
            </div>
            <div className="p-5">
              <img src={Winwise} alt="winwise" />
            </div>
          </div>

          <div className="flex items-center gap-x-32 relative">
            <div className="absolute uniquebg w-1 h-32 left-64"></div>
            <div className="absolute uniquebg w-1 h-32 right-80"></div>
            <div className="p-5">
              <img src={Whisper} alt="whisper" />
            </div>
            <div className="p-5">
              <img src={Paybox} alt="paybox" />
            </div>
            <div className="p-5">
              <img src={Viz} alt="viz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
