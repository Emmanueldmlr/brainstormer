import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useClipboard,
  FlexProps,
  chakra,
  ComponentWithAs,
  Icon,
  HStack,
  IconProps,
} from "@chakra-ui/react";
import {
  RiLogoutBoxLine,
  RiExternalLinkLine,
  RiFileCopyLine,
  RiUserFill,
} from "react-icons/ri";
import { shortenAccount, shortenBalance } from "@/utils/shorteningVars";
import { useAccount, useDisconnect } from "wagmi";
import { FaChevronDown } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { CheckIcon } from "@chakra-ui/icons";
import { Polygon } from "../Icons/polygon";
import { useFetchWalletBalance } from "../wallet/use-fetch-wallet-balance";
import { TokenDetailsType } from "../wallet/types";
import { getTokenValue, useHiIQBalance } from "../wallet/use-hiiiq-balance";
import { fetchRateAndCalculateTotalBalance } from "../../utils/balance";
import { tokenDetails } from "../wallet/wallet-data";
import { BraindaoLogo3 } from "../Icons/BraindaoLogo";

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

type TokenItemProps = {
  symbol?: string;
  icon: (props: IconProps) => JSX.Element;
  amount: number;
  tokensArray: TokenDetailsType[] | null;
};

const TokenItem = (props: TokenItemProps) => {
  const { icon, symbol, amount, tokensArray } = props;
  if (!tokensArray) return null;
  return (
    <Flex align="center" px="13px" py="3.5" gap="2.5" w="full">
      <Icon as={icon} boxSize="6" />
      <Text fontWeight="bold">{symbol}</Text>
      <Flex
        ml="auto"
        direction="column"
        align="space-between"
        textAlign="right"
      >
        <Text fontWeight="bold">{shortenBalance(amount)}</Text>
        <Text fontWeight="bold" fontSize="sm" color="fadedText5">
          ${shortenBalance(getTokenValue(tokensArray, symbol))}
        </Text>
      </Flex>
    </Flex>
  );
};

const ProfileSubMenu = () => {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const logout = () => {
    disconnect();
  };

  const { userBalance } = useFetchWalletBalance(address);
  const [balanceBreakdown, setBalanceBreakdown] = useState<
    TokenDetailsType[] | null
  >(null);

  const { hiiq } = useHiIQBalance(address);

  const hiIQData = {
    formatted: `${hiiq?.hiiqBalance}`,
    symbol: `${hiiq?.symbol}`,
    tokensArray: { price: hiiq?.totalUsdBalance ?? 0, token: "HiIQ" },
  };

  useEffect(() => {
    if (userBalance) {
      fetchRateAndCalculateTotalBalance(userBalance).then((result) => {
        setBalanceBreakdown(result);
      });
    }
  }, [userBalance]);

  const { hasCopied, onCopy: copyAddress } = useClipboard(address as string);

  return (
    <HStack>
      <Popover>
        <PopoverTrigger>
          <Button
            size="md"
            fontWeight="500"
            variant="outline"
            color="black"
            leftIcon={<RiUserFill />}
            fontSize="sm"
            rightIcon={<FaChevronDown />}
          >
            {address && shortenAccount(address)}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          pt="5"
          pb="6"
          bg="white"
          color="black"
          w="355px"
          mr={{ md: "13", lg: "16" }}
        >
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

              {balanceBreakdown &&
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
                  icon={BraindaoLogo3}
                  amount={Number(hiiq?.hiiqBalance)}
                  tokensArray={[hiIQData?.tokensArray]}
                />
              )}
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
          <SubMenuItem
            label="Disconnect"
            action={logout}
            icon={RiLogoutBoxLine}
          />
        </PopoverContent>
      </Popover>
      <Button
        size="md"
        disabled
        fontSize="sm"
        px="4"
        fontWeight="medium"
        bg="pink.300"
        color="white"
        _hover={{ color: "white", bg: "pink.300" }}
      >
        <chakra.div h="2" w="2" rounded="full" bg="#a9b8ef" mr="2"></chakra.div>
        Wallet Connected
      </Button>
    </HStack>
  );
};

export default ProfileSubMenu;
