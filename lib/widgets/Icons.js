import React from "react";

export const AddFilledIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "18px" }}
      style={{ height: height || "18px" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    </div>
  );
};

export const DeleteFilledIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "1.8rem" }}
      style={{ height: height || "1.8rem" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-archive-fill"
        viewBox="0 0 16 16"
      >
        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
      </svg>
    </div>
  );
};

export const PowerIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "1.8rem" }}
      style={{ height: height || "1.8rem" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-power"
        viewBox="0 0 16 16"
      >
        <path d="M7.5 1v7h1V1h-1z" />
        <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
      </svg>
    </div>
  );
};

export const PhoneIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "1.8rem" }}
      style={{ height: height || "1.8rem" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-telephone"
        viewBox="0 0 16 16"
      >
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
      </svg>
    </div>
  );
};

export const CheckIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "1.8rem" }}
      style={{ height: height || "1.8rem" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-check2"
        viewBox="0 0 16 16"
      >
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </svg>
    </div>
  );
};
export const EditIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "1.8rem" }}
      style={{ height: height || "1.8rem" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-pencil-square"
        viewBox="0 0 16 16"
      >
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path
          fillRule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    </div>
  );
};
export const SquareIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "18px" }}
      style={{ height: height || "18px" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-square"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      </svg>
    </div>
  );
};
export const SquareCheckedIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "18px" }}
      style={{ height: height || "18px" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-check-square"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
      </svg>
    </div>
  );
};
export const ChevronDownIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "18px" }}
      style={{ height: height || "18px" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  );
};
export const ShareFilledIcon = ({ height, width, onClick, color }) => {
  return (
    <div
      style={{ height: height || "18px" }}
      style={{ height: height || "18px" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-share-fill"
        viewBox="0 0 16 16"
      >
        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
      </svg>
    </div>
  );
};
export const ArrowDownIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-arrow-down-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
        />
      </svg>
    </div>
  );
};
export const ArrowUpIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-arrow-up-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </div>
  );
};
export const BarCodeIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        fill={color ? color : "#000000"}
        className="bi bi-upc-scan"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
        />
        <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
      </svg>
    </div>
  );
};
export const GridIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-columns"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"
        />
        <path
          fillRule="evenodd"
          d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"
        />
      </svg>
    </div>
  );
};
export const EnvelopeIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-envelope"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
        />
      </svg>
    </div>
  );
};
export const StopWatchIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-stopwatch"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07A7.001 7.001 0 0 1 8 16 7 7 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3zm0 2.1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 0 1 .5-.5z"
        />
      </svg>
    </div>
  );
};
export const ShopIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-shop"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
        />
      </svg>
    </div>
  );
};
export const HomeIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-house"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
        />
        <path
          fillRule="evenodd"
          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
        />
      </svg>
    </div>
  );
};
export const BellIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-bell"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
        <path
          fillRule="evenodd"
          d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
        />
      </svg>
    </div>
  );
};
export const CloseIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-x"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  );
};
export const SettingIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-gear"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
        />
        <path
          fillRule="evenodd"
          d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
        />
      </svg>
    </div>
  );
};
export const TruckIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        style={{ rotate: "360deg" }}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M17.434 9H15v3h4.233z" />
        <circle fill="none" cx="16.5" cy="17.5" r="1.5" />
        <circle fill="none" cx="6.5" cy="17.5" r="1.5" />
        <path
          d="M19.148 7.971A2.008 2.008 0 0 0 17.434 7H15V5a1 1 0 0 0-1-1H4c-1.103 0-2 .897-2 2v10c0 .746.416 1.391 1.023 1.734C3.146 19.553 4.65 21 6.5 21c1.759 0 3.204-1.309 3.449-3h3.102c.245 1.691 1.69 3 3.449 3s3.204-1.309 3.449-3H20c1.103 0 2-.897 2-2v-3a.995.995 0 0 0-.143-.515l-2.709-4.514zM15 9h2.434l1.8 3H15V9zM6.5 19c-.827 0-1.5-.673-1.5-1.5S5.673 16 6.5 16s1.5.673 1.5 1.5S7.327 19 6.5 19zm10 0c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z"
          fill={color ? color : "#000000"}
        />
        <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
      </svg>
    </div>
  );
};

export const PersonIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-person"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
        />
      </svg>
    </div>
  );
};

export const GlobeIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        style={{ rotate: "360deg" }}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 64 64"
      >
        <path
          d="M32 2C15.432 2 2 15.432 2 32l.001.053l-.001.053C2 48.616 15.357 62 31.835 62l.064-.002L32 62c16.568 0 30-13.432 30-30S48.568 2 32 2m28 30c0 2.394-.302 4.717-.866 6.934c-.261-.18-.951.564-1.121-.422c-.213-1.224-1.593-2.074-2.336-1.489s-2.866 2.286-2.971 3.35c-.107 1.063-1.01 2.339-1.433 1.437c-.426-.904-1.698-3.723-1.646-4.467c.052-.744-.586.266-1.538-1.223c-.956-1.489-2.601-.214-3.928-.958c-1.327-.745-2.813-1.755-3.557-2.073c-.741-.32 1.327 2.977 1.593 2.552c.267-.425 1.327.319 1.646.319s1.167.744.637 1.436s-5.253 3.566-5.731 2.818c-.48-.748-3.29-6.541-3.769-6.186c-.478.355 2.973 6.398 3.557 6.77c.582.373 2.335.054 3.183-.318c.85-.372-1.751 4.148-2.864 4.68c-1.114.531-2.016 2.18-1.54 2.924c.478.744.531 3.563-.476 3.936c-1.01.371-1.381.956-1.063 1.648c.317.69-.742 1.859-1.22 2.604c-.479.744-2.335 2.286-2.495 2.712c-.158.426-2.44.319-3.344.319c-.901 0-.212-1.117-.319-2.073c-.104-.958-.9-1.862-.9-2.34c0-.479-.267-1.596-.637-2.127c-.371-.533-.479-1.543-.107-2.127c.373-.586.637-2.286-.104-3.031c-.744-.744-1.594-2.021-1.009-3.031c.584-1.01-.637-.903-1.645-1.383c-1.009-.479-3.079.16-4.14.32c-1.062.159-2.122-.266-2.441-.799c-.318-.531-1.008-1.86-1.715-2.18c-.705-.318-.301-1.701.123-2.232c.426-.531-.424-1.542 0-1.969c.426-.425.69-1.966 1.539-2.303c.85-.336.69-.567.716-1.365c.027-.798.955-.798 1.113-1.223c.16-.426.637-.638 1.595-.638c.955 0 2.572-.559 3.342-.745s2.097-.452 1.99.293c-.106.744-.079 1.594.424 1.594c.505 0 1.195.293 1.991.789c.796.495.822.09.929-.469s1.22-.346 2.372.186s2.723.159 3.225.107c.505-.055.718-1.569.585-2.074c-.134-.505-.929.239-1.433-.08c-.504-.318-1.195.08-1.698-.373c-.505-.451-.585-1.515 0-1.541c.583-.027.876-.213 1.22-.611c.346-.399 1.646-.638 2.15-.24c.503.399 1.248.665 1.697.213c.451-.451-.9-1.328-1.194-1.568c-.292-.239-.053-1.01-.344-1.01c-.293 0-.532.132-.372.505c.159.372-.849 1.036-1.01.665c-.158-.373-.423-1.09-.821-1.09c-.397 0-.928 1.808-.955 2.1c-.027.293-.717.771-1.273.771c-.556 0-.556.639-.265.932c.292.292.079 1.462-.451 1.529c-.531.068-.717-.12-.796-.573c-.079-.451-.61-.398-.637-1.329s-.611-1.382-.982-1.808s-1.327-1.675-1.698-1.116s1.327 1.755 1.777 2.073c.453.319.373 1.01.134 1.17s-.69 1.463-.955 1.568c-.267.106-.52-.396-.52-.396c-.398-.159.556-.638.716-.877c.158-.239-1.671-1.914-2.001-2.393s-1.74.398-2.376.08c-.637-.318-1.593 1.196-1.671 2.073c-.081.878-1.116 1.116-2.071 1.116c-.954 0-1.592-.717-1.272-1.435c.318-.718-.16-1.914.398-1.994c.557-.079 2.147 0 2.466-.877c.318-.877-1.513-1.675-.795-1.834c.715-.16 1.831-1.275 2.627-1.914c.794-.638.874-1.435 1.59-1.491c.718-.055-.158-1.381.479-1.779c.638-.399.796 1.436 1.274 1.436s1.431-.16 2.228.239s1.035-.399 1.354-1.437c.318-1.036 1.114-1.595 2.705-2.392c1.592-.798-1.829.239-2.467-.559c-.637-.798.239-2.553.638-3.792c.398-1.24-1.274 1.239-2.15 2.516c-.877 1.276.239 1.834.158 2.711c-.079.878-1.51 1.914-1.51 1.914c-.637.08-.558-1.196-.876-1.754c-.319-.558-.877-.319-1.753.319c-.876.638-.955-1.515-1.193-2.393c-.237-.876 1.433-1.994 2.218-2.59c.784-.598 2.079-3.471 3.513-5.703c1.434-2.233 3.503-1.117 4.06-.239c.559.876 1.989.318 3.344 1.914c1.354 1.595-.319 2.312-1.829 1.664c-1.515-.648.317 1.606 1.191 2.244c.876.637 1.354-1.436 1.673-1.914c.318-.479 1.511-.239 2.386-1.516c.877-1.276 2.866-1.036 4.002-.896c1.137.141.854-.699.138-1.386c-.53-.508.554-.063 1.83.56C54.476 12.768 60 21.737 60 32m-39.958-9.528c-.264-.273.267-1.348.505-1.667c.24-.319-.664-.213-.609.24c.053.451-.346 1.143-.903 1.329s-1.192.132-.875-.373c.317-.505.026-.957-.213-1.436c-.238-.479 1.326-.771 1.646-1.063c.318-.292-.503-.479-.478-.93c.027-.453.213-.851.529-.904c.319-.053.617-.257.903-.239c.877.054.609 2.047.929 2.686c.318.637 1.221 1.409 1.141 1.966c-.08.559-.25.878-.9.718c-.653-.16-1.698.824-2.098.638c-.399-.187.69-.692.423-.965m-5.718-11.181c.797.398 1.432-.324 1.988-.479c.659-.182 1.035 2.154.399 2.074c-.637-.08-1.353 1.276-2.273 1.196c-.921-.08-.513-.717-1.548-1.674c-.222-.206-.313-.392-.321-.555c.221-.213.441-.427.67-.632c.358-.095.783-.081 1.085.07m24.902 40.141c.743-.159.6-1.573 1.274-1.648c1.433-.159.053 3.828-.477 4.945c-.531 1.117-.745 1.063-1.25.372c-.507-.69-.343-1.808 0-2.339c.342-.533-.291-1.17.453-1.33"
          fill={color ? color : "#000000"}
        />
        <rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" />
      </svg>
    </div>
  );
};

export const MoneyIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        style={{ rotate: "360deg" }}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M2 5v14h20V5H2zm5 12a3 3 0 0 0-3-3v-4a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v4a3 3 0 0 0-3 3H7zm5-8c1.1 0 2 1.3 2 3s-.9 3-2 3s-2-1.3-2-3s.9-3 2-3z"
          fill={color ? color : "#000000"}
        />
        <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
      </svg>
    </div>
  );
};
export const MenuIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-list"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  );
};
export const SearchIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        viewBox="0 0 16 16"
        className="bi bi-search"
        fill={color ? color : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
        />
        <path
          fillRule="evenodd"
          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
        />
      </svg>
    </div>
  );
};
export const HeartIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        style={{ rotate: "360deg" }}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
          fill={color ? color : "#000000"}
        />
        <rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" />
      </svg>
    </div>
  );
};
export const CartIcon = ({ height, width, onClick, color }) => {
  return (
    <div style={{ height: height || "18px" }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={width ? `${width * 10}px` : "18px"}
        height={height ? `${height * 10}px` : "18px"}
        style={{ rotate: "360deg" }}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <path
          d="M6 13h9c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V4H2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v2h13l-4 7H6v1zm-.5 3c.83 0 1.5.67 1.5 1.5S6.33 19 5.5 19S4 18.33 4 17.5S4.67 16 5.5 16zm9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z"
          fill={color ? color : "#000000"}
        />
        <rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" />
      </svg>
    </div>
  );
};
