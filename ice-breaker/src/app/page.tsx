"use client";
import { useState, useEffect } from "react";
import handler from "@/pages/api/total";
import TextField from "@/Components/TextField";
import Header from "@/Components/Header";
import { error } from "console";
import Navbar from "@/Components/Navbar";

interface ApiResponse {
  sum: number;
}

export default function Home() {
  const [arg1, setArg1] = useState<number | "">("");
  const [arg2, setArg2] = useState<number | "">("");
  const [sum, setSum] = useState<number | null>(null);
  const [arg1Error, setArg1Error] = useState<boolean>(false);
  const [arg2Error, setArg2Error] = useState<boolean>(false);
  const [toggle, setToggle] = useState(false);

  const calculateTotal = async (e: any) => {
    // e.preventDefault();
    //reseting validation
    setArg1Error(false);
    setArg2Error(false);

    const response = await fetch(`/api/total?arg1=${arg1}&arg2=${arg2}`);
    console.log(response);
    const data: ApiResponse = await response.json();
    console.log(data);
    setSum(data.sum as number);
  };

  const validateInput = () => {
    if (!arg1 || isNaN(arg1)) {
      setArg1Error(true);
    } else {
      setArg1Error(false);
    }
    if (!arg2 || isNaN(arg2)) {
      setArg2Error(true);
    } else {
      setArg2Error(false);
    }
  };

  console.log(`arg1: ${arg1}`);
  console.log(`arg2: ${arg2}`);
  console.log(`sum: ${sum}`);

  return (
    <div className={toggle ? "dark-mode container" : "light-mode container"}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Header title="EasyJet Ice-breaker" subtitle="Enter your number" />
      <div className="inner-content-container">
        {/* {arg1Error && <p style={{ color: "red" }}>Invalid input</p>} */}
        <TextField
          label="Number 1"
          type="Number"
          value={arg1}
          onChange={(newValue) => setArg1(newValue)}
        />
        {/* style={{ borderColor: arg1Error ? "red" : "initial" }} */}
        <p>+</p>
        <TextField
          label="Number 2"
          type="Number"
          value={arg2}
          onChange={(newValue) => setArg2(newValue)}
        />
        {arg2Error && <p style={{ color: "red" }}>Invalid input</p>}
        <button onClick={calculateTotal} disabled={!arg1 || !arg2}>
          sum-up
        </button>
      </div>
      <p>Sum: {sum}</p>
    </div>
  );
}
