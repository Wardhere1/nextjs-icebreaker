import React, { Dispatch } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/easyjet-logo.png";

export interface NavbarProps {
  toggle: boolean;
  setToggle: any;
}

const Navbar: React.FC<NavbarProps> = ({ toggle, setToggle }) => {
  const handleToggle = () => {
    setToggle((prev: any) => !prev);
  };

  return (
    <div className="navbar-container">
      <a href="https://www.easyjet.com/en">
        <Image
          className="nav-logo"
          src={logo}
          width={30}
          height={30}
          alt="logo"
        />
      </a>
      {toggle ? (
        <BsToggleOn className="toggle" onClick={handleToggle} />
      ) : (
        <BsToggleOff className="toggle" onClick={handleToggle} />
      )}
    </div>
  );
};

export default Navbar;
