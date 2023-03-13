import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Herosection = () => {
  return (
    <Box
      bg="url(/background/ranking-bg-light.png)"
      _dark={{
        bg: "url(/background/ranking-bg-dark.png)",
      }}
      bgPos="center"
      bgSize="cover !important"
    >
      <Flex
        py={{ md: 20, base: 24 }}
        w={{ lg: "80%", md: "80%", base: "95%", "2xl": "80%" }}
        mx="auto"
        flexDir="column"
        alignItems="center"
        textAlign="center"
        gap="3"
      >
        <Heading
          fontSize={{ lg: "4xl", md: "2xl", base: "xl", "2xl": "4xl" }}
          mb={{ base: 6 }}
        >
          THE WORLD’S BEST CRYPTO LEARN TO EARN PLATFORM
        </Heading>
        <Text fontSize={{ "2xl": "2xl", md: "lg", base: "md" }}>
          The biggest rewarding system with incorporated auto-claim feature,
          learning just got fascinating with IQ Wik!!i
        </Text>
      </Flex>
    </Box>
  );
};
export default Herosection;
