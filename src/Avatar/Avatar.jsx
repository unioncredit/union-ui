import React from "react";

import "./avatar.scss";

export function Avatar({ src }) {
  return <div className="avatar">{src && <img src={src} />}</div>;
}
