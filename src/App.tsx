import React from "react";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section
        id="section1"
        title="home"
        subtitle="subtitle"
        text="some piece of text"
        bgColor="white"
      />
      <Section
        id="section2"
        title="about"
        subtitle="subtitle"
        text="some piece of text"
        bgColor="white"
      />
      <Section
        id="section3"
        title="portfolio"
        subtitle="subtitle"
        text="some piece of text"
        bgColor="white"
      />
      <Section
        id="section4"
        title="footer"
        subtitle="subtitle"
        text="some piece of text"
        bgColor="white"
      />
    </div>
  );
}

export default App;
