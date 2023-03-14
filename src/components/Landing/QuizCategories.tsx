import {
  Box,
  chakra,
  Flex,
  Image,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const QuizCategories = () => {
  return (
    <Box bg="#dddddd19">
      <Flex
        py={{ md: 5, base: 6 }}
        w={{ lg: "80%", md: "80%", base: "95%", "2xl": "80%" }}
        flexDir="column"
        alignItems="center"
        textAlign="center"
        gap="3"
        mx="auto"
      >
        <Heading
          fontSize={{ lg: "4xl", md: "2xl", base: "xl", "2xl": "4xl" }}
          mb={{ base: 6 }}
        >
          What categories are available to take tests from?
        </Heading>
        <Text fontSize={{ "2xl": "2xl", md: "lg", base: "md" }}>
          If you have some amount staked, and you are sure of your versatility
          ina any of these categories on IQ.wiki, Ranging from NFTs, to DeFi,
          Cryptocurrencies and more, you can take the test to earn some more IQ
          token
        </Text>
      </Flex>
      <VStack w="full" px="24" mx="auto" gap="4" py="10">
        <HStack shadow="base" rounded="lg" py="2" px="6" w="full" h="56">
          <Flex gap="2" direction="column" alignItems="start" w="70%">
            <Text
              fontWeight="700"
              fontSize={{ lg: "xl", md: "lg", base: "md", "2xl": "2xl" }}
            >
              DApps
            </Text>
            <Text w="90%">
              This quiz session will test your knowledge on decentralized
              applications (dApps), ranging from questions like Time Weighted
              Average Market Maker(TWAMM) like Fraxswap to Defi Lending like
              Aave. A deep knowing of their history,leaderships,
              features,funding and other related topics is important to passing
              the quiz.
            </Text>
            <Text color="#ff5caa" py="3" fontWeight="bold">
              Start Quiz
            </Text>
          </Flex>
          <Image src="/categories/dapps.jpg" width="30%" />
        </HStack>
        <HStack shadow="base" rounded="lg" py="2" px="6" w="full" h="56">
          <Flex gap="2" direction="column" alignItems="start" w="70%">
            <Text
              fontWeight="700"
              fontSize={{ lg: "xl", md: "lg", base: "md", "2xl": "2xl" }}
            >
              NFTs
            </Text>
            <Text w="90%">
              This quiz session covers questions ranging from collection of
              non-fungible tokens(NFTs) like the bored ape yacht club to games
              like Axie infinity to artist like Beeple. A good read on their
              auctioning. mechanics, features, Architecture and other relating
              sub-topics, will make you a good fit for this quiz
            </Text>
            <Text color="#ff5caa" py="3" fontWeight="bold">
              Start Quiz
            </Text>
          </Flex>
          <Image src="/categories/nfts-card.png" width="30%" />
        </HStack>
        <HStack shadow="base" rounded="lg" py="2" px="6" w="full" h="56">
          <Flex gap="2" direction="column" alignItems="start" w="70%">
            <Text
              fontWeight="700"
              fontSize={{ lg: "xl", md: "lg", base: "md", "2xl": "2xl" }}
            >
              Decentralized Finance
            </Text>
            <Text w="90%">
              The quiz on Decentralized Finance (DeFi) category covers
              everything from stablecoin projects like Frax Finance to concepts
              like Yield Farming to the oracles which power DeFi like Chainlink.
              hence, proper knowledge on these companies, is aguarantee to doing
              well in this quiz.
            </Text>
            <Text color="#ff5caa" py="3" fontWeight="bold">
              Start Quiz
            </Text>
          </Flex>
          <Image src="/categories/defi-card.png" width="30%" />
        </HStack>
        <HStack shadow="base" rounded="lg" py="2" px="6" w="full" h="56">
          <Flex gap="2" direction="column" alignItems="start" w="70%">
            <Text
              fontWeight="700"
              fontSize={{ lg: "xl", md: "lg", base: "md", "2xl": "2xl" }}
            >
              People In crypto
            </Text>
            <Text w="90%">
              The People in Crypto quiz covers questions about everyone working
              to grow the crypto space from developers to artists to marketers
              to policy makers and everyone in between. Adequate knowledge about
              every of the individuals discussed on IQ.wiki is what is needed to
              do well in this quiz
            </Text>
            <Text color="#ff5caa" py="3" fontWeight="bold">
              Start Quiz
            </Text>
          </Flex>
          <Image src="/categories/people-card.png" width="30%" />
        </HStack>
        <HStack shadow="base" rounded="lg" py="2" px="6" w="full" h="56">
          <Flex gap="2" direction="column" alignItems="start" w="70%">
            <Text
              fontWeight="700"
              fontSize={{ lg: "xl", md: "lg", base: "md", "2xl": "2xl" }}
            >
              Exchanges
            </Text>
            <Text w="90%">
              The Exchanges quiz category covers all questions ranging from
              crypto exchanges including both centralized exchanges like Binance
              or Coinbase and decentralized exchanges like Uniswap. A good
              knowledge of their history, products and other related headings,
              will make you stand out i this quiz.
            </Text>
            <Text color="#ff5caa" py="3" fontWeight="bold">
              Start Quiz
            </Text>
          </Flex>
          <Image src="/categories/exchanges-card.png" width="30%" />
        </HStack>
        <HStack shadow="base" rounded="lg" py="2" px="6" w="full" h="56">
          <Flex gap="2" direction="column" alignItems="start" w="70%">
            <Text
              fontWeight="700"
              fontSize={{ lg: "xl", md: "lg", base: "md", "2xl": "2xl" }}
            >
              Cryptocurrencies
            </Text>
            <Text w="90%">
              This cryptocurrencies quiz session will cover all questions on
              cryptocurrencies from Bitcoin to IQ. A good insight into their
              history, technology and feature will earn you estra IQ tokens.
            </Text>
            <Text color="#ff5caa" py="3" fontWeight="bold">
              Start Quiz
            </Text>
          </Flex>
          <Image src="/categories/cryptocurrencies-card.png" width="30%" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default QuizCategories;
