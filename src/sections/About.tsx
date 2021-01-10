import React from "react";
import { Navigation } from "../components/Navigation";

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <div className="section" id={id}>
      <div className="leftside">
        <div className="left-content">
          <h4 className="title">about me</h4>
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
