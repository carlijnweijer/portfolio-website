import React from "react";
import { Navigation } from "../components/Navigation";

interface SocialsProps {
  id: string;
}

export const Socials: React.FC<SocialsProps> = ({ id }) => {
  return (
    <div className="section" id={id} style={{ backgroundColor: "lightblue" }}>
      <div className="leftside">
        <div className="left-content">
          <h4 className="title">socials</h4>
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
