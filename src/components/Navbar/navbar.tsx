import {
  Button,
  Flex,
  Spacer,
  Text,
  useDisclosure,
  HStack,
  chakra,
  Icon,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { useNetwork, useAccount } from "wagmi";
import ProfileSubMenu from "./ProfileSubMenu";
import WalletConnect from "./WalletConnect";
import { NetworkNotification } from "./NetworkNotification";
import { utils } from "ethers";
import { RiFilePaper2Fill, RiMenu3Fill } from "react-icons/ri";
import dynamic from "next/dynamic";

export const Navbar = () => {
  const [openWalletConnect, setOpenWalletConnect] = useState<boolean>(false);
  const { chain } = useNetwork();

  const NETWORK_DATA = [
    {
      id: 1,
      image: "/polygon.png",
      name: "Polygon",
      isActive: true,
      chainNoHex: 80001,
      chainId: utils.hexValue(80001),
      chainName: "Polygon Testnet Mumbai",
      nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    },
  ];
  const [currentNetwork, setCurrentNetwork] = useState(NETWORK_DATA[0]);
  const [dropdown, setDropdown] = useState(false);
  const { isConnected: isUserConnected } = useAccount();
  const {
    isOpen: isOpenSwitch,
    onOpen: onOpenSwitch,
    onClose: onCloseSwitch,
  } = useDisclosure();

  useEffect(() => {
    CheckNetwork();
    console.log(isUserConnected);
  }, [isUserConnected, currentNetwork]);

  const Logo = dynamic(() => import("../Elements/IqLogo"));

  const CheckNetwork = () => {
    if (isUserConnected && chain?.id !== currentNetwork.chainNoHex) {
      onOpenSwitch();
      console.log(
        isUserConnected,
        isUserConnected,
        chain?.id,
        currentNetwork.chainNoHex
      );
    }
  };

  return (
    <VStack bg="white" py="2" color="pink.400" boxShadow="md">
      <Flex
        boxSize="full"
        align="center"
        gap="2.5"
        py="15px"
        px={{ base: "4", lg: "10" }}
        fontSize="sm"
        borderColor="white"
        borderBottomWidth="1px"
      >
        <NextLink href="/" passHref>
          <Flex as="a" alignItems="center" gap="3" w="96" cursor="pointer">
            <Logo />
            <Text
              fontWeight="bold"
              color="black"
              fontSize={{ base: "md", md: "2xl" }}
            >
              IQ Wiki Quiz
            </Text>
          </Flex>
        </NextLink>
        <Spacer />
        <>
          {isUserConnected && (
            <NextLink href="/Report/QuizReport" passHref>
              <Button
                size="md"
                disabled
                fontSize="sm"
                px="4"
                fontWeight="medium"
                bg="white"
                border="1px"
                borderColor="gray.100"
              >
                <RiFilePaper2Fill fontSize="20px" color="#ff5caa" />
                <Text fontWeight="semibold" color="black" px="2">
                  Quiz Report
                </Text>
              </Button>
            </NextLink>
          )}
        </>

        <HStack display={{ base: "none", lg: "unset" }} spacing="5">
          <>
            {!isUserConnected ? (
              <Button
                size="sm"
                onClick={() => setOpenWalletConnect(true)}
                fontSize="sm"
                px="4"
                fontWeight="medium"
                bg="pink.300"
                color="white"
                _hover={{ bg: "#F0FFF4", color: "black" }}
              >
                Connect Wallet
              </Button>
            ) : (
              <ProfileSubMenu />
            )}
          </>
        </HStack>
        <chakra.div display={{ base: "unset", lg: "none" }}>
          <Button
            bg="transparent"
            _hover={{ bg: "pink.300", color: "white" }}
            onClick={() => setDropdown(!dropdown)}
          >
            <Icon as={RiMenu3Fill} />
          </Button>
        </chakra.div>
      </Flex>
      <Flex
        w="full"
        display={dropdown ? { base: "unset", lg: "none" } : "none"}
        bg="white"
        py="5"
        fontSize="md"
        textAlign="center"
      >
        {!isUserConnected ? (
          <Button
            size="sm"
            onClick={() => setOpenWalletConnect(true)}
            fontSize="sm"
            px="4"
            fontWeight="medium"
            _hover={{ bg: "pink.300", color: "gray.100" }}
          >
            Connect Wallet
          </Button>
        ) : (
          <VStack gap={3}>
            <Text fontWeight="600">Your Wallet Details</Text>
            <ProfileSubMenu />
          </VStack>
        )}
      </Flex>

      <WalletConnect
        onClose={() => setOpenWalletConnect(false)}
        isOpen={openWalletConnect}
      />
      <NetworkNotification isOpen={isOpenSwitch} onClose={onCloseSwitch} />
    </VStack>
  );
};
