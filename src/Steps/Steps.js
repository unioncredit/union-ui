import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { Label } from "../Label";

import "./steps.scss";

export function Steps({ items }) {
  if (!items || items.length <= 0) {
    return null;
  }

  return (
    <div className="steps">
      {items.map((item, i) => (
        <div className="steps__item" key={i}>
          <div
            className={`steps__item__dot steps__item__dot--${
              item.color || "blue"
            }`}
          />
          <Text className="steps__item__title">{item.title}</Text>
          {item.subTitle && (
            <Label as="p" className="steps__item__subTitle">
              {item.subTitle}
            </Label>
          )}
        </div>
      ))}
    </div>
  );
}

Steps.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
    })
  ),
};
