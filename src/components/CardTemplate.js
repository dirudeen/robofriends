import React from "react";

function CardTemplate({ name, email, id }) {
  return (
    <div className="bg-blue-400 p-2 m-2 inline-block rounded-md shadow-lg transition-all hover:scale-105 hover:transition-all active:scale-90 text-center">
      <img src={`https://robohash.org/${id}?150x150`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default CardTemplate;
