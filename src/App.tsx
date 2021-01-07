import React from "react";
import "./App.scss";
import { Navigation } from "./components/Navigation";
import { AboutSection } from "./sections/AboutSection";
import { Footer } from "./sections/Footer";
import { HomeSection } from "./sections/HomeSection";
import { PortfolioSection } from "./sections/PortfolioSection";

function App() {
  return (
    <div className="App">
      <h1>i'm app</h1>
      <Navigation />
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;
