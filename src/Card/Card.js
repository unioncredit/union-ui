import React from "react";
import cn from "classnames";

import { Heading } from "../Heading";

import "./card.scss";

export function Card({ children, className }) {
  return <div className={cn("card", className)}>{children}</div>;
}

function CardHeader({ title }) {
  return (
    <div className="card-header">
      <Heading>{title}</Heading>
    </div>
  );
}

function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
