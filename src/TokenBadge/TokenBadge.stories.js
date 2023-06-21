import { TokenBadge } from "./TokenBadge";
import { Box } from "../Box";

export default {
  component: TokenBadge,
  title: "Components/TokenBadge",
};

const tokens = ["arbitrum", "goerli", "mainnet", "optimism", "union", "dai"];

export const Default = () => (
  <Box>
    {tokens.map(token => (
      <TokenBadge mr="4px" token={token} />
    ))}
  </Box>
);