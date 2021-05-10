import React from "react";

export const Button = ({ onClick, children, color = "NONE", type = "RAISED", size = "MEDIUM" }) => {
  let btnType = type;
  let btnSize = size;
  let btnColor = color;

  switch (type.toUpperCase()) {
    case "OUTLINE":
      btnType = "OUTLINE";
      break;
    case "FLAT":
      btnType = "FLAT";
      break;

    default:
      btnType = "RAISED";
      break;
  }

  switch (size.toUpperCase()) {
    case "SMALL":
      btnSize = "SMALL";
      break;
    case "LARGE":
      btnSize = "LARGE";
      break;

    default:
      btnSize = "MEDIUM";
      break;
  }

  switch (color.toUpperCase()) {
    case "PRIMARY":
      btnColor = "PRIMARY";
      break;
    case "SECONDARY":
      btnColor = "SECONDARY";
      break;
    case "MAIN":
      btnColor = "MAIN";
      break;
    case "SUCCESS":
      btnColor = "SUCCESS";
      break;
    case "DANGER":
      btnColor = "DANGER";
      break;

    default:
      btnColor = "NONE";
      break;
  }

  return (
    <div onClick={ onClick} className={`button ${btnType.toLowerCase()} ${btnSize.toLowerCase()} ${btnColor.toLowerCase()}`}>
      {children}
    </div>
  );
};
