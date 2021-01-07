import React from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { Navigation } from "./components/Navigation";
import { Section } from "./components/Section";
import "./styles/styles.scss";

function App() {
  // function onChange(isVisible: boolean) {
  //   console.log("Element is now %s", isVisible ? "visible" : "hidden");
  // }

  return (
    <div className="App">
      <div className="section top-section">
        <h1>big title</h1>
        <div className="top-navbar">
          <Navigation />
        </div>
      </div>
      {/* <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            from={{ opacity: isVisible ? 0 : 1 }}
            to={{ opacity: isVisible ? 1 : 0 }}
          >
            {(props) => <div style={props}>hello</div>}
          </Spring>
        )}
      </VisibilitySensor> */}
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring from={{ opacity: 0 }} to={{ opacity: isVisible ? 1 : 0 }}>
            {(props) => (
              <div style={props}>
                <Section
                  id="section2"
                  title="about"
                  subtitle="subtitle"
                  text="some piece of text"
                  bgColor="white"
                />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring from={{ opacity: 0 }} to={{ opacity: isVisible ? 1 : 0 }}>
            {(props) => (
              <div style={props}>
                <Section
                  id="section3"
                  title="portfolio"
                  subtitle="subtitle"
                  text="some piece of text"
                  bgColor="white"
                />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring from={{ opacity: 0 }} to={{ opacity: isVisible ? 1 : 0 }}>
            {(props) => (
              <div style={props}>
                <Section
                  id="section4"
                  title="footer"
                  subtitle="subtitle"
                  text="some piece of text"
                  bgColor="pink"
                />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  );
}

export default App;
