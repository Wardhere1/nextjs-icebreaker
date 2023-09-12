import React from "react";

interface HeaderPorps {
  Header: string;
}

const Header: React.FC<HeaderPorps> = ({ Header }) => {
  return <h1 className="Header-container">{Header}</h1>;
};

export default Header;
