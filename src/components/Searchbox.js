import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="my-8">
      <input onChange={searchChange} type="search" placeholder="search"></input>
    </div>
  );
};

export default Searchbox;
