import React from "react";
import Star1 from "../assets/starr.png";
import Star2 from "../assets/star1.png";

const Timeline = () => {
  return (
    <div className="px-10 lg:px-24 py-16 " id="timeline">
      <div className="text-center">
        <h2 className="font-clash text-xl lg:text-[32px]">Timeline</h2>
        <p className="text-[13px] lg:text-[14px] font-monts">
          Here is the breakdown of the time we anticipate <br></br> using for
          the upcoming event.
        </p>
      </div>

      <div className="lg:flex  justify-around mt-16 relative">
        <div className="lg:w-[35.3%] mt-28 space-y-28  lg:space-y-24 relative">
          <div className="lg:text-right ml-14 lg:ml-0 lg:-mt-33 ">
            <img src={Star1} alt="star" className="absolute -top-24 left-32" />
            <h2 className="unique  font-monts text-[12px] lg:text-[24px]">
              Hackathon Announcement
            </h2>
            <p className="font-monts text-[12px] lg:text-[16px]">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <h2 className="unique font-monts mt-6  lg:hidden text-[12px] lg:text-[24px]">
              November 18 2023
            </h2>
          </div>

          <div className="hidden lg:block text-right pt-2 lg:pt-0">
            <h2 className="unique font-monts text-[12px] lg:text-[24px] ">
              November 18 2023
            </h2>
          </div>

          <div className="lg:text-right pt-4 ml-14">
            <h2 className="unique mt-24 lg:mt-0 font-monts text-[12px] lg:text-[24px]">
              Team Registration ends
            </h2>
            <p className="font-monts text-[14px]">
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <div className="text-right pt-7 ">
            <h2 className="unique hidden text-[24px] lg:block font-monts lg:-pt-6">
              November 18 2023
            </h2>
          </div>
          <div className="ml-14 lg:text-right">
            <h2 className=" font-monts unique text-[12px] lg:text-[24px]">
              Getlinked Hackathon 1.0 Officialy Begins
            </h2>
            <p className="font-monts text-[14px]">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="text-right pt-0 font-monts">
            <h2 className="unique hidden lg:block text-[12px] lg:text-[24px] lg:pt-4">
              November 18 2023
            </h2>
          </div>
          <img src={Star1} alt="star" className="absolute bottom-10 left-0" />
        </div>

        <div className="flex flex-col absolute left-0 -top-14 lg:relative lg:mt-12 items-center gap-y-2 ">
          <div className="w-1 h-28 uniquebg"></div>
          <div className="uniquebg w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-monts ">1</span>
          </div>
          <div className="w-1 h-28 uniquebg"></div>
          <div className="uniquebg w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-monts ">2</span>
          </div>
          <div className="w-1 h-28 uniquebg"></div>
          <div className="uniquebg w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-monts ">3</span>
          </div>
          <div className="w-1 h-28 uniquebg"></div>
          <div className="uniquebg w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-monts ">4</span>
          </div>
          <div className="w-1 h-28 uniquebg"></div>
          <div className="uniquebg w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-monts ">5</span>
          </div>
          <div className="w-1 h-28 uniquebg"></div>
          <div className="uniquebg w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-monts ">6</span>
          </div>
        </div>
        <div className="lg:w-[33.3%] mt-32 lg:mt-[120px] space-y-28  relative">
          <div>
            <h2 className="unique font-monts hidden lg:block text-[24px]">
              Novermger 18 2023
            </h2>
          </div>
          <div className="ml-14 lg:ml-0">
            <h2 className="-mt-[680px] lg:mt-0 unique font-monts text-[12px] lg:text-[24px]">
              Team Registration begins
            </h2>
            <p className="font-monts text-[12px]  lg:text-[16px]">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
            <h2 className="unique mt-10  lg:hidden font-monts text-[12px] lg:text-[24px]">
              Novermger 18 2023
            </h2>
          </div>
          <div className="">
            <img
              src={Star2}
              alt="star"
              className="absolute  right-32 w-5 top-[300px]"
            />

            <h2 className="unique font-monts text-[12px] lg:text-[24px] ml-14 pt-10 lg:ml-0 lg:pt-0 ">
              Novermger 18 2023
            </h2>
          </div>
          <div className="pt-3 ml-14 lg:ml-0">
            <h2 className=" -mt-16 lg:mt-0 unique font-monts text-[12px] lg:text-[24px]">
              Announcement of the accepted teams and ideas
            </h2>
            <p className="font-monts text-[12px] lg:text-[14px]">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
            <h2 className="unique mt-8 lg:hidden  text-[12px] lg:text-[16px] font-monts">
              Novermger 18 2023
            </h2>
          </div>
          <div className="ml-14 lg:ml-0 pt-6  lg:pt-0">
            <h2 className="unique font-monts text-[12px] lg:text-[24px] lg:-mt-6 lg:pb-6">
              Novermger 18 2023
            </h2>
          </div>
          <div className=" lg:pt-10 ml-14 lg:ml-0">
            <h2 className="unique -mt-16 font-monts text-[12px] lg:text-[24px]">
              Demo day
            </h2>
            <p className="font-monts text-[14px]">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
            <h2 className="unique font-monts text-[12px] lg:text-[16px]  pt-8 lg:ml-0 lg:hidden">
              Novermger 18 2023
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
