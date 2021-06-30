import React from "react";

import "./avatar.scss";

export function Avatar({ src }) {
  return (
    <div className="avatar">
      <img src={src} />
    </div>
  );
}
