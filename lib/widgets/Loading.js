import React from "react";

export const GooeyLoading = ({ theme }) => {
  return (
    <div className={`gooey ${theme || ""}`}>
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export const IdsLoading = () => {
  return (
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const DashLoading = () => {
  return (
    <div className="dashContainer">
      <div className="dash uno"></div>
      <div className="dash dos"></div>
      <div className="dash tres"></div>
      <div className="dash cuatro"></div>
    </div>
  );
};

export const IdsEllipsisLoading = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const IdsRipple = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export const EscaladeLoading = () => {
  return (
    <svg className="escaladeLoading">
      <g>
        <path d="M 50,100 A 1,1 0 0 1 50,0" />
      </g>
      <g>
        <path d="M 50,75 A 1,1 0 0 0 50,-25" />
      </g>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FF56A1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FF9350", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
