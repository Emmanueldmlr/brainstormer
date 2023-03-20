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

        {/* <InputGroup
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
        </InputGroup> */}
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

    </Box>
  );
};

export default QuizCategories;


// query the db and get the wikis that they take quiz on