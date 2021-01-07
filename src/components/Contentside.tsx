import React from "react";

interface ContentsideProps {}

export const Contentside: React.FC<ContentsideProps> = () => {
  console.log("is this showing up");
  return (
    <div className="contentside">
      <h2>content</h2>
    </div>
  );
};
