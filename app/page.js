"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [yw, setYw] = useState("");
  useEffect(() => {
    console.log("yw:", yw);
  }, [yw]);
  const handleSubmit = (e) => {
    console.log("click yw:", yw);
  };
  return (
    <div className="bg-gray-50 min-h-screen border-amber-950">
      <input type="text" onChange={(e) => setYw(e.target.value)} />
      <button onClick={handleSubmit}>click</button>
    </div>
  );
}
