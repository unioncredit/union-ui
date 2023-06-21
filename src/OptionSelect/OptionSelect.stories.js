import { OptionSelect } from "./OptionSelect";

export default {
  component: OptionSelect,
  title: "Components/OptionSelect",
};

export const Default = () => (
  <OptionSelect
    onChange={(index) => console.log("OptionSelect index: ", index)}
    cards={[
      {
        title: "Pay-off entire loan",
        content: "Make a payment equal to the outstanding balance",
        token: "dai",
        value: "1.00",
      },
      {
        title: "Pay-off entire loan",
        content: "Make a payment equal to the outstanding balance",
        token: "dai",
        value: "1.00",
      }
    ]}
  />
);