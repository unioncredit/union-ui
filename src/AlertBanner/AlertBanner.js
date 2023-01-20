import React from "react";

import Cross from "../Icons/icons/cross.svg";
import { Text } from "../Text";

import "./alert-banner.scss";

export function AlertBanner({ label, onClose }) {
  return (
    <div className="alertBanner">
      <div className="alertBanner__inner">
        <Text m={0} color="black">
          {label}
        </Text>
      </div>
      {onClose && (
        <div className="alertBanner__close" onClick={onClose}>
          <Cross width="24px" />
        </div>
      )}
    </div>
  );
}
