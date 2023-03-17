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
  useDisclosure,
  VStack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import QuizModal from "./quizModal";

const QuizPage = () => {
  const router = useRouter();
  const toast = useToast();
  const category = router.query.quiz as string;
  const quizDisclosure = useDisclosure();
  const { isOpen, onClose, onOpen } = quizDisclosure;
  const [startQuiz, setStartQuiz] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [buttonText, setButtonTest] = useState("Continue");
  const [questionAnswers, setQuestionAnswers] = useState([]);

  const ContiueandNext = () => {
    if (!startQuiz) {
      setStartQuiz(true);
      setButtonTest("Next");
    }
  };

  const [timeLeft, setTimeLeft] = useState(90);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const timerFinished = () => {
    toast({
      title: "Timer Ended; Next Question.",
      description: ".",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
    setTimeLeft(90);
  };
  useEffect(() => {
    if (startQuiz) {
      const timer = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft > 0) {
            return timeLeft - 1;
          } else {
            clearInterval(timer);
            timerFinished();
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, startQuiz]);

  return (
    <Box w="full" px="20" pt="3" pb="5">
      {startQuiz && (
        <Flex
          color="#5C042E"
          bg=" #FFE5F2"
          py="2"
          px="6"
          gap="4"
          alignItems="center"
          fontWeight="semibold"
          lineHeight="23px"
        >
          <Text fontSize={{ base: "sm", lg: "md" }}>Note:</Text>
          <VStack w="full" alignItems="start">
            <Text fontSize={{ base: "xs", lg: "sm" }}>
              All questions must be answered <br />
              Your answers will automatically be submitted, if time elapses.
            </Text>
          </VStack>
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="center" pt="12">
        <Heading
          textAlign={{ base: "center", lg: "left" }}
          fontSize={{ base: "xl", lg: "2xl" }}
          pb="5"
        >
          QUIZ - {"  "}
          <chakra.span fontWeight="normal">{category}</chakra.span>
        </Heading>
        {startQuiz && (
          <Text>
            Remaining time :
            <chakra.span color="pink.300" px="2" fontWeight="bold">
              {formatTime(timeLeft)}
            </chakra.span>
          </Text>
        )}
      </Flex>

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
      <chakra.div w="full" pl="3" pt="8">
        <Button
          size="lg"
          fontSize="sm"
          rounded="none"
          px="10"
          color="white"
          fontWeight="medium"
          bg="pink.300"
          _hover={{ bg: "pink.500", color: "gray.100" }}
          onClick={ContiueandNext}
        >
          {buttonText}
        </Button>
      </chakra.div>

      <QuizModal onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default QuizPage;
