import React from "react";
import {
  SimpleGrid,
  Stack,
  Icon,
  Text,
  Button,
  chakra,
  Link,
} from "@chakra-ui/react";
import { Socials } from "@/components/Data/socialsData";

export const SocialIcon = ({
  Icon,
  link,
}: {
  Icon: JSX.Element;
  link: string;
}) => (
  <Link target="_blank" href={link} _hover={{ textDecoration: "none" }}>
    <chakra.span srOnly>{link}</chakra.span>
    <Button size="md" variant="social" bg="#ff5caa">
      <chakra.span srOnly>{link}</chakra.span>
      {Icon}
    </Button>
  </Link>
);

const SocialFooter = () => {
  return (
    <Stack align={{ base: "center", lg: "flex-start" }} color="white">
      <Text fontSize="xl" fontWeight="bold" py={2}>
        Community Hub
      </Text>
      <SimpleGrid columns={{ base: 3, lg: 7 }} w="full">
        {Socials.map((social) => (
          <SocialIcon
            key={social.href}
            link={social.href}
            Icon={<Icon as={social.icon} w={6} h={7} />}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default SocialFooter;
