import React from "react";
import { Link } from "react-scroll";
import "../styles/styles.scss";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav>
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              duration={1000}
            >
              about me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
            >
              portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              duration={1000}
            >
              footer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
