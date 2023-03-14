import {
  Flex,
  Text,
  Heading,
  Stack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BraindaoLogo3 } from "../../components/Icons/BraindaoLogo";

export default function QuizReport() {
  return (
    <Stack
      h="full"
      mb="4.375em"
      w="full"
      px="16"
      py={{ base: "5", lg: "6" }}
      spacing={{ base: 7, md: 5, lg: 6 }}
    >
      <Flex
        gap={{ lg: "15" }}
        p={{ base: 4, md: 7 }}
        bg="#F8F8F9"
        h="fit-content"
        rounded="lg"
        align={{ base: "start", lg: "center" }}
        direction={{ base: "column", lg: "row" }}
      >
        <Stack order={{ base: 1, lg: 0 }} px="10" gap="5">
          <Heading
            textAlign={{ base: "center", lg: "left" }}
            fontSize={{ base: "xl", lg: "2xl" }}
          >
            IQ Token Rewards
          </Heading>
          <UnorderedList>
            <ListItem py="2">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="medium"
              >
                A score of 100% in any quiz taken will guarantee you with
                10.00IQ
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="medium"
              >
                A score of 80% in three consecutive test will earn you a total
                of 8.00IQ
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="medium"
              >
                Withdrawals can’t be made until you have a total of 50.00IQ or
                more
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="medium"
              >
                Each question carries one point{" "}
              </Text>
            </ListItem>
            <ListItem py="1">
              <Text
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="medium"
              >
                if all questions are answered correctly, you have a total of 10
                points, which is equal to 10.00IQ
              </Text>
            </ListItem>
          </UnorderedList>
        </Stack>
        <BraindaoLogo3
          mx={{ base: "auto", lg: "none" }}
          h={{ base: "72px", lg: "8.125em" }}
          w={{ base: "72px", lg: "154px" }}
        />
      </Flex>
    </Stack>
  );
}
