"use client";
import React, { useEffect } from "react";

function Story({ img, username }) {
  useEffect(() => {
    // console.log(img);
  }, img);
  return (
    <div>
      <img src={img} alt={username} />
      <p>{username}</p>
    </div>
  );
}

export default Story;
