import "./AlertBanner.scss";

import React from "react";

import { Text } from "../Text";
import { CloseIcon } from "../Icons";

export function AlertBanner({ label, onClose }) {
  return (
    <div className="AlertBanner">
      <div className="AlertBanner__inner">
        <Text m={0} size="medium" color="amber900">
          {label}
        </Text>
      </div>
      {onClose && (
        <div className="AlertBanner__close" onClick={onClose}>
          <CloseIcon width="24px" />
        </div>
      )}
    </div>
  );
}
