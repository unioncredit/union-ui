import { NumericalRow } from "./NumericalRow";
import { Box } from "../Box";

export default {
  component: NumericalRow,
  title: "Components/NumericalRow",
}

export const All = () => {
  const items = [
    {
      label: "Currently staked",
      value: "1,000.00 DAI",
      tooltip: {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        position: "right",
      },
    },
    {
      label: "Your locked stake",
      value: "100.54 DAI",
      tooltip: {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        position: "right",
      },
      error: true,
    },
    {
      label: "Staking limit",
      value: "5,000.00 DAI",
    }
  ];

  return (
    <Box mt="40px" w="400px">
      <NumericalRow items={items} />
    </Box>
  )
}