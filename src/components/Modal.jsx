import React from "react";
import Congrat from "../assets/congratulation.png";

const Modal = ({ setIsOpen, visible }) => {
  if (!visible) return null;

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm h-[200vh] w-screen z-20 flex items-start justify-center py-32">
      <div className="border rounded-sm flex flex-col gap-y-8 p-10">
        <img src={Congrat} alt="" className="w-72 block mx-auto" />
        <div className="text-center">
          <h2 className="font-monts text-[14px] lg:text-[32px]">
            Congratulations
          </h2>
          <h2 className="font-monts text-[14px] lg:text-[32px]">
            you havve successfully Registered
          </h2>
          <p className="font-monts text-[12px]">
            Yes, it was easy and you did it
          </p>
          <p className="font-monts text-[12px]">
            check your mail box for next step
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="btn block mx-auto  lg:w-full font-monts lg:block"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Modal;
