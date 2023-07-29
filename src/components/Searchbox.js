import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="my-8 ">
      <input
        onChange={searchChange}
        type="search"
        placeholder="Search Robots"
        className=" outline-0 p-3 rounded-md border-2 border-solid border-blue-500 bg-blue-200 placeholder:text-black focus:outline-none"
      ></input>
    </div>
  );
};

export default Searchbox;
