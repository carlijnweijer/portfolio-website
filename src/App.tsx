import React, { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { About } from "./sections/About";
import { Portfolio } from "./sections/Portfolio";
import { Socials } from "./sections/Socials";
import "./styles/styles.scss";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="App">
      <div className="section top-section">
        <h1>Hi, I'm Carlijn</h1>
        <h4>Junior Web Developer</h4>
        <div className="top-navbar">
          <Navigation />
        </div>
        <div className="scroll-to-top">
          {isVisible && (
            <div onClick={scrollToTop}>
              <img
                src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png"
                alt="Go to top"
              />
            </div>
          )}
        </div>
      </div>
      <About id="section2" />
      <Portfolio id="section3" />
      <Socials id="section4" />
    </div>
  );
}

export default App;
