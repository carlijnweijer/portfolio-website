import React from "react";
import { Navigation } from "./Navigation";

interface SectionProps {
  id: string | undefined;
  title: string;
  subtitle: string;
  text: string;
  bgColor: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  text,
  bgColor,
}) => {
  return (
    <div className="section" id={id} style={{ backgroundColor: bgColor }}>
      <div className="leftside">
        <div className="left-content">
          <h4 className="title">{title}</h4>
        </div>
        <div className="navbar">
          <Navigation />
        </div>
      </div>
      <div className="rightside">
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
