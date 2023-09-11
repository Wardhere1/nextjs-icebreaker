import React from "react";
import { render, screen } from "@testing-library/react";
import SumButton from "../Components/SumButton";
import { describe, it } from "node:test";

it("renders the the SumButton Component", () => {
  render(
    <SumButton
      label={"Calculate Sum"}
      onClick={(e: any) => void {}}
      disabled={true}
      loading={false}
    />
  ); //Arrange
  const myElem = screen.getByText("Calculate Sum"); // Act
  expect(myElem).toBeInTheDocument(); //Assert
});
