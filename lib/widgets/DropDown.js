import React, { useState, useEffect } from "react";

export const DropDown = ({
  children,
  label,
  defaultValue,
  onChanged,
  color,
  disabled,
  type,
  value,
}) => {
  const [dropDownStatus, toggleDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState();

  useEffect(() => {
    setDropDownValue(value || defaultValue || null);

    const handleClick = (e) => {
      if (!e.target.matches(".drop-down__container--label")) {
        toggleDropDown(false);
      }
    };

    window.addEventListener("click", handleClick);
  }, [value]);

  return (
    <div className={disabled ? `drop-down disabled` : "drop-down"}>
      <div className="drop-down__content">
        {label && (
          <div
            style={{
              paddingLeft: ".6rem",
              marginBottom: ".6rem",
              fontSize: "1.4rem",
              color: "gray",
            }}
          >
            {" "}
            {label}{" "}
          </div>
        )}
        <div
          style={{ color: color || "black" }}
          className="drop-down__container"
        >
          <div
            className={`drop-down__container--label ${type}`}
            onClick={() => {
              !disabled && toggleDropDown((prev) => !prev);
            }}
          >
            <p> { (dropDownValue && dropDownValue.children) || dropDownValue || label || "Please select"} </p>
            <div />
          </div>
          <ul
            className={
              dropDownStatus
                ? "drop-down__container--options active"
                : "drop-down__container--options"
            }
          >
            {React.Children.map(children, (Item, index) => {
              return React.cloneElement(Item, {
                onClick: () => {
                  toggleDropDown((prev) => !prev);
                  !value && setDropDownValue(Item.props);
                  onChanged(Item.props);
                  // console.log(Item);
                },
              });
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
