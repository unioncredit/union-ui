import "./ButtonRow.scss";
import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";

export const ButtonRow = ({
  joined,
  children,
  className,
  ...props
}) => {
  return (
    <Box
      {...props}
      className={
        cn(className, "button-row", {
          "button-row--joined": joined
        }
      )}
    >
      {children}
    </Box>
  );
}

ButtonRow.propTypes = {
  joined: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

ButtonRow.defaultProps = {
  joined: false,
};