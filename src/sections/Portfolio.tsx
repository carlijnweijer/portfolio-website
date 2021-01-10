import React from "react";
import { Navigation } from "../components/Navigation";

interface PortfolioProps {
  id: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <div className="section" id={id} style={{ backgroundColor: "grey" }}>
      <div className="leftside">
        <div className="left-content">
          <h4 className="title">portfolio</h4>
        </div>
        <div className="navbar">
          <Navigation />
        </div>
      </div>
      <div className="rightside">
        <h3>subttile</h3>
        <p>text</p>
      </div>
    </div>
  );
};
