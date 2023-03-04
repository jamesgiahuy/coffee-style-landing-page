import React from "react";

const LifeStory = () => {
  return (
    <div className="life-stories w-[95%] xl:w-[65%] mx-auto mb-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-y-10 ">
        <div className="containter">
          <div className=" h-[300px] bg-[url('../public/image/life-img-3.jpg')] bg-cover bg-no-repeat bg-center">
            <a href="#">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-700 relative group">
                <div
                  className=" uppercase absolute bottom-3 left-[50%] translate-x-[-50%] uppercase bg-white w-11/12 hidden group-hover:block group-hover:animate-fadeIn text-gray-900 tracking-wider py-4 px-8 text-sm text-center font-semibold cursor-pointer hover:opacity-95
                  "
                >
                  Read the full story
                </div>
              </div>
            </a>
          </div>
          <div className="my-6 text-left">
            <p className=" text-left text-xl mb-3 hover:text-coffee-400 hover:transition-all cursor-pointer">
              Health Check: why do I get a headache when I haven't had my
              coffee?
            </p>
            <p className="text-gray-500 leading-7 mb-3 ">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
            <p className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
              October , 2018
            </p>
          </div>
        </div>
        <div className="containter">
          <div className=" h-[300px] bg-[url('../public/image/life-img.jpg')] bg-cover bg-no-repeat bg-center">
            <a href="#">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-700 relative group">
                <div
                  className=" uppercase absolute bottom-3 left-[50%] translate-x-[-50%] uppercase bg-white w-11/12 hidden group-hover:block group-hover:animate-fadeIn text-gray-900 tracking-wider py-4 px-8 text-sm text-center font-semibold cursor-pointer hover:opacity-95
                  "
                >
                  Read the full story
                </div>
              </div>
            </a>
          </div>
          <div className="my-6 text-left">
            <p className=" text-left text-xl mb-3 hover:text-coffee-400 hover:transition-all cursor-pointer">
              How long does a cup of coffee keep you awake?
            </p>
            <p className="text-gray-500 leading-7 mb-3 ">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
            <p className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
              October , 2018
            </p>
          </div>
        </div>
        <div className="containter">
          <div className=" h-[300px] bg-[url('../public/image/life-img-2.jpg')] bg-cover bg-no-repeat bg-center">
            <a href="#">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-700 relative group">
                <div
                  className=" uppercase absolute bottom-3 left-[50%] translate-x-[-50%] uppercase bg-white w-11/12 hidden group-hover:block group-hover:animate-fadeIn text-gray-900 tracking-wider py-4 px-8 text-sm text-center font-semibold cursor-pointer hover:opacity-95
                  "
                >
                  Read the full story
                </div>
              </div>
            </a>
          </div>
          <div className="my-6 text-left">
            <p className=" text-left text-xl mb-3 hover:text-coffee-400 hover:transition-all cursor-pointer">
              Recent research suggests that heavy coffee drinkers may reap
              health benefits.
            </p>
            <p className="text-gray-500 leading-7 mb-3 ">
              It is a paradisematic country, in which roasted parts. Vel qui et
              ad voluptatem.
            </p>
            <p className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
              October , 2018
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStory;
