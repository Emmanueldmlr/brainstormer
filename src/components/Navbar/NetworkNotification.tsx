import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FocusableElement } from "@chakra-ui/utils";
import { RiErrorWarningFill, RiCloseLine } from "react-icons/ri";
import { utils } from "ethers";

export const NetworkNotification = ({
  onClose,
  isOpen,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const cancelRef = React.useRef<FocusableElement>(null);

  const NETWORK_DATA = {
    id: 1,
    image: "/polygon.png",
    name: "Polygon",
    isActive: true,
    chainNoHex: 137,
    chainId: utils.hexValue(137),
    chainName: "Polygon Mainnet",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com"],
  };
  const { chainId, chainName, rpcUrls } = NETWORK_DATA;

  const handleSwitchNetwork = async () => {
    try {
      await window.ethereum?.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });
      onClose();
    } catch (switchError) {
      const err = switchError as Record<string, number>;
      if (err.code === 4902) {
        try {
          await window.ethereum?.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId,
                chainName,
                rpcUrls,
              },
            ],
          });
          onClose();
        } catch (addError) {
          return null;
        }
      }
    }
    return null;
  };

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size="lg"
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <Box p={8}>
          <Flex>
            <Icon
              cursor="pointer"
              fontSize="3xl"
              fontWeight={600}
              as={RiErrorWarningFill}
              mr={5}
            />
            <Text flex="1" fontSize="xl" fontWeight="black">
              Switch Network
            </Text>
            <Icon
              cursor="pointer"
              fontSize="3xl"
              fontWeight={600}
              as={RiCloseLine}
              onClick={() => onClose()}
            />
          </Flex>
          <Text mt="6" w="90%" lineHeight="2">
            Your wallet is currently connected to an unsupported network. To
            continue with Polygon Mainnet, Switch the network in your wallet to
            Polygon Mainnet.
          </Text>
          <Text mt="6" w="90%" lineHeight="2">
            Switch wallet if unable to change wallet network.
          </Text>
          <Flex mt="6">
            <Text
              onClick={() => onClose()}
              color="primary"
              cursor="pointer"
              pt={2}
              flex="1"
              fontSize="sm"
              fontWeight="bold"
            >
              Dismiss
            </Text>
            <Button onClick={handleSwitchNetwork} variant="outline">
              Switch Network
            </Button>
          </Flex>
        </Box>
      </AlertDialogContent>
    </AlertDialog>
  );
};
