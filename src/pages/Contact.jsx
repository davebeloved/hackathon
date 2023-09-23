import React, { useState } from "react";
import SocialMedia from "../assets/socialmedia.png";
import Image2 from "../assets/reg.png";
import Image3 from "../assets/reg2.png";
import Purple from "../assets/purplelens.png";
import NavBar from "../components/NavBar";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          email,
          phone_number,
          first_name,
          message,
        }
      );

      console.log("sucesss");
      setEmail("");
      setFirst_name("");
      setPhone_number("");
      setMessage("");
    } catch (error) {
      // console.log(error)
    }
  };
  return (
    <div className="">
      <NavBar />
      <div className="px-6 lg:px-24 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <div className="relative  ">
          <img src={Purple} alt="" className="absolute z-10 -top-16" />
          <div className="space-y-6 lg:ml-48 lg:mt-32 text-center lg:text-left">
            <h1 className="font-clash text-[20px] lg:text-[32px] unique">
              Get in touch
            </h1>
            <div>
              <h3 className="font-mono text-[12px] lg:text-[14px]">Contact</h3>
              <h3 className="font-mono text-[12px] lg:text-[14px]">
                Information
              </h3>
            </div>
            <div>
              <h3 className="font-mono text-[12px] lg:text-[14px]">
                27, Alara Street
              </h3>
              <h3 className="font-mono text-[12px] lg:text-[14px]">
                Yaba 100012
              </h3>
              <h3 className="font-mono text-[12px] lg:text-[14px]">
                Lagos State
              </h3>
            </div>
            <div>
              <h3 className="font-mono text-[12px] lg:text-[14px]">
                Call Us : 07067981819
              </h3>
            </div>
            <div>
              <h3 className="font-mono text-[12px] lg:text-[14px]">
                We are open from Monday-Friday <br /> 08:99am-05:00pm
              </h3>
            </div>
            <div>
              <h3 className="font-mono pb-3 text-[12px] unique lg:text-[14px]">
                Share on
              </h3>
              <img src={SocialMedia} alt="" className="block mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
        <div className="shd p-10 w-full relative">
          <img
            src={Purple}
            alt=""
            className="absolute hidden lg:block -bottom-56 -right-56"
          />

          <h2 className="font-clash unique text-24px] lg:text-[32px]">
            Questions or need assistance?
          </h2>
          <h2 className="font-clash unique text-24px] lg:text-[32px] mb-5">
            Let us know about it
          </h2>

          <form className="">
            <div className="flex flex-col items-center gap-7 w-full flex-wrap">
              <input
                type="text"
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
                placeholder="First Name"
                className="bg-transparent w-full border rounded-sm p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="bg-transparent w-full border rounded-sm p-3 mb-3"
              />
              <input
                type="text"
                placeholder="Phone number"
                onChange={(e) => setPhone_number(e.target.value)}
                value={phone_number}
                className="bg-transparent w-full border rounded-sm p-3 mb-3"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="10"
                placeholder="Message"
                className="bg-transparent w-full border rounded-sm p-3 mb-3"
              ></textarea>
              <button
                onClick={handleSubmitSignUp}
                className="btn block mx-auto font-monts lg:block"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
