import React from "react";

const Searchbox = ({ searchChange }) => {
  return (
    <div className="my-8">
      <input
        onChange={searchChange}
        type="search"
        placeholder="search"
        className=" outline-0 p-3 rounded-md border-2 border-solid border-blue-500 bg-blue-200"
      ></input>
    </div>
  );
};

export default Searchbox;
