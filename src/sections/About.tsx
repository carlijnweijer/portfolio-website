import React from "react";
import { animated, interpolate, useSpring } from "react-spring";
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
    `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x: number, y: number) =>
    `translate3d(${x / -8}px,${y / 8}px,0)`;
  const trans3 = (x: number, y: number) =>
    `translate3d(${x / 12}px,${y / 6}px,0)`;

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
          <h5>I'm a Junior Web Developer driven by passion and curiosity.</h5>
          <p>
            I believe in lifelong learning, constructive feedback and an open
            mind.
          </p>
        </animated.div>
        <animated.div
          className="about-card"
          // @ts-ignore
          style={{ transform: interpolate(props.xy, trans2) }}
        >
          <h5>I'm a Junior Web Developer driven by passion and curiosity.</h5>
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
          <h5>I'm a Junior Web Developer driven by passion and curiosity.</h5>
          <p>
            I believe in lifelong learning, constructive feedback and an open
            mind.
          </p>
        </animated.div>
      </div>
    </div>
  );
};
