import React from "react";

import { Heading } from "../Heading";
import { Divider } from "../Divider";

import "./modal.scss";

export function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal__header">
        <Heading>Borrow funds</Heading>
        <div className="modal__header__close"></div>
      </div>
      <Divider />
      <div className="modal__content">{children}</div>
    </div>
  );
}
