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
    <div className="px-10 lg:px-24 py-16 border-b navborder">
      <div className="text-center">
        <h2 className="font-clash text-xl lg:text-[32px]">
          Partners and Sponsors
        </h2>
        <p className="text-[12px] lg:text-[14px] font-monts">
          Getlinked Hackathon 1.0 is honored to have the major <br></br>{" "}
          companies as its patners and sponsors
        </p>
      </div>

      <div className="border rounded-lg faqborder flex items-center justify-center p-5 lg:py-48 mt-32">
        <div className="flex flex-col  lg:ml-0">
          <div className="lg:flex items-center w-full  lg:w-full gap-x-32 relative mb-6">
            <div className="absolute uniquebg w-1 h-14 left-20 top-4 lg:top-0 lg:h-32 lg:left-64"></div>
            <img
              src={Purple}
              alt="purple"
              className="absolute -top-80 -left-28 lg:-left-[480px] lg:-top-[500px]"
            />
            <img
              src={Star1}
              alt="purple"
              className="absolute lg:-top-60  -top-60 left-44 lg:-left-16 w-3 lg:w-7"
            />
            <img
              src={Star1}
              alt="purple"
              className="absolute w-3 lg:w-5 lg:-top-10 lg:left-[500px]"
            />
            <img
              src={Star2}
              alt="purple"
              className="absolute top-96 w-5 left-[500px]"
            />
            <img
              src={Purple}
              alt="purple"
              className="absolute lg:-bottom-[700px] lg:-right-[600px] -right-52 -bottom-64"
            />
            <div className="absolute uniquebg w-1 h-14 lg:h-32 lg:right-80 right-24 top-4 lg:top-0"></div>
            <div className="absolute uniquebg w-20 lg:w-64 lg:-left-6 top-24 lg:top-40 h-1"></div>
            <div className="absolute uniquebg w-20 lg:w-72 lg:left-[296px] left-[196px] top-24 lg:top-40 h-1"></div>
            <div className="absolute uniquebg w-20 lg:w-72 lg:right-4 right-28 lg:top-40 top-24 h-1"></div>
            <div className="flex items-center w-72">
              <div className="p-5 ">
                <img src={Uberty} alt="uberty" className="" />
              </div>
              <div className="p-5">
                <img src={Liberty} alt="liberty" />
              </div>
              <div className="p-5">
                <img src={Winwise} alt="winwise" />
              </div>
            </div>
          </div>

          <div className="flex items-center  lg:gap-x-32 relative w-full">
            <div className="absolute uniquebg w-1 h-14 lg:h-32 lg:left-64 left-20"></div>
            <div className="absolute uniquebg w-1 h-14 lg:h-32 right-24 lg:right-80"></div>
            <div className="p-5">
              <img src={Whisper} alt="whisper" />
            </div>
            <div className="p-5">
              <img src={Paybox} alt="paybox" />
            </div>
            <div className="p-5 pl-9">
              <img src={Viz} alt="viz" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
