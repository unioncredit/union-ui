import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { Label } from "../Label";
import External from "../icons/external.svg";

import "./steps.scss";

const withHref = (element, href) => (
  <a href={href} target="_blank" rel="norefferrer">
    {element} <External />
  </a>
);

export function Steps({ items }) {
  if (!items || items.length <= 0) {
    return null;
  }

  return (
    <div className="steps">
      {items.map((item, i) => {
        const titleElement = (
          <Text className="steps__item__title">{item.title}</Text>
        );

        const title = item.href
          ? withHref(titleElement, item.href)
          : titleElement;

        return (
          <div className="steps__item" key={i}>
            <div
              className={`steps__item__dot steps__item__dot--${
                item.color || "blue"
              }`}
            />
            {title}
            {item.subTitle && (
              <Label as="p" className="steps__item__subTitle">
                {item.subTitle}
              </Label>
            )}
          </div>
        );
      })}
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
