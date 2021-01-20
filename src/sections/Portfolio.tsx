import React from "react";
import Studychoice from "../assets/portfolioImages/studychoiceHUB.png";
import winepairCover from "../assets/portfolioImages/winepairCover.png";
import { Navigation } from "../components/Navigation";
import { PortfolioItem } from "../components/PortfolioItem";
import "../styles/portfolio.scss";

interface PortfolioProps {
  id: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <div className="section portfolio-section" id={id}>
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
          title="Winepair"
          subtitle="Winepair is an app where you can find the perfect wine to pair with your dish. Or.. if you have a good wine to find a perfect dish to go with it!"
          image={winepairCover}
        />
        <PortfolioItem
          title="Studychoice HUB"
          subtitle="Studychoice HUB is a platform where scholars can learn about different studies from students. The app is made to help scholars make the best choice for them!"
          image={Studychoice}
        />
      </div>
    </div>
  );
};
