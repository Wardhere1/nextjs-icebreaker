"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import handler from "@/pages/api/total";
import TextField from "@/Components/TextField";
import Header from "@/Components/Header";
// import { error } from "console";
import Navbar from "@/Components/Navbar";
import SumButton from "@/Components/SumButton";

interface ApiResponse {
  sum: number;
}

export default function Home() {
  const [arg1, setArg1] = useState<number | "">("");
  const [arg2, setArg2] = useState<number | "">("");
  const [sum, setSum] = useState<number | "">("");
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isValid, setIsValid] = useState<boolean>(true);

  const calculateTotal = useCallback(
    async (e: any) => {
      setIsLoading(true);
      const response = await fetch(`/api/total?arg1=${arg1}&arg2=${arg2}`);
      console.log(response);
      const data: ApiResponse = await response.json();
      console.log(data);
      setSum(data.sum as number);
      setIsLoading(false);
    },
    [arg1, arg2]
  );

  const isValid = useMemo(() => {
    return !arg1 || isNaN(arg1);
  }, [arg1]);

  const isValid2 = useMemo(() => {
    return !arg2 || isNaN(arg2);
  }, [arg2]);

  // const isButtonDisabled = arg1 === 0 && arg2 === 0;

  return (
    <div className={toggle ? "dark-mode container" : "light-mode container"}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div className="inner-content-container">
        <Header title="EasyJet Ice-breaker" subtitle="Enter your number" />
        {/* {arg1Error && <p style={{ color: "red" }}>Invalid input</p>} */}
        <div className="input-fields">
          <TextField
            // label="Number 1"
            type="Number"
            value={arg1}
            onChange={(newValue) => setArg1(newValue as "")}
            isValid={isValid}
          />
          {/* style={{ borderColor: arg1Error ? "red" : "initial" }} */}
          <h1 className="plus-sign"> + </h1>
          <TextField
            // label="Number 2"
            type="Number"
            value={arg2}
            onChange={(newValue) => setArg2(newValue as "")}
            isValid={isValid2}
          />
          {/* {arg2Error && <p style={{ color: "red" }}>Invalid input</p>} */}
        </div>
        <SumButton
          label="Calculate Sum"
          onClick={calculateTotal}
          disabled={!arg1 || !arg2}
          loading={isLoading}
        />
        {!arg1 || !arg2 ? "" : <h2>{`sum: ${sum}`}</h2>}
      </div>
    </div>
  );
}
