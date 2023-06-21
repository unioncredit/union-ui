import "./Input.scss";
import React, { forwardRef, useState } from "react";
import cn from "classnames";

import { Box } from "../Box";
import { Text } from "../Text";
import { Button } from "../Button";
import { propsToStyles } from "../spacing";
import { WarningIcon } from "../Icons";

export const Input = forwardRef(
  (
    {
      name,
      label,
      rightLabel,
      rightLabelAction,
      caption,
      placeholder,
      disabled,
      readonly,
      value,
      suffix,
      prefix,
      onChange,
      type,
      error,
      className,
      defaultValue,
      onCaptionButtonClick,
      captionButtonLabel = "Max",
      inputProps,
      ...props
    },
    ref
  ) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (event) => {
      if (readonly) return;
      setHasValue(event.target.value !== "");
      onChange && onChange(event);
    };

    return (
      <div
        style={propsToStyles(props)}
        className={cn("input-wrapper", className, {
          "input-wrapper--error": !disabled && error,
        })}
      >
        {(label || rightLabel) && (
          <Box justify="space-between">
            {label && (
              <Text as="label" className="input-label" htmlFor={name} size="medium">
                {label}
              </Text>
            )}

            {rightLabel && (
              <Text mb="4px" as="label" className={cn("input-label--right", {
                "input-label--right--has-action": rightLabelAction
              })} htmlFor={name} size="medium" onClick={rightLabelAction && rightLabelAction}>
                {rightLabel}
              </Text>
            )}
          </Box>
        )}
        <div className="input-wrapper__inner">
          <div
            className={cn("input", {
              "input--disabled": disabled,
              "input--readonly": readonly,
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
              {...inputProps}
              // allow input of decimal places
              {...(type === "number" ? { step: "any" } : {})}
            />
            {prefix && <div className="input__prefix">{prefix}</div>}
            <div className="input__suffix">
              {suffix && suffix}
              {error && <WarningIcon className="input__warning" />}
            </div>
          </div>
        </div>

        {(caption || error) && (
          <Box align="center" mt="4px">
            <Text size="regular" m={0} className="input-caption">
              {(!disabled && error) || caption}
            </Text>

            {captionButtonLabel && onCaptionButtonClick && (
              <Button
                label={captionButtonLabel}
                color="primary"
                size="pill"
                variant="light"
                ml="6px"
                onClick={onCaptionButtonClick}
                className="input__maxButton"
              />
            )}
          </Box>
        )}
      </div>
    );
  }
);

Input.defaultProps = {
  disabled: false,
  type: "text",
};
