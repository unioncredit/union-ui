import { useState } from "react";

import { ControlRows } from "./ControlRows";

export default {
  component: ControlRows,
  title: "Components/ControlRows",
};

export const Default = () => {
  const [checked, setChecked] = useState({
    register: false,
    terms: false,
  });

  const items = [
    {
      type: "checkbox",
      content: "Pay 1 UNION members fee to quickly onboard",
      checked: checked.register,
      onClick: () => {
        setChecked({ ...checked, register: !checked.register })
      }
    },
    {
      type: "checkbox",
      content: "I understand the risks of vouching on Union",
      checked: checked.terms,
      onClick: () => {
        setChecked({ ...checked, terms: !checked.terms })
      },
      tooltip: {
        content: "Lorem ipsum dolor sit amet",
        position: "left",
      }
    }
  ];

  return (
    <ControlRows items={items} />
  )
};