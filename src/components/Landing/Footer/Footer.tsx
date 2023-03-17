import {
  Container,
  Stack,
  SimpleGrid,
  Text,
  Divider,
  Flex,
  Box,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SocialFooter from "./Socials";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  const spacing = useBreakpointValue({ base: 8, lg: 24 });
  return (
    <Box bg="#b34093 " color="default" pos="relative" zIndex="2">
      <Container
        as={Stack}
        maxW={{ base: "7xl", xl: "7xl", "2xl": "80%" }}
        py={5}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={spacing} py={10}>
          <GridItem>
            <Flex
              gap="3"
              justifyContent="start"
              color="white"
              direction="column"
            >
              <Text fontSize="xl" fontWeight="bold" py={2}>
                IQ WIKI QUIZ
              </Text>
              <Text>
                THE WORLD’S BEST CRYPTO LEARN TO EARN PLATFORM The biggest
                rewarding system with incorporated auto-claim feature, learning
                just got fascinating with IQ Wiki !!
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <SocialFooter />
          </GridItem>
        </SimpleGrid>
        <Divider orientation="horizontal" />
        <SimpleGrid fontSize="sm" columns={{ base: 1, lg: 2 }} color="white">
          <Stack align={{ base: "center", lg: "flex-start" }} flex="1">
            <Flex
              alignItems="center"
              direction={{ base: "column", md: "initial" }}
            >
              <Text py={3} pr={2}>
                {" "}
                © {thisYear} IQ.Wiki Powered By
                <Link target="_blank" href="https://braindao.org/">
                  <Text as="span" _hover={{ textDecoration: "underline" }}>
                    BrainDAO
                  </Text>
                </Link>
                <Text as="span" px="1">
                  &{" "}
                </Text>
                <Link target="_blank" href="https://iq.braindao.org/">
                  <Text as="span" _hover={{ textDecoration: "underline" }}>
                    IQ{" "}
                  </Text>
                </Link>
              </Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
