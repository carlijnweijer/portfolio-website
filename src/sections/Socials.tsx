import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import "../styles/socials.scss";

interface SocialsProps {
  id: string;
}

export const Socials: React.FC<SocialsProps> = ({ id }) => {
  return (
    <div className="socials-section" id={id}>
      <h1>find me on...</h1>
      <div className="icons">
        <a
          href="http://github.com/carlijnweijer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "50px", height: "50px" }}
        >
          <img src={github} alt="githubicon" />
        </a>
        <a
          href="http://linkedin.com/in/carlijnvandeweijer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "50px", height: "50px" }}
        >
          <img src={linkedin} alt="linkedinicon" />
        </a>
      </div>

      {/* <div className="navbar">
        <Navigation />
      </div> */}
    </div>
  );
};
