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
          <Image
            src="https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmZLndzstmC3ZmnWFQj5pyqCar1g1ZH7hQ6DprijivMw4K&w=640&q=95"
            w="20%"
            rounded="lg"
          />

          <VStack direction="column" gap="3" w="full">
            <Flex
              justifyContent="space-between"
              w="full"
              pr="3"
              fontWeight="semibold"
            >
              <Text>IQ TOKEN </Text>
              <Text color="pink.300">Cryptocurrencies</Text>
            </Flex>
            <Text fontSize={{ "2xl": "lg", md: "16px", base: "sm" }}>
              The IQ token is a cryptocurrency dedicated to building a more
              intelligent future through artificial intelligence and blockchain
              technology. The IQ token powers a knowledge ecosystem...
            </Text>
            <chakra.div w="full">
              <Link href={`/quizs/1`}>
                <Text fontSize="lg" color="pink.300" fontWeight="semibold">
                  Take Quiz
                </Text>
              </Link>
            </chakra.div>
          </VStack>
        </HStack>
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
          <Image
            src="https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmSKQvE1XRvBYNDjxwv1YjVxgQUpmdJ7FazGE5M8WKcZZq&w=640&q=95"
            w="20%"
            rounded="lg"
          />

          <VStack direction="column" gap="3" w="full">
            <Flex
              justifyContent="space-between"
              w="full"
              pr="3"
              fontWeight="semibold"
            >
              <Text>Braindao</Text>
              <Text color="pink.300">DAOs</Text>
            </Flex>
            <Text fontSize={{ "2xl": "lg", md: "16px", base: "sm" }}>
              BrainDAO is the governing DAO of the IQ ecosystem. BrainDAO's
              mission is to build a more intelligent future through the IQ
              token...
            </Text>
            <chakra.div w="full">
              <Link href={`/quizs/2`}>
                <Text fontSize="lg" color="pink.300" fontWeight="semibold">
                  Take Quiz
                </Text>
              </Link>
            </chakra.div>
          </VStack>
        </HStack>
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
          <Image
            src="https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmUmUpVxoL2bFYx3wmdkniMQ7rEmesKcotWbesDT33ZnPX&w=640&q=95"
            w="20%"
            rounded="lg"
          />

          <VStack direction="column" gap="3" w="full">
            <Flex
              justifyContent="space-between"
              w="full"
              pr="3"
              fontWeight="semibold"
            >
              <Text>Theodor Forselius</Text>
              <Text color="pink.300">People in Crypto</Text>
            </Flex>
            <Text fontSize={{ "2xl": "lg", md: "16px", base: "sm" }}>
              Theodor grew up in Jönköping, Sweden. When he was 11 years old he
              founded an online gaming community that hosted online servers for
              i...
            </Text>
            <chakra.div w="full">
              <Link href={`/quizs/3`}>
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
