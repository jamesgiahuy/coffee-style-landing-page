import React from "react";

const Subheadline = (props) => {
  const { content } = props;
  return (
    <div className="w-full flex items-center justify-center mt-5 mb-24">
      <div className="sub-headline-label uppercase text-center tracking-widest text-gray-500 font-medium text-[13px] font-medium relative">
        {content}
      </div>
    </div>
  );
};

export default Subheadline;
