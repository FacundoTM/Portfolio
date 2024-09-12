import React from "react";

const ArrowButton = ({ estilos }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
      className={estilos}
    >
      <circle cx="32" cy="32" r="32" fill="#fff" />
      <path
        fill="#4F3DFF"
        d="m32 48 11.547-20H20.453L32 48Zm-2-32v14h4V16h-4Z"
      />
    </svg>
  );
};

export default ArrowButton;
