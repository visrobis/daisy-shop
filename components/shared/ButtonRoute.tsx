import React from "react";

type Route = {
  name: string;
  design: boolean;
};
const ButtonRoute: React.FC<Route> = ({ name, design }) => {
  return (
    <div
      className={`mt-3 bg-color-1000 w-fit rounded-md text-sizeParagraphBase shadow-box-shadow-dark hover:shadow-box-shadow-darker ${
        design && ""
      }`}
    >
      <button className="p-2 px-7">{name}</button>
    </div>
  );
};

export default ButtonRoute;
