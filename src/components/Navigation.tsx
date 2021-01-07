import React from "react";
import { Link } from "react-scroll";
import "../styles/components.scss";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Top Section
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              about Section
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              portfolio Section
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              footer Section
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
