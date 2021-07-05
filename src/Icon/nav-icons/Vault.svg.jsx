import React from "react";

export function Vault({ color }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="3.25"
        transform="rotate(45 16 16)"
        stroke={color}
        stroke-width="1.5"
      />
      <rect
        x="7.75"
        y="7.75"
        width="16.5"
        height="16.5"
        rx="3.25"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M22 24.5V26"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.4749 18.4748L19.182 19.1819"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.818 12.818L13.5251 13.5251"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.182 12.818L18.4749 13.5251"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5251 18.4749L12.818 19.182"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 24.5V26"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="16"
        cy="16"
        r="1.25"
        fill={color}
        stroke={color}
        stroke-width="0.5"
      />
    </svg>
  );
}
