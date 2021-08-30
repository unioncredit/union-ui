import React from "react";
import ReactSelect, { components } from "react-select";

import { Avatar } from "../Avatar";

import "./select.scss";

const styles = {
  control: (styles, state) => ({
    ...styles,
    "&:hover": {},
    borderRadius: "12px",
    paddingLeft: "8px",
    border: state.isFocused ? "1px solid #2143d5" : "1px solid #e1e0e6",
    boxShadow: state.isFocused ? "0px 0px 0px 3px #a7c4ff" : "none",
    minHeight: "40px",
  }),
  menu: (styles) => ({
    ...styles,
    border: "1px solid #f4f4f6",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow:
      "0px 1px 1px rgba(58, 56, 66, 0.2), 0px 4px 8px rgba(58, 56, 66, 0.25)",
  }),
  valueContainer: (styles, state) => ({ ...styles, overflow: "visible" }),
  singleValue: (styles) => ({ ...styles, overflow: "visible" }),
};

function Control({ children, selectProps, ...props }) {
  return (
    <components.Control {...props} className="select-control">
      {selectProps?.value?.imageSrc && (
        <Avatar src={selectProps.value.imageSrc} />
      )}
      {children}
    </components.Control>
  );
}

function Option({ innerProps, isDisabled, children, data }) {
  if (isDisabled) {
    return null;
  }

  return (
    <div {...innerProps}>
      <div className="select-option">
        {data.imageSrc && <Avatar src={data.imageSrc} />}
        {children}
      </div>
    </div>
  );
}

const IndicatorSeparator = () => null;

const DownChevron = () => (
  <svg
    className="dropdown-indicator"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.04031 0H4H6.95969C7.37894 0 7.61203 0.484966 7.35012 0.812348L4.39043 4.51196C4.19027 4.76216 3.80973 4.76216 3.60957 4.51196L0.649878 0.812348C0.387973 0.484966 0.621059 0 1.04031 0Z"
      fill="#726F7E"
    />
  </svg>
);

export const Select = (props) => (
  <ReactSelect
    {...props}
    styles={styles}
    isSearchable={false}
    isMulti={false}
    className="select-ui"
    components={{
      Control,
      Option,
      IndicatorSeparator,
      DropdownIndicator: DownChevron,
    }}
  />
);
