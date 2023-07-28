import { IconLabel } from "./IconLabel";
import { DaiIcon } from "../Icons";
import { Box } from "../Box";


export default {
  component: IconLabel,
  title: "components/IconLabel",
}

export const All = () => (
  <>
    <Box>
      <DAI />
    </Box>
    <Box mt="12px">
      <ENS />
    </Box>
  </>
);

export const DAI = () => (
  <IconLabel icon={DaiIcon} label="100 DAI" />
);

export const ENS = () => (
  <IconLabel src="https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg" label="bbque.eth" />
);

