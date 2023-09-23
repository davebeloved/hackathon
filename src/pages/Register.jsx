import React, { useState } from "react";
import Image from "../assets/register.png";
import Image2 from "../assets/reg.png";
import Image3 from "../assets/reg2.png";
import Purple from "../assets/purplelens.png";
import RegisterNav from "../components/RegisterNav";
import Modal from "../components/Modal";
import axios from "axios";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [team_name, setTeam_name] = useState("");
  const [group_size, setGroup_size] = useState("");
  const [project_topic, setProject_topic] = useState("");
  const [category, setCategory] = useState("");
  const [privacy_policy, setPrivacy_policy] = useState();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          email,
          phone_number,
          team_name,
          group_size,
          project_topic,
          category,
          privacy_policy,
        }
      );

      console.log("sucesss");
      setIsOpen(true);
      setEmail("");
      setPhone_number("");
      setTeam_name("");
      setGroup_size("");
      setProject_topic("");
      category("");
      setPrivacy_policy(false);
    } catch (error) {
      // console.log(error)
    }
  };
  return (
    <>
      <div className="relative">
        <RegisterNav />
        <div className="px-1 lg:px-24 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
          <div className="relative">
            <img src={Purple} alt="" className="absolute z-10 -top-16" />
            <img src={Image} alt="registration image z-20 absolute" />
          </div>
          <div className="shd lg:p-10 p-5  w-full relative pb-7  lg:h-[630px] h-[800px]">
            <img
              src={Purple}
              alt=""
              className="absolute hidden lg:block -bottom-56 -right-56"
            />

            <h1 className="unique font-clash  text-[24px] lg:text-[32px] mb-8">
              Register
            </h1>
            <div className=" relative flex items-center font-monts text-[14px]">
              <p className="font-monts text-[12px] lg:text-[14px] mb-3">
                Be part of this movement{" "}
                <span className="unique">....................</span>
              </p>
              <img src={Image2} alt="" className="absolute left-48 -top-4" />
              <img src={Image3} alt="" className="absolute left-52 -top-4" />
            </div>
            <h1 className=" text-[16px] lg:text-[24px] font-monts mb-7">
              CREATE YOUR ACCOUNT
            </h1>
            <form className="absolute z-20 ">
              <div className="flex items-center gap-7 w-full flex-wrap">
                <div className="w-full lg:w-[45%] flex flex-col">
                  <label
                    htmlFor="team"
                    className="mb-2 font-monts text-[12px] lg:text-[14px]"
                  >
                    Team's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    onChange={(e) => setTeam_name(e.target.value)}
                    value={team_name}
                    className="w-full bg-transparent border p-3 px-5  rounded-sm mr-4 placeholder:text-[12px]"
                  />
                </div>
                <div className="w-full lg:w-[45%] flex flex-col">
                  <label
                    htmlFor="team"
                    className="mb-2 font-monts text-[12px] lg:text-[14px]"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setPhone_number(e.target.value)}
                    value={phone_number}
                    placeholder="Enter the your phone mumber"
                    className="w-full bg-transparent border p-3 px-5  rounded-sm mr-4 placeholder:text-[12px]"
                  />
                </div>
                <div className="w-full lg:w-[45%] flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 font-monts text-[12px] lg:text-[14px]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter the your email address"
                    className="w-full bg-transparent border p-3 px-5  rounded-sm mr-4 placeholder:text-[12px]"
                  />
                </div>
                <div className="w-full lg:w-[45%] flex flex-col">
                  <label
                    htmlFor="project"
                    className="mb-2 font-monts text-[12px] lg:text-[14px]"
                  >
                    Project Topic
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setProject_topic(e.target.value)}
                    value={project_topic}
                    placeholder="What is your group project topic"
                    className="w-full bg-transparent border p-3 px-5  rounded-sm mr-4 placeholder:text-[12px]"
                  />
                </div>
                <div className="w-[45%] lg:w-[45%] flex flex-col">
                  <label
                    htmlFor="category"
                    className="mb-2 font-monts text-[12px] lg:text-[14px]"
                  >
                    Category
                  </label>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    name="categoy"
                    className="w-full bg-transparent border p-3  rounded-sm placeholder:text-[12px]"
                  >
                    <option>Select your Category</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
                <div className="w-[45%] lg:w-[45%] flex flex-col">
                  <label
                    htmlFor="group size"
                    className="mb-2 font-monts text-[12px] lg:text-[14px]"
                  >
                    Group Size
                  </label>
                  <select
                    name="categoy"
                    onChange={(e) => setGroup_size(e.target.value)}
                    value={group_size}
                    className="w-full bg-transparent border p-3  rounded-sm placeholder:text-[12px]"
                  >
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-monts text-[10px] lg:text-[12px] italic chk mb-3">
                  Please review your registration details before submitting
                </p>
                <div className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    onChange={(e) => setPrivacy_policy(e.target.value)}
                    value={privacy_policy}
                  />
                  <p className="font-monts text-[10px] lg:text-[12px] ">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>
              </div>
              <button
                onClick={handleSubmitSignUp}
                className="btn block mx-auto  lg:w-full mt-5 font-monts lg:block"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal visible={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Register;
