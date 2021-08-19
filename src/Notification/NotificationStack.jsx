import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./notification-stack.scss";

export function NotificationStack({ children, className, ...props }) {
  return (
    <div className={cn("notification-stack", className)} {...props}>
      {children}
    </div>
  );
}

NotificationStack.propTypes = {
  className: PropTypes.string,
};

NotificationStack.defaultProps = {};
