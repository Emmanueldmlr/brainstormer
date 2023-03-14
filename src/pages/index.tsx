import Footer from "@/components/Landing/Footer/Footer";
import Herosection from "@/components/Landing/Herosection";
import Iqlearn from "@/components/Landing/Iqlearn";
import QuizCategories from "@/components/Landing/QuizCategories";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="100vh">
      <Herosection />
      <Iqlearn />
      <QuizCategories />
      <Footer />
    </Box>
  );
}
