import React from "react";

const Story = () => {
  return (
    <div className="story ">
      <div className="flex items-center justify-center ">
        <div className="text-center px-16 md:px-32 lg:px-64 xl:px-80 py-32 ">
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
              href=""
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
