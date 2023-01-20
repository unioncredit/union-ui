import "./input.scss";
import React, { forwardRef, useState } from "react";
import cn from "classnames";

import { Box } from "../Box";
import { Text } from "../Text";
import { Button } from "../Button";

export const Input = forwardRef(
  (
    {
      name,
      label,
      caption,
      placeholder,
      disabled,
      value,
      suffix,
      prefix,
      onChange,
      type,
      error,
      defaultValue,
      onCaptionButtonClick,
      captionButtonLabel = "Max",
    },
    ref
  ) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (event) => {
      setHasValue(event.target.value !== "");
      onChange && onChange(event);
    };

    return (
      <div
        className={cn("input-wrapper", {
          "input-wrapper--error": !disabled && error,
        })}
      >
        {label && (
          <Text as="label" className="input-label" htmlFor={name}>
            {label}
          </Text>
        )}
        <div className="input-wrapper__inner">
          <div
            className={cn("input", {
              "input--disabled": disabled,
              "input--has-value": hasValue,
              "input--has-prefix": prefix,
            })}
          >
            <input
              ref={ref}
              type={type}
              name={name}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              placeholder={placeholder}
              autoComplete="off"
              defaultValue={defaultValue}
              // allow input of decimal places
              {...(type === "number" ? { step: "any" } : {})}
            />
            {prefix && <div className="input__prefix">{prefix}</div>}
            {suffix && <div className="input__suffix">{suffix}</div>}
          </div>
        </div>
        <Box align="center" mt="8px">
          {(caption || error) && (
            <Text size="small" m={0} className="input-caption">
              {(!disabled && error) || caption}
            </Text>
          )}
          {captionButtonLabel && onCaptionButtonClick && (
            <Button
              label={captionButtonLabel}
              color="blue"
              variant="pill"
              ml="4px"
              onClick={onCaptionButtonClick}
              className="input__maxButton"
            />
          )}
        </Box>
      </div>
    );
  }
);

Input.defaultProps = {
  disabled: false,
  type: "text",
};
