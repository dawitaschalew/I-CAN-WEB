import React from "react";

export const Backdrop = ({ callback }) => {
  return <div onClick={ () => {
    callback();
    console.log("Clicked");
  } } className="backdrop"></div>;
};
