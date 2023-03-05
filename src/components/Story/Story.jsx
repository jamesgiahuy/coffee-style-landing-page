import React from "react";

const Story = () => {
  return (
    <div className="story ">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4 justify-center w-[95%] lg:w-[65%] mx-auto mb-24">
        <div className="basis-1/2 ">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover min-h-[350px]"
          >
            <source src="../videos/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="basis-1/2 text-center  lg:text-left lg:pl-6">
          <p className="text-[28px] font-normal tracking-wide leading-[40px] mb-5 mt-5 ">
            Even the all-powerful Pointing has no control about the blind texts.
          </p>
          <p className="text-base leading-[28px] mb-[15px] font-normal tracking-wide text-gray-400">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.
            <br /> Even the all-powerful Pointing has no control about the blind
            texts it is an almost unorthographic life One day however a small
            line of blind text by the name of Lorem Ipsum decided to leave for
            the far World of Grammar.
          </p>
          <div>
            <a
              href="#"
              className="mt-2 text-coffee-400 relative hjd-story-item "
            >
              Read full Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
