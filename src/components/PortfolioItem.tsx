import React from "react";
import { animated, useSpring } from "react-spring";

interface PortfolioItemProps {
  title: string;
  subtitle: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  subtitle,
}) => {
  const fade = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
  });

  return (
    <animated.div className="portfolio-item" style={fade}>
      <h3>{title}</h3>
      <h5>{subtitle}</h5>
    </animated.div>
  );
};
