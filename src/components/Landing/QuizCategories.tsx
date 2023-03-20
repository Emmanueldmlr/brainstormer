import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Flex,
  Image,
  Heading,
  HStack,
  Text,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
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
          What wikis are available to take tests from?
        </Heading>

        <InputGroup
          size={{ base: "md", lg: "lg" }}
          maxW={{ base: "60%", lg: "80%" }}
        >
          <InputRightElement mr="15px" pointerEvents="none" h="full">
            <Search2Icon color="gray.300" />
          </InputRightElement>
          <Input
            placeholder="Search for wikis here"
            _placeholderShown={{
              textOverflow: "ellipsis",
            }}
            fontSize="16"
          />
        </InputGroup>
      </Flex>
      {/* <VStack w="full" px="24" mx="auto" pt="4" pb="20">
       
        <Image src="/rafiki.svg" alt="search wikis here" />
        <Text
          fontSize={{ "2xl": "4xl", md: "xl", base: "md" }}
          fontWeight="bold"
          pt="5"
          pb="2"
        >
          Take tests on your favorite topics
        </Text>

        <Text
          fontSize={{ "2xl": "lg", md: "md", base: "sm" }}
          fontWeight="normal"
        >
          Search for wikis you would like to take tests on
        </Text>
      </VStack> */}
      <VStack w="full" gap="3" px="10%" py="5">
        <HStack
          py="4"
          px="3"
          bg="white"
          shadow="md"
          rounded="lg"
          border="1px"
          borderColor="gray.200"
          gap="3"
        >
          <Image src="./categories/dapps.jpg" w="30%" />

          <VStack direction="column" gap="3" w="full">
            <Flex
              justifyContent="space-between"
              w="full"
              pr="3"
              fontWeight="semibold"
            >
              <Text>JOE LUBIN</Text>
              <Text color="pink.300">People in Crypto</Text>
            </Flex>
            <Text fontSize={{ "2xl": "2xl", md: "md", base: "sm" }}>
              Joe Lubin is a canadian entrepreneur and blockchain pioneer. He is
              best known as one of the co-founders of Ethereum, a day platform
              that enables the creation of decentralized applications (dApps).
            </Text>
            <chakra.div w="full">
              <Link href={`/quizs/iq_token`}>
                <Text fontSize="lg" color="pink.300" fontWeight="semibold">
                  Take Quiz
                </Text>
              </Link>
            </chakra.div>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default QuizCategories;

// query the db and get the wikis that they take quiz on
