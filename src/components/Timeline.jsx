import React from "react";
import Star1 from "../assets/starr.png";
import Star2 from "../assets/star1.png";

const Timeline = () => {
  return (
    <div className="px-10 lg:px-24 py-16 ">
      <div className="text-center">
        <h2 className="font-clash text-xl lg:text-[32px]">Timeline</h2>
        <p className="text-[13px] lg:text-[14px] font-monts">
          Here is the breakdown of the time we anticipate <br></br> using for
          the upcoming event.
        </p>
      </div>

      <div className="lg:flex  justify-around mt-16 relative">
        <div className="lg:w-[35.3%] mt-28 space-y-28 relative">
          <div className="lg:text-right ml-10 lg:ml-0 ">
            <img src={Star1} alt="star" className="absolute -top-24 left-32" />
            <h2 className="unique font-monts text-[12px] lg:text-[24px]">
              Hackathon Announcement
            </h2>
            <p className="font-monts text-[12px] lg:text-[16px]">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <h2 className="unique font-monts text-[12px] lg:text-[24px]">
              November 18 2023
            </h2>
          </div>

          <div className="hidden lg:block text-right pt-2">
            <h2 className="unique font-monts text-[12px] lg:text-[24px]">
              November 18 2023
            </h2>
          </div>

          <div className="text-right pt-4">
            <h2 className="unique font-monts text-[12px] lg:text-[24px]">
              Hackathon Announcement
            </h2>
            <p className="font-monts text-[14px]">
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <div className="text-right pt-7">
            <h2 className="unique font-monts">November 18 2023</h2>
          </div>
          <div className="text-right pt-3">
            <h2 className=" font-monts unique">
              Getlinked Hackathon 1.0 Officialy Begins
            </h2>
            <p className="font-monts text-[14px]">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="text-right pt-0 font-monts">
            <h2 className="unique">November 18 2023</h2>
          </div>
          <img src={Star1} alt="star" className="absolute bottom-10 left-0" />
        </div>

        <div className="flex flex-col absolute left-0 lg:relative items-center gap-y-2 ">
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
        <div className="w-[33.3%] mt-32 space-y-28 relative">
          <div>
            <h2 className="unique font-monts hidden lg:block">
              Novermger 18 2023
            </h2>
          </div>
          <div>
            <h2 className="-mt-64 unique font-monts">
              Team Registration begins
            </h2>
            <p className="font-monts text-[14px]">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className="">
            <img
              src={Star2}
              alt="star"
              className="absolute  right-32 w-5 top-[300px]"
            />

            <h2 className="unique font-monts">Novermger 18 2023</h2>
          </div>
          <div className="pt-3">
            <h2 className="unique font-monts">
              Announcement of the accepted teams and ideas
            </h2>
            <p className="font-monts text-[14px]">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <div className="pt-4">
            <h2 className="unique font-monts">Novermger 18 2023</h2>
          </div>
          <div className="pt-0">
            <h2 className="unique font-monts">Demo day</h2>
            <p className="font-monts text-[14px]">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;