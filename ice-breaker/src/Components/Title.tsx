import React from "react";

interface TitlePorps {
  title: string;
}

const Title: React.FC<TitlePorps> = ({ title }) => {
  return (
    <div className="Title-container">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
