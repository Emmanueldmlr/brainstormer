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
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AllCategoriesData } from "../Data/quizCategory";

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
        {AllCategoriesData.map((item, i) => (
          <HStack
            key={i}
            shadow="base"
            rounded="lg"
            py="2"
            px="6"
            w="full"
            h="56"
          >
            <Flex gap="2" direction="column" alignItems="start" w="70%">
              <Text
                fontWeight="700"
                fontSize={{ lg: "xl", md: "lg", base: "md", "2xl": "2xl" }}
              >
                {item.title}
              </Text>
              <Text w="90%">{item.description}</Text>
              <Link href={`/quizs/${item.title}`}>
                <Text color="#ff5caa" py="3" fontWeight="bold">
                  Start Quiz
                </Text>
              </Link>
            </Flex>
            <Image src={item.heroImage} width="30%" />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default QuizCategories;
