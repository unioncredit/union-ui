import React from "react";

export function Contacts({ color }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="16"
        cy="11"
        rx="4"
        ry="4"
        transform="rotate(90 16 11)"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M8.30063 21.0859C8.34879 20.6524 8.36814 20.4853 8.3962 20.3482C8.68361 18.9442 9.85679 17.8941 11.284 17.7635C11.4233 17.7508 11.5916 17.75 12.0277 17.75H19.9723C20.4084 17.75 20.5767 17.7508 20.716 17.7635C22.1432 17.8941 23.3164 18.9442 23.6038 20.3482C23.6319 20.4853 23.6512 20.6524 23.6994 21.0859C23.7582 21.6152 23.78 21.8211 23.7809 21.9819C23.7902 23.6518 22.5325 25.0569 20.8719 25.2321C20.7119 25.2489 20.5049 25.25 19.9723 25.25H12.0277C11.4951 25.25 11.2881 25.2489 11.1281 25.2321C9.46748 25.0569 8.20982 23.6518 8.21911 21.9819C8.22001 21.8211 8.24182 21.6152 8.30063 21.0859Z"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
}

Contacts.defaultProps = {
  color: "grey",
};
