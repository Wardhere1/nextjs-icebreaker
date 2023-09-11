import React, { Dispatch } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";

interface NavbarProps {
  toggle: boolean;
  setToggle: any;
}

const Navbar: React.FC<NavbarProps> = ({ toggle, setToggle }) => {
  const handleToggle = () => {
    setToggle((prev: any) => !prev);
  };

  return (
    <div className="navbar-container">
      <img className="nav-logo" src="easyjet-logo.png"></img>
      {toggle ? (
        <BsToggleOn className="toggle" onClick={handleToggle} />
      ) : (
        <BsToggleOff className="toggle" onClick={handleToggle} />
      )}
    </div>
  );
};

export default Navbar;
