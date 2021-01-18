import React from "react";
import { animated, interpolate, useSpring } from "react-spring";
import metBenz from "../assets/metBenz.jpg";
import { Navigation } from "../components/Navigation";
import "../styles/about.scss";

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans = (x: number, y: number) =>
    `translate3d(${x / -10}px,${y / 20}px,0)`;
  const trans2 = (x: number, y: number) =>
    `translate3d(${x / -20}px,${y / 30}px,0)`;
  const trans3 = (x: number, y: number) =>
    `translate3d(${x / -4}px,${y / -10}px,0)`;
  const trans4 = (x: number, y: number) =>
    `translate3d(${x / -16}px,${y / -10}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 550, friction: 140 },
  }));

  return (
    <div className="section about-section" id={id}>
      <div className="leftside">
        <div className="left-content">
          <div className="profilepic"></div>
          <h1 className="title about-title">about me</h1>
        </div>
        <div className="navbar">
          <Navigation />
        </div>
      </div>
      <div
        className="rightside"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className="about-card"
          // @ts-ignore
          style={{ transform: interpolate(props.xy, trans) }}
        >
          <h5>A little bit of background info</h5>
          <p>
            I'm 26 years old, I live in The Hague and I'm the proud mom of a 6
            years old Golden Retriever named{" "}
            <span className="tooltip">
              Benz <img src={metBenz} className="tooltippic" alt="benz" />
            </span>
          </p>
        </animated.div>
        <animated.div
          className="about-card"
          // @ts-ignore
          style={{ transform: interpolate(props.xy, trans2) }}
        >
          <h5 style={{ fontSize: "1.5rem" }}>
            I'm driven by passion and curiosity
          </h5>
          <p>
            I believe in lifelong learning, constructive feedback and an open
            mind.
          </p>
        </animated.div>
        <animated.div
          className="about-card"
          // @ts-ignore
          style={{ transform: interpolate(props.xy, trans3) }}
        >
          <h5>What I love most about programming</h5>
          <p>
            From I young age I have loved two hobbies very much; puzzles (like
            sudoku) and drawing. In programming I have found these two hobbies
            come together. Programming is like solving a complex puzzle and
            painting a masterpiece at the same time!
          </p>
        </animated.div>
        <animated.div
          className="about-card"
          // @ts-ignore
          style={{ transform: interpolate(props.xy, trans4) }}
        >
          <h5>
            Especially interested in Front-end development and working on cool
            projects with cool people
          </h5>
          <p></p>
        </animated.div>
      </div>
    </div>
  );
};
