import React from "react";
import CriteriaImg from "../assets/criteria.png";
import Arrrow from "../assets/arrow.png";
import Star from "../assets/starr.png";
import Star1 from "../assets/star1.png";
import Purple from "../assets/purple.png";
import Ellipse from "../assets/ecl.png";

const Criteria = () => {
  return (
    <div className="px-10 lg:px-24 py-32 gap-y-44 flex flex-col lg:flex-row items-center justify-around border-b navborder">
      <div className="w-[600px] relative mb-56 pb-20">
        <img src={Star} alt="" className="absolute -top-28 left-28" />
        <img src={Star} alt="" className="absolute top-52 left-72" />
        <img
          src={Ellipse}
          alt=""
          className="absolute hidden lg:block -top-10 z-10 left-16"
        />
        <img
          src={CriteriaImg}
          alt="the big idea"
          className="absolute z-20 top-0 w-[440px] ml-16  lg:w-full lg:ml-0"
        />
        <img
          src={Purple}
          alt="arrow"
          className="absolute -left-16 -bottom-[500px] lg:-bottom-[590px]"
        />
        {/* <img
          src={Star1}
          alt="arrow"
          className="absolute w-5 right-10 -bottom-[385px]"
        /> */}
      </div>
      <div className="lg:w-[500px] text-center lg:text-left relative">
        <h1 className="font-clash text-xl lg:text-3xl font-bold">
          Judging Criteria
        </h1>
        <h1 className="font-clash text-xl lg:text-3xl font-bold unique mb-3">
          Key attributes
        </h1>
        <div className="space-y-5">
          <p className="font-monts font-normal text-[14px]">
            <span className="Color"> Innovation and Creativity:</span> Evaluate
            the uniqueness and creativity of the solution. Consider whether it
            addresses a real-world problem in a novel way or introduces
            innovative features.
          </p>

          <p className="font-monts font-normal text-[14px]">
            <span className="Color">Functionality:</span> Assess how well the
            solution works. Does it perform its intended functions effectively
            and without major issues? Judges would consider the completeness and
            robustness of the solution.
          </p>

          <p className="font-monts font-normal text-[14px]">
            <span className="Color">Impact and Relevance:</span> Determine the
            potential impact of the solution in the real world. Does it address
            a significant problem, and is it relevant to the target audience?
            Judges would assess the potential social, economic, or environmental
            benefits. Copy
          </p>

          <p className="font-monts font-normal text-[14px]">
            <span className="Color">Technical Complexity:</span> Evaluate the
            technical sophistication of the solution. Judges would consider the
            complexity of the code, the use of advanced technologies or
            algorithms, and the scalability of the solution.
          </p>

          <p className="font-monts font-normal text-[14px]">
            <span className="Color">Adherence to Hackathon Rules:</span> Judges
            will Ensure that the team adhered to the rules and guidelines of the
            hackathon, including deadlines, use of specific technologies or
            APIs, and any other competition-specific requirements.
          </p>
        </div>
        <button className="btn font-monts mt-10">Read More</button>
      </div>
    </div>
  );
};

export default Criteria;
