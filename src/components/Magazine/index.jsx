import React from "react";

const Magazine = () => {
  return (
    <div className="coffee-magazine w-[95%] xl:w-[65%] mx-auto mb-24">
      <div className="container-magazines flex flex-col md:flex-row justify-center items-center gap-5 ">
        <div className="hjd-magazine-img mb-14 flex flex-col md:flex-row basis-1/2 gap-5 w-full h-full md:mb-0">
          <div className="h-[280px] w-full bg-[url('../public/image/magazines-1.jpg')] bg-no-repeat bg-cover bg-center"></div>
          <div className="basis-1/3 w-full flex flex-row md:flex-col  gap-5">
            <div className="h-[130px] w-full bg-[url('../public/image/magazines-2.jpg')] bg-no-repeat bg-cover bg-center"></div>
            <div className="h-[130px] w-full bg-[url('../public/image/magazines-3.jpg')] bg-no-repeat bg-cover bg-center"></div>
          </div>
        </div>

        <div className="hjd-magazine-post basis-1/2 pl-8 xl:pl-14">
          <p className="uppercase text-center md:text-left tracking-widest text-gray-500 font-medium text-xs  mb-4">
            Premium Offer
          </p>
          <p className="text-4xl text-center md:text-left mb-4">
            Get our Coffee Magazine
          </p>
          <p className="text-gray-500 text-center md:text-left leading-7 mb-4">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <div className="hjd-button uppercaser w-max mx-auto md:mx-0 bg-gray-900 text-white">
            start shopping
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
