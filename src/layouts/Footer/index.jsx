import React from "react";

const Footer = () => {
  return (
    <footer className="w-[95%] xl:w-[65%] mx-auto pb-24 text-gray-500 text-sm">
      <div className="flex flex-col text-center md:flex-row md:text-left  gap-8 ">
        <div className="basis-2/6">
          <div className="font-bold text-xl mb-4 text-gray-800">
            Coffee Style.
          </div>
          <div className=" md-8 md:mb-20">
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </div>
          <div className="text-gray-400 hover:text-coffee-400 duration-75 cursor-pointer">
            CoffeeStyle Inc. © 1996
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-widest text-gray-500 mb-8  md:mb-4">
            Menu
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <a href="" className="hover:text-coffee-400">
                Home
              </a>
            </div>
            <div>
              <a href="" className="hover:text-coffee-400">
                Our Products
              </a>
            </div>
            <div>
              <a href="" className="hover:text-coffee-400">
                Contact
              </a>
            </div>
            <div>
              <a href="" className="hover:text-coffee-400">
                About
              </a>
            </div>
            <div>
              <a href="" className="hover:text-coffee-400">
                Style Guide
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-widest text-gray-500 mb-4">
            Follow Us
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <a href="" className="hover:text-coffee-400">
                Facebook
              </a>
            </div>
            <div>
              <a href="" className="hover:text-coffee-400">
                Instagram
              </a>
            </div>
            <div>
              <a href="" className="hover:text-coffee-400">
                Pinterest
              </a>
            </div>
            <div>
              <a href="" className="hover:text-coffee-400">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="basis-2/6">
          <div className="uppercase font-semibold tracking-widest text-gray-500 mb-4">
            Contact Us
          </div>
          <div className="mb-4">We're Always Happy to Help</div>
          <div className="mb-16 hover:text-coffee-400 duration-200 cursor-pointer text-[24px] font-normal text-gray-800 tracking-wide">
            hogiahuy2412@gmail.com
          </div>
          <div className="text-gray-300 hover:text-coffee-400 duration-200 cursor-pointer">
            Powered by Webflow
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
