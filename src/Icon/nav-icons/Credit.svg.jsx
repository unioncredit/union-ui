import React from "react";

export function Credit({ color, className }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="7" stroke={color} strokeWidth="1.5" />
      <path
        d="M26 16C26 21.5228 21.5228 26 16 26L19 28M6 16C6 10.4772 10.4772 6 16 6L13 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="16" cy="16" rx="3" ry="7" stroke={color} strokeWidth="1.5" />
      <path d="M9 16L23 16" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
