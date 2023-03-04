import React from "react";

const FeatureMugs = () => {
  return (
    <div className="feature-mugs  sm:w-[95%] lg:w-[65%]  mx-auto mb-24">
      <div className="grid grid-cols-1 gap8 lg:grid-cols-2 lg:gap-4">
        <div className="containter">
          <div className=" h-[540px] bg-[url('../public/image/feature-mug-img1.jpg')] bg-cover bg-no-repeat bg-center">
            <a href="#">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-700 relative group">
                <div className="absolute w-[100px] bg-white text-center text-coffee-400 font-semibold py-2 px-4 top-3 right-3">
                  On Sale.
                </div>
                <div
                  className="absolute bottom-3 left-[50%] translate-x-[-50%] uppercase bg-white w-11/12 hidden group-hover:block group-hover:animate-fadeIn text-gray-900 tracking-wider py-4 px-8 text-sm text-center font-semibold cursor-pointer hover:opacity-95
                  "
                >
                  Explore Mug
                </div>
              </div>
            </a>
          </div>
          <div className="flex items-center justify-center text-center flex-col gap-2 mt-8">
            <p className="text-xl mb-3 hover:text-coffee-400 hover:transition-all cursor-pointer">
              Pink Premium Ceramic
            </p>
            <p className="text-lg text-coffee-400">$ 99.00 USD</p>
          </div>
        </div>
        <div className="containter">
          <div className=" h-[540px] bg-[url('../public/image/feature-mug-img2.jpg')] bg-cover bg-no-repeat bg-center">
            <a href="#">
              <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-700 relative group">
                <div className="absolute w-[100px] bg-white text-center text-coffee-400 font-semibold py-2 px-4 top-3 right-3">
                  On Sale.
                </div>
                <div
                  className="absolute bottom-3 left-[50%] translate-x-[-50%] uppercase bg-white w-11/12 hidden group-hover:block group-hover:animate-fadeIn text-gray-900 tracking-wider py-4 px-8 text-sm text-center font-semibold cursor-pointer hover:opacity-95
                  "
                >
                  Explore Mug
                </div>
              </div>
            </a>
          </div>
          <div className="flex items-center justify-center text-center flex-col gap-2 mt-8">
            <p className="text-xl mb-3 hover:text-coffee-400 hover:transition-all cursor-pointer">
              Pink Premium Ceramic
            </p>
            <p className="text-lg text-coffee-400">$ 99.00 USD</p>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default FeatureMugs;
