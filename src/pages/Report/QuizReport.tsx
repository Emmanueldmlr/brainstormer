import {
  Flex,
  Text,
  Heading,
  Stack,
  ListItem,
  UnorderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
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

      <Flex w="full" direction="column" px="3">
        <Text
          textAlign={{ base: "center", lg: "left" }}
          fontSize={{ base: "sm", lg: "md" }}
          fontWeight="medium"
          pb="5"
        >
          Your Quiz Report ( By Categories )
        </Text>
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th fontWeight="bold" color="black">
                  Quiz Topics
                </Th>
                <Th fontWeight="bold" color="black">
                  {" "}
                  IQ earned (IQ)
                </Th>
                <Th fontWeight="bold" color="black">
                  Total Mark
                </Th>
                <Th fontWeight="bold" color="black">
                  Total Time spent
                </Th>
                <Th fontWeight="bold" color="black">
                  Latest Quiz Date
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>People In Crypto</Td>
                <Td>1200 </Td>
                <Td> 534/1000</Td>
                <Td>2:05:47</Td>
                <Td>10/02/2023</Td>
              </Tr>
              <Tr>
                <Td>Defi</Td>
                <Td>200 </Td>
                <Td> 48/100</Td>
                <Td>23:07</Td>
                <Td>24/05/2023</Td>
              </Tr>
              <Tr>
                <Td>Cryptocurrencies</Td>
                <Td>690 </Td>
                <Td> 410/700</Td>
                <Td>33:04</Td>
                <Td>16/01/2023</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Stack>
  );
}
