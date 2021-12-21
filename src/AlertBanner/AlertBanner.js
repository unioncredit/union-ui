import React from "react";

import { Label } from "../Label";
import { ReactComponent as Cross } from "../icons/cross.svg";

import "./alert-banner.scss";

export function AlertBanner({ label, onClose }) {
  return (
    <div className="alertBanner">
      <div className="alertBanner__inner">
        <Label as="p" m={0}>
          {label}
        </Label>
      </div>
      {onClose && (
        <div className="alertBanner__close">
          <Cross width="24px" />
        </div>
      )}
    </div>
  );
}
