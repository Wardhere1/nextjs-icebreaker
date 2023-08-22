"use client";
import { useState, useEffect } from "react";
import handler from "@/pages/api/total";

interface ApiResponse {
  sum: number;
}

export default function Home() {
  const [arg1, setArg1] = useState<number | "">("");
  const [arg2, setArg2] = useState<number | "">("");
  const [sum, setSum] = useState<number | null>(null);

  const calculateTotal = async () => {
    const response = await fetch(`/api/total?arg1=${arg1}&arg2=${arg2}`);
    console.log(response);
    const data: ApiResponse = await response.json();
    console.log(data);
    setSum(data.sum as number);
  };

  console.log(`arg1: ${arg1}`);
  console.log(`arg2: ${arg2}`);
  console.log(`sum: ${sum}`);

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
      <button onClick={calculateTotal}>sum-up</button>
      <p>Sum:{sum}</p>
    </div>
  );
}
