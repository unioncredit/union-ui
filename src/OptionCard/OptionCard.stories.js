import { OptionCard } from "./OptionCard";

export default {
  component: OptionCard,
  title: "Components/OptionCard",
};

export const Default = () => (
  <>
    <OptionCard
      mb="8px"
      value="1.00"
      token="dai"
      checked={false}
      title="Pay-off entire loan"
      content="Make a payment equal to the outstanding balance"
    />

    <OptionCard
      mb="8px"
      value="1.00"
      token="usdc"
      checked={false}
      title="Pay-off entire loan"
      content="Make a payment equal to the outstanding balance"
    />

    <OptionCard
      mb="8px"
      value="1.00"
      token="union"
      checked={true}
      title="Pay-off entire loan"
      content="Make a payment equal to the outstanding balance"
    />
  </>
);
