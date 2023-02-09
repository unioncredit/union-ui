import ExpandingInfo from "./ExpandingInfo";
import { Text } from "../Text";
import { Box } from "../Box";
import { WarningIcon } from "../Icons";

export default {
  component: ExpandingInfo,
  title: "components/ExpandingInfo",
};

export const All = () => {
  return (
    <Box w="432px">
      <ExpandingInfo
        icon={WarningIcon}
        title="Vouching puts your staked funds at risk"
      >
        <Text m={0}>
          If an account you vouch for doesn't pay the minimum due within 30
          days, they'll be in a defaulted state. If they stay that way for 90
          days, your stake could be lost permanently to cover their debt.
        </Text>
      </ExpandingInfo>
    </Box>
  )
};