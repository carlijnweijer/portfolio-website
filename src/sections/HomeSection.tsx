import React from "react";
import "../styles/sections.scss";

interface HomeSectionProps {}

export const HomeSection: React.FC<HomeSectionProps> = () => {
  return (
    <div className="section home" id="section1">
      <h1>i'm home</h1>
    </div>
  );
};
