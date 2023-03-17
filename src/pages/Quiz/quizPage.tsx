import {
  Box,
  Flex,
  Heading,
  ListItem,
  Stack,
  OrderedList,
  Text,
  Button,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import { BraindaoLogo3 } from "../../components/Icons/BraindaoLogo";

const quizPage = () => {
  return (
    <Box w="full" px="20" py="10">
      <Heading
        textAlign={{ base: "center", lg: "left" }}
        fontSize={{ base: "xl", lg: "2xl" }}
        pb="10"
      >
        QUIZ - People in Cryptocurrency
      </Heading>

      <Flex
        gap={{ lg: "15" }}
        p={{ base: 4, md: 7 }}
        bg="#F8F8F9"
        h="fit-content"
        rounded="lg"
        align={{ base: "start", lg: "center" }}
        direction={{ base: "column", lg: "row" }}
      >
        <Stack order={{ base: 1, lg: 0 }} px="10" gap="2">
          <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="medium">
            Instructions
          </Text>
          <OrderedList>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                Total Number of Questions: <b>10</b>
              </Text>
            </ListItem>
            <ListItem py="2">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                Total time limit of <b>01:30</b>
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                Must be finished at a sitting, cannot be saved for later
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                Each question gives a total of <b>1 point</b>
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                Will not let you finish without attempting all questions except
                in the case where your time elapses
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                There is a timer at the top of each question, ensure not to lose
                track of time
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                One question will be displayed per page
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="normal"
              >
                You can access previous question, within the alloted timeframe.
              </Text>
            </ListItem>
          </OrderedList>
        </Stack>
      </Flex>
      <chakra.div w="full" pl="3" pt="10">
        <Button
          size="lg"
          fontSize="sm"
          rounded="none"
          px="10"
          color="white"
          fontWeight="medium"
          bg="pink.300"
          _hover={{ bg: "pink.500", color: "gray.100" }}
        >
          Continue
        </Button>
      </chakra.div>
    </Box>
  );
};

export default quizPage;
