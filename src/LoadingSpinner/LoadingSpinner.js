import React from "react";

import "./loading-spinner.scss";

export function LoadingSpinner({ size, circleStroke, pathStroke }) {
  return (
    <svg
      style={{ height: size + "px", width: size + "px" }}
      className="loading-spinner"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke={circleStroke || "#E1E0E6"}
        strokeWidth="2"
      />
      <path
        d="M18 10C18 5.58172 14.4183 2 10 2"
        stroke={pathStroke || "#565461"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
