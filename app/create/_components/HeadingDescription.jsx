import React from "react";

function HeadingDescription({ title, description }) {
  return (
    <div className="">
      <h2 className="text-primary text-3xl font-bold ">{title}</h2>
      <p className="text-lg text-gray-500 mt-2">{description}</p>
    </div>
  );
}

export default HeadingDescription;
