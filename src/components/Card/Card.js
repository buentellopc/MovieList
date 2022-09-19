import React from "react";

export default function Card({ movie }) {
  return (
    <div>
      <h2>{`#${movie.ranking} - ${movie.title}`}</h2>
      <img src={movie.img.src} alt={movie.img.alt} width="200"></img>
      <p>{`Distributor: ${movie.distributor}`}</p>
      <p>{`Amount: ${movie.amount}`}</p>
    </div>
  );
}
