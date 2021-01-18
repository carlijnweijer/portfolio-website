import React from "react";
import { Navigation } from "../components/Navigation";
import { PortfolioItem } from "../components/PortfolioItem";

interface PortfolioProps {
  id: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <div className="section" id={id}>
      <div className="leftside">
        <div className="left-content">
          <h4 className="title">portfolio</h4>
        </div>
        <div className="navbar">
          <Navigation />
        </div>
      </div>
      <div className="rightside">
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
        <PortfolioItem
          title="studychoicehub"
          subtitle="a platform where scholars and students can connect"
        />
      </div>
    </div>
  );
};
