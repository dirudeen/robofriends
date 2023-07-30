import React from "react";
import CardTemplate from "./CardTemplate";

const CardLists = ({ robots }) => {
  if (true) {
    throw new Error("noooooo this is bad");
  }
  return (
    <div className="px-6">
      {robots.map((user, i) => {
        return (
          <CardTemplate
            key={i}
            id={i}
            name={user.name}
            email={user.email}
          ></CardTemplate>
        );
      })}
    </div>
  );
};

export default CardLists;
