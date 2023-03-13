import Herosection from "@/components/Landing/Herosection";
import Iqlearn from "@/components/Landing/Iqlearn";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="100vh">
      <Herosection />
      <Iqlearn />
    </Box>
  );
}
