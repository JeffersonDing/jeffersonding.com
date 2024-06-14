import React from "react";

const TitleContent = (props) => {
  const { title } = props;
  return (
    <div className="max-w-4xl mx-auto text-left w-[80vw]">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      {props.children}
    </div>
  );
};

export default TitleContent;
