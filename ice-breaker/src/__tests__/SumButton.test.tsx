import React from "react";
import { render, screen } from "@testing-library/react";
import SumButton from "../Components/SumButton";
import { describe, it } from "node:test";
import { toBeDisabled } from "@testing-library/jest-dom/matchers";
describe("sum button test", () => {
  it("renders the SumButton Component", () => {
    render(
      <SumButton
        label={"Calculate"}
        onClick={(e: any) => void {}}
        disabled={true}
        loading={false}
      />
    ); //Arrange
    const myElem = screen.getByText("Calculate"); // Act
    expect(myElem).toBeInTheDocument(); //Assert
  });
  // it("it is disabled on initial render", () => {
  //   render(
  //     <SumButton
  //       label={"Calculate"}
  //       onClick={(e: any) => void {}}
  //       disabled={true}
  //       loading={false}
  //     />
  //   ); // Arrange
  //   const myElem = (
  //     <SumButton
  //       label={"Calculate"}
  //       onClick={(e: any) => void {}}
  //       disabled={true}
  //       loading={false}
  //     />
  //   ); //Assert
  //   expect(<SumButton />).toBeDisabled();
  // });
  // it(" Loading prop is set to false on initial render", () => {
  //   //Arrange
  //   render(
  //     <SumButton
  //       label={"Calculate"}
  //       onClick={(e: any) => void {}}
  //       disabled={true}
  //       loading={false}
  //     />
  //   ); //Act
  //   const myElem = (
  //     <SumButton
  //       label={"Calculate"}
  //       onClick={(e: any) => void {}}
  //       disabled={true}
  //       loading={false}
  //     />
  //   ); // Assert
  //   expect(myElem.props.loading).toBeFalsy();
  // });
});
