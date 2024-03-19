import { Box } from "../Box";
import {
  AddIcon,
  AddressBookIcon,
  ArbitrumIcon,
  ArrowIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BlogIcon,
  BridgeIcon,
  BorrowIcon,
  CalendarIcon,
  CancelIcon,
  CancelVouchIcon,
  ChartIcon,
  CheckIcon,
  ChevronIcon,
  ClaimIcon,
  CloseIcon,
  ConfettiIcon,
  CopyIcon,
  DaiIcon,
  DelegateIcon,
  DepositIcon,
  DisconnectWalletIcon,
  DiscordIcon,
  DocsIcon,
  EditIcon,
  EnsIcon,
  EthereumIcon,
  FailedIcon,
  FilterIcon,
  GoerliIcon,
  GovernanceIcon,
  IdentityIcon,
  IncreaseVouchIcon,
  InfoIcon,
  LeaderboardIcon,
  LinkIcon,
  LinkOutIcon,
  ListIcon,
  LockIcon,
  ManageIcon,
  MarketingIcon,
  NewMemberIcon,
  NewVouchIcon,
  NewVouchReceivedIcon,
  OpenWindowIcon,
  OptimismIcon,
  PauseIcon,
  PendingIcon,
  PlayIcon,
  ProfileIcon,
  ProtocolIcon,
  PseudoIcon,
  RemoveIcon,
  RepayIcon,
  RotatingIcon,
  SearchIcon,
  SetupIcon,
  StakeIcon,
  SuccessIcon,
  SwitchIcon,
  TelegramIcon,
  TermsIcon,
  TransferIcon,
  TwitterIcon,
  UnionIcon,
  UsdcIcon,
  VouchIcon,
  WalletIcon,
  WarningIcon,
  WithdrawIcon,
} from "./Icons";

export default {
  title: "components/Icons",
};

const icons = [
  AddIcon,
  AddressBookIcon,
  ArrowIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BlogIcon,
  BridgeIcon,
  BorrowIcon,
  CalendarIcon,
  CancelIcon,
  ChartIcon,
  CheckIcon,
  ChevronIcon,
  ClaimIcon,
  CloseIcon,
  ConfettiIcon,
  CopyIcon,
  DelegateIcon,
  DepositIcon,
  DisconnectWalletIcon,
  DiscordIcon,
  DocsIcon,
  EditIcon,
  EnsIcon,
  FilterIcon,
  GovernanceIcon,
  IdentityIcon,
  IncreaseVouchIcon,
  LeaderboardIcon,
  LinkIcon,
  LockIcon,
  LinkOutIcon,
  ListIcon,
  ManageIcon,
  MarketingIcon,
  OpenWindowIcon,
  PauseIcon,
  PlayIcon,
  ProfileIcon,
  ProtocolIcon,
  PseudoIcon,
  RemoveIcon,
  RepayIcon,
  RotatingIcon,
  SearchIcon,
  SetupIcon,
  StakeIcon,
  SwitchIcon,
  TelegramIcon,
  TermsIcon,
  TransferIcon,
  TwitterIcon,
  UnionIcon,
  VouchIcon,
  WalletIcon,
  WarningIcon,
  WithdrawIcon,
];

const networks = [ArbitrumIcon, EthereumIcon, GoerliIcon, OptimismIcon];

const status = [PendingIcon, InfoIcon, FailedIcon, SuccessIcon];

const transactions = [
  CancelVouchIcon,
  NewMemberIcon,
  NewVouchIcon,
  NewVouchReceivedIcon,
];

const tokens = [DaiIcon, UsdcIcon];

export const Core = () => (
  <>
    <style>{`.icons-all svg, .icons-all .box { max-height: 32px; max-width: 32px; }`}</style>
    <div className="icons-all">
      {icons.map((Icon) => (
        <Box justify="center" mb="8px">
          <Icon />
        </Box>
      ))}
    </div>
  </>
);

export const Status = () => (
  <>
    <style>{`.icons-all svg, .icons-all .box { max-height: 32px; max-width: 32px; }`}</style>
    <div className="icons-all">
      {status.map((Icon) => (
        <Box justify="center" mb="8px">
          <Icon />
        </Box>
      ))}
    </div>
  </>
);

export const Networks = () => (
  <>
    <style>{`.icons-all svg, .icons-all .box { max-height: 32px; max-width: 32px; }`}</style>
    <div className="icons-all">
      {networks.map((Icon) => (
        <Box justify="center" mb="8px">
          <Icon />
        </Box>
      ))}
    </div>
  </>
);

export const Transactions = () => (
  <>
    <style>{`.icons-all svg, .icons-all .box { max-height: 32px; max-width: 32px; }`}</style>
    <div className="icons-all">
      {transactions.map((Icon) => (
        <Box justify="center" mb="8px">
          <Icon />
        </Box>
      ))}
    </div>
  </>
);

export const Tokens = () => (
  <>
    <style>{`.icons-all svg, .icons-all .box { max-height: 32px; max-width: 32px; }`}</style>
    <div className="icons-all">
      {tokens.map((Icon) => (
        <Box justify="center" mb="8px">
          <Icon />
        </Box>
      ))}
    </div>
  </>
);
