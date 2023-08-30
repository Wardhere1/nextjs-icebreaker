import React from "react";

interface HeaderPorps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderPorps> = ({ title, subtitle }) => {
  return (
    <div className="Header-contiainer">
      <h1> {title}</h1>
      <h2> {subtitle} </h2>
    </div>
  );
};

export default Header;
