import React from "react";

const Slider = () => {
  return (
    <div className="slider bg-[url('../public/image/background-slider.jpg')] w-full h-[530px] bg-cover bg-no-repeat bg-bottom mb-24">
      <div className="w-full h-full bg-opacity-40 flex items-center justify-center bg-gray-900">
        <div className="text-white text-center w-full mx-8">
          <p className="uppercase font-bold text-xs tracking-widest	opacity-80 leading-[18px] ">
            BEST PLACE TO BUY COFFEE
          </p>
          <p className="text-5xl leading-[60px] mb-[10px] mt-[10px]">
            Coffee Mugs
          </p>
          <p className="opacity-90 text-lg mb-7">
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </p>
          <div className="uppercase text-xs font-bold tracking-widest leading-[18px] px-[24px] py-[18px] bg-slate-50 inline-block text-black cursor-pointer hover:bg-opacity-95 transition-all">
            Explore our products
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
