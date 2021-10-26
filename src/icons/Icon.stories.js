import react from "react";

import { Box } from "../Box";

import { ReactComponent as ENS } from "./ens.svg";
import { ReactComponent as Info } from "./info.svg";
import { ReactComponent as Success } from "./success.svg";
import { ReactComponent as Failed } from "./failed.svg";
import { ReactComponent as Pending } from "./pending.svg";
import { ReactComponent as Vouch } from "./vouch.svg";
import { ReactComponent as Avatar } from "./avatar.svg";
import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as External } from "./external.svg";
import { ReactComponent as Borrow } from "./borrow.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Filter } from "./filter.svg";
import { ReactComponent as NewVouch } from "./newVouch.svg";
import { ReactComponent as NewMember } from "./newMember.svg";
import { ReactComponent as Repayment } from "./repayment.svg";

export default {
  title: "components/icons",
};

const icons = [
  Vouch,
  Avatar,
  ENS,
  Info,
  Pending,
  Borrow,
  Success,
  Failed,
  Close,
  External,
  Search,
  Twitter,
  Filter,
  NewVouch,
  NewMember,
  Repayment,
];

export const all = () => (
  <>
    {icons.map((Icon) => (
      <Box mb="8px">
        <Icon />
      </Box>
    ))}
  </>
);
