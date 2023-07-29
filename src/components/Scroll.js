import React from "react";

const Scroll = ({ children }) => {
  return <div className=" overflow-y-scroll h-[26rem]">{children}</div>;
};

export default Scroll;
