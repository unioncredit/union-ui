import React from "react";

export function Vote({ color, className }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="11" r="3.25" stroke={color} stroke-width="1.5" />
      <circle cx="10" cy="21" r="3.25" stroke={color} stroke-width="1.5" />
      <path
        d="M17 11H25.5M17 21H25.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="10"
        cy="11"
        r="1.25"
        fill={color}
        stroke={color}
        stroke-width="0.5"
      />
    </svg>
  );
}

Vote.defaultProps = {
  color: "grey",
};
