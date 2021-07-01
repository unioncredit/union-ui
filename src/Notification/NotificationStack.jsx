import React from "react";
import PropTypes from "prop-types";

import "./notification-stack.scss";

export function NotificationStack({ children }) {
  return <div className="notification-stack">{children}</div>;
}

NotificationStack.propTypes = {};

NotificationStack.defaultProps = {};
