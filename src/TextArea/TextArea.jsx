import "./TextArea.scss";

import React, { forwardRef, useState } from "react";
import cn from "classnames";

import { Box } from "../Box";
import { Text } from "../Text";
import { Button } from "../Button";
import { propsToStyles } from "../spacing";
import { WarningIcon } from "../Icons";

export const TextArea = forwardRef(
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
      error,
      className,
      defaultValue,
      onCaptionButtonClick,
      rows = 4,
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
        className={cn("textarea-wrapper", className, {
          "textarea-wrapper--error": !disabled && error,
        })}
      >
        {(label || rightLabel) && (
          <Box justify="space-between">
            {label && (
              <Text as="label" className="textarea-label" htmlFor={name} size="medium">
                {label}
              </Text>
            )}

            {rightLabel && (
              <Text mb="4px" as="label" className={cn("textarea-label--right", {
                "textarea-label--right--has-action": rightLabelAction
              })} htmlFor={name} size="medium" onClick={rightLabelAction && rightLabelAction}>
                {rightLabel}
              </Text>
            )}
          </Box>
        )}
        <div className="textarea-wrapper__inner">
          <div
            className={cn("textarea", {
              "textarea--disabled": disabled,
              "textarea--readonly": readonly,
              "textarea--has-value": hasValue,
              "textarea--has-prefix": prefix,
            })}
          >
            <textarea
              ref={ref}
              name={name}
              rows={rows}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              placeholder={placeholder}
              autoComplete="off"
              defaultValue={defaultValue}
              {...inputProps}
            />
            {prefix && <div className="textarea__prefix">{prefix}</div>}
            <div className="textarea__suffix">
              {suffix && suffix}
              {error && <WarningIcon className="textarea__warning" />}
            </div>
          </div>
        </div>

        {(caption || error) && (
          <Box align="center" mt="4px">
            <Text size="regular" m={0} className="textarea-caption">
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
                className="textarea__maxButton"
              />
            )}
          </Box>
        )}
      </div>
    );
  }
);

TextArea.defaultProps = {
  disabled: false,
};
