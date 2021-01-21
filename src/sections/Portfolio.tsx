import React from "react";
import { animated, interpolate, useSpring } from "react-spring";
import notebooks from "../assets/portfolioImages/notebooksCover.png";
import Studychoice from "../assets/portfolioImages/studychoiceHUB.png";
import winepairCover from "../assets/portfolioImages/winepairCover.png";
import css3Icon from "../assets/techicons/css3.svg";
import expressIcon from "../assets/techicons/express.svg";
import gitIcon from "../assets/techicons/git.svg";
import html5Icon from "../assets/techicons/html5.svg";
import javascriptIcon from "../assets/techicons/javascript.svg";
import nodeIcon from "../assets/techicons/node-dot-js.svg";
import postgresIcon from "../assets/techicons/postgresql.svg";
import reactIcon from "../assets/techicons/react.svg";
import reduxIcon from "../assets/techicons/redux.svg";
import sassIcon from "../assets/techicons/sass.svg";
import typescriptIcon from "../assets/techicons/typescript.svg";
import { Navigation } from "../components/Navigation";
import { PortfolioItem } from "../components/PortfolioItem";
import "../styles/portfolio.scss";

interface PortfolioProps {
  id: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans = (x: number, y: number) =>
    `translate3d(${x / -10}px,${y / 20}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 550, friction: 140 },
  }));

  return (
    <div className="section portfolio-section" id={id}>
      <div className="leftside">
        <div
          className="left-content"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <h4 className="title">portfolio</h4>
          <animated.div
            className="tech-card"
            // @ts-ignore
            style={{ transform: interpolate(props.xy, trans) }}
          >
            <h5 className="tech-title">techstack</h5>
            <p className="tech-icons">
              <img
                src={javascriptIcon}
                alt="javascript"
                className="tech-icon"
              />
              <img
                src={typescriptIcon}
                alt="typescript"
                className="tech-icon"
              />
              <img src={reactIcon} alt="react" className="tech-icon" />
              <img src={reduxIcon} alt="redux" className="tech-icon" />
              <img src={nodeIcon} alt="node" className="tech-icon" />
              <img
                src={postgresIcon}
                alt="postgresqlicon"
                className="tech-icon"
              />
              <img src={expressIcon} alt="express" className="tech-icon" />
              <img src={html5Icon} alt="html5" className="tech-icon" />
              <img src={css3Icon} alt="css3" className="tech-icon" />
              <img src={sassIcon} alt="sass" className="tech-icon" />
              <img src={gitIcon} alt="git" className="tech-icon" />
            </p>
          </animated.div>
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
          title="Notebooks"
          subtitle="Notebooks is an app made to support the future students of the Codaisseur academy. With this app we've created a central place to save, read and share notes regarding the topics thaught in class."
          image={notebooks}
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
