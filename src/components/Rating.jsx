import React from "react";

const Rating = ({ rate }) => {
  const currentRate = parseInt(rate).toFixed(0);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < currentRate) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
    }
  }
  return (
    <div className="flex gap-1 mt-auto">{stars}</div>
  )
};

export default Rating;
