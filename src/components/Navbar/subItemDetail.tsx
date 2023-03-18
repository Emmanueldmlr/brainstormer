import { shortenAccount } from "@/utils/shorteningVars";
import { CheckIcon } from "@chakra-ui/icons";
import {
  chakra,
  Flex,
  Icon,
  Divider,
  ComponentWithAs,
  FlexProps,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import {
  RiUserFill,
  RiFileCopyLine,
  RiExternalLinkLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { useAccount, useDisconnect } from "wagmi";
import { Polygon } from "../Icons/polygon";

type SubMenuItemProps = {
  label: string;
  action?: () => void;
  icon: IconType | ComponentWithAs<"svg">;
} & FlexProps;

const SubMenuItem = (props: SubMenuItemProps) => {
  const { icon, label, action, ...rest } = props;
  return (
    <Flex
      align="center"
      color="fadedText4"
      onClick={action}
      px="6"
      py="2.5"
      gap="2"
      cursor="pointer"
      {...rest}
    >
      <Icon as={icon} boxSize="6" />
      <Text fontWeight="bold">{label}</Text>
    </Flex>
  );
};

const SubItemDetail = () => {
  const { address, connector, isConnected, isDisconnected } = useAccount();
  const { disconnect, status } = useDisconnect();
  const logout = () => {
    disconnect();
  };

  // const { userBalance } = useFetchWalletBalance(address);
  // const [balanceBreakdown, setBalanceBreakdown] = useState<
  //   TokenDetailsType[] | null
  // >(null);

  // const { hiiq } = useHiIQBalance(address);

  // const hiIQData = {
  //   formatted: `${hiiq?.hiiqBalance}`,
  //   symbol: `${hiiq?.symbol}`,
  //   tokensArray: { price: hiiq?.totalUsdBalance ?? 0, token: "HiIQ" },
  // };

  // useEffect(() => {
  //   if (userBalance) {
  //     fetchRateAndCalculateTotalBalance(userBalance).then((result) => {
  //       setBalanceBreakdown(result);
  //     });
  //   }
  // }, [userBalance]);

  const { hasCopied, onCopy: copyAddress } = useClipboard(address as string);
  return (
    <>
      <chakra.div mx="6" pb="5">
        <Text fontWeight="bold">My Wallet</Text>
        <Flex mt="3" align="center" gap="2.5">
          <chakra.div pos="relative">
            <Icon as={RiUserFill} fontSize="30" />
          </chakra.div>
          <Flex direction="column" align="space-between">
            <Text fontWeight="bold" maxW="110px" noOfLines={1}>
              {shortenAccount(address ?? "")}
            </Text>
            <Text color="dimmedText" fontWeight="semibold">
              {connector?.name}
            </Text>
          </Flex>
        </Flex>
        <Flex
          mb="9"
          mt="4.5"
          rounded="md"
          bg="gray.100"
          p="3"
          direction="column"
        >
          <Flex align="space-between" gap="4">
            <Icon as={Polygon} fontSize="2xl" />
            <Text color="dimmedText" fontWeight="semibold">
              Polygon Mumbai
            </Text>
          </Flex>

          {/* {balanceBreakdown &&
        userBalance &&
        userBalance.length !== 0 &&
        userBalance?.map((details, key) => {
          if (!details?.data?.symbol) return null;
          return (
            <TokenItem
              key={key}
              symbol={details?.data?.symbol}
              icon={tokenDetails[details?.data?.symbol]?.logo}
              amount={Number(details?.data?.formatted)}
              tokensArray={balanceBreakdown}
            />
          );
        })}

      {hiiq && userBalance && userBalance.length !== 0 && (
        <TokenItem
          symbol={hiIQData?.symbol}
          icon={BraindaoLogo}
          amount={Number(hiiq?.hiiqBalance)}
          tokensArray={[hiIQData?.tokensArray]}
        />
      )} */}
        </Flex>
      </chakra.div>

      <Divider mb="6" />
      <SubMenuItem
        label="Copy Address"
        action={copyAddress}
        icon={RiFileCopyLine}
        {...(hasCopied && {
          color: "green",
          icon: CheckIcon,
        })}
      />
      <SubMenuItem
        label="View on MumbaiScan"
        action={() =>
          window.open(
            `https://mumbai.polygonscan.com/address/${address}`,
            "_blank"
          )
        }
        icon={RiExternalLinkLine}
      />
      <SubMenuItem label="Disconnect" action={logout} icon={RiLogoutBoxLine} />
    </>
  );
};

export default SubItemDetail;
