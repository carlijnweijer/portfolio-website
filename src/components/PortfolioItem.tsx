import React from "react";

interface PortfolioItemProps {
  title: string;
  subtitle: string;
  image: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <img src={image} alt="cover" style={{ width: "100%" }} />
    </div>
  );
};
