import React from "react";
import CardTemplate from "./CardTemplate";

const CardLists = ({ robots }) => {
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
