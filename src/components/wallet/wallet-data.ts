import { BraindaoLogo3 } from "../Icons/BraindaoLogo";
import { Ethereum } from "../Icons/ethereum";
import { Polygon } from "../Icons/polygon";
import { IconProps } from "@chakra-ui/react";

export const tokenDetails: {
  [key: string]: { name: string; logo: (props: IconProps) => JSX.Element };
} = {
  IQ: {
    name: "everipedia",
    logo: BraindaoLogo3,
  },
  ETH: {
    name: "ethereum",
    logo: Ethereum,
  },
  MATIC: {
    name: "matic-network",
    logo: Polygon,
  },
  HiIQ: {
    name: "HiIQ",
    logo: BraindaoLogo3,
  },
  GOR: {
    name: "goerli",
    logo: Ethereum,
  },
};
