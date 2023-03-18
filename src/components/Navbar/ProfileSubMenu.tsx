import React from "react";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  chakra,
  HStack,
} from "@chakra-ui/react";
import { RiUserFill } from "react-icons/ri";
import { shortenAccount } from "@/utils/shorteningVars";
import { FaChevronDown } from "react-icons/fa";
import SubItemDetail from "./subItemDetail";
import { useAccount } from "wagmi";

const ProfileSubMenu = () => {
  const { address, connector } = useAccount();

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
          <SubItemDetail />
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
