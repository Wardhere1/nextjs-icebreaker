"use client";
import { useState } from "react";

export default function Home() {
  const [arg1, setArg1] = useState<number | "">("");
  const [arg2, setArg2] = useState<number | "">("");
  const [sum, setSum] = useState<number | null>(null);

  const calculateSum = async () => {
    const response = await fetch(`/api/sum?arg1=${arg1}&arg2=${arg2}`);
    const data = await response.json();
    setSum(data.sum);
  };

  return (
    <div className="content-container">
      <h1> Ice breaker sum-up</h1>
      <input
        type="number"
        placeholder="Enter number 1"
        value={arg1}
        onChange={(e) => setArg1(Number(e.target.value))}
      ></input>
      <input
        type="number"
        placeholder="Enter number 2"
        value={arg2}
        onChange={(e) => setArg2(Number(e.target.value))}
      ></input>
      <button onClick={calculateSum}>sum-up</button>
      <p>Sum:{sum}</p>
    </div>
  );
}
