import React from "react";
import Subheadline from "../Subheadline";

const Subcribe = () => {
  return (
    <div className="subcribe-us h-[350px] bg-[#1d1f2e] mb-24 flex flex-col justify-center items-center ">
      <div className="w-full flex items-center justify-center mb-6">
        <div className="sub-headline-label uppercase text-center tracking-widest text-[13px] font-medium relative text-[#fff]">
          Sign up and get free coffee bags
        </div>
      </div>
      <p className="text-4xl text-white mb-6">Coffee Updates</p>
      <div className="hjd-form">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="hjd-form-item">
            <input
              type="email"
              placeholder="huyjamesdev@gmail.com"
              className="px-6 py-4 w-[350px] bg-inherit border-[1px] border-gray-700 outline-none text-white leading-5 hover:border-gray-300 transition-all duration-500 focus:border-gray-300 placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold"
            />
          </div>
          <div className="hjd-form-item w-[100%]">
            <button
              type="submit"
              className="hjd-button bg-white w-full text-gray-900  md:w-max max-h-[54px]"
            >
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
