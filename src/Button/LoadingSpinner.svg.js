import React from "react";

export function LoadingSpinner() {
  return (
    <svg
      className="button-loading-spinner"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="8" stroke="#E1E0E6" stroke-width="2" />
      <path
        d="M18 10C18 5.58172 14.4183 2 10 2"
        stroke="#565461"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
