import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { BsFillDatabaseFill } from "react-icons/bs";
import { RiWallet3Fill, RiFilePaper2Fill } from "react-icons/ri";
import { GiCash } from "react-icons/gi";

const Iqlearn = () => {
  return (
    <Box w="full" py="20" px="2">
      <chakra.div textAlign="center" w="full">
        <Text fontSize="2xl" fontWeight="semibold">
          How does the IQ Wiki Learn to Earn program work?
        </Text>
      </chakra.div>
      <SimpleGrid
        maxW="1050px"
        w="100%"
        mx="auto"
        py="5"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        spacingX={6}
        spacingY={12}
        px={6}
      >
        <VStack px="2" shadow="base" py="5" textAlign="center" rounded="lg">
          <BsFillDatabaseFill fontSize="30px" color="#ff5caa " />
          <Text fontWeight="600" fontSize="20px">
            Stake Coins
          </Text>
          <Text fontSize="14px" w="90%">
            {" "}
            You must have some staked IQ to earn from the program
          </Text>
        </VStack>
        <VStack px="2" shadow="base" py="5" textAlign="center" rounded="lg">
          <RiWallet3Fill fontSize="30px" color="#ff5caa" />
          <Text fontWeight="600" fontSize="20px">
            Connect Wallet
          </Text>
          <Text fontSize="14px" w="90%">
            {" "}
            For easy remittance of IQ tokens
          </Text>
        </VStack>
        <VStack px="2" shadow="base" py="5" textAlign="center" rounded="lg">
          <RiFilePaper2Fill fontSize="30px" color="#ff5caa" />
          <Text fontWeight="600" fontSize="20px">
            Take Quiz
          </Text>
          <Text fontSize="14px" w="90%">
            {" "}
            Put Your newfound knowledge to test
          </Text>
        </VStack>
        <VStack px="2" shadow="base" py="5" textAlign="center" rounded="lg">
          <GiCash fontSize="30px" color="#ff5caa" />
          <Text fontWeight="600" fontSize="20px">
            Cash Out
          </Text>
          <Text fontSize="14px" w="90%">
            {" "}
            Get rewarded with IQ tokens for every completed quiz
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Iqlearn;
