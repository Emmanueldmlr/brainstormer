import { Questions } from "@/components/Data/mockQuestions";
import {
  Box,
  Heading,
  ListItem,
  Stack,
  OrderedList,
  Text,
  Button,
  chakra,
  VStack,
  Radio,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const QuizPage = () => {
  const router = useRouter();
  const toast = useToast();
  const category = router.query.quiz as string;
  const [timeLeft, setTimeLeft] = useState(600);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState("none");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [startQuiz, setStartQuiz] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [reviewAnswers, setReviewAnswers] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [buttonText, setButtonTest] = useState("Continue");
  const [answers, setAnswers] = useState<string[]>([]);
  const [RealAnswers, setRealAnswers] = useState<string[]>([]);
  const [questions, setQuestions] = useState(
    Questions[`Question ${questionNumber}`]
  );

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const ContiueandNext = () => {
    if (!startQuiz) {
      setStartQuiz(true);
      setButtonTest("Next");
    } else if (startQuiz && questionNumber !== 10) {
      nextQuestion();
    } else if (startQuiz && questionNumber === 10) {
      setAnswers((answers) => [...answers, checked]);
      setQuestionNumber(questionNumber + 1);
    }
  };

  const nextQuestion = () => {
    setAnswers((answers) => [...answers, checked]);
    const num = questionNumber + 1;
    // setTimeLeft(90);
    setChecked("none");
    setQuestionNumber(num);
    setDisableNext(true);
    setQuestions(Questions[`Question ${num}`]);
  };

  useEffect(() => {
    if (startQuiz && !endQuiz) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, startQuiz, endQuiz]);

  useEffect(() => {
    if (timeLeft < 0) {
      toast({
        title: "Timer Ended.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      nextQuestion();
    }
    if (questionNumber > 10) {
      setEndQuiz(true);
      setQuestionNumber(1);
      const realAnswers = Object.values(Questions)
        .map((question) => question.answer[0].id)
        .filter((answerId) => answerId !== undefined);

      const count = realAnswers.reduce((acc, val, index) => {
        if (val === answers[index]) {
          acc += 1;
        }
        return acc;
      }, 0);
      setRealAnswers(realAnswers);
      setScore(count);
    }
  }, [timeLeft, questionNumber]);

  const ReviewNext = () => {
    if (questionNumber !== 10) {
      const num = questionNumber + 1;
      setQuestionNumber(num);
      setQuestions(Questions[`Question ${num}`]);
    } else {
      setEndQuiz(true);
      setQuestionNumber(1);
      setReviewAnswers(false);
      setStartQuiz(true);
    }
  };

  const BgColor = (i: number, id: string) => {
    if (RealAnswers[i] === answers[i] && id === RealAnswers[i]) {
      return "green.300";
    } else if (RealAnswers[i] !== answers[i] && id === RealAnswers[i]) {
      return "green.300";
    } else if (RealAnswers[i] !== answers[i] && id === answers[i]) {
      return "red.300";
    }
  };

  const Checked = (i: number, id: string) => {
    if (RealAnswers[i] === answers[i] && id === RealAnswers[i]) {
      return true;
    } else if (RealAnswers[i] !== answers[i] && id === RealAnswers[i]) {
      return false;
    } else if (RealAnswers[i] !== answers[i] && id === answers[i]) {
      return true;
    }
  };

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
          lineHeight="23px"
        >
          <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="semibold">
            Note:
          </Text>
          <VStack w="full" alignItems="start" fontWeight="400">
            {reviewAnswers ? (
              <Text fontSize={{ base: "xs", lg: "sm" }}>
                The Option outlined red, is your answer, that was wrong. <br />
                The right answer will be outlined with green.
                <br />
                An absence of the red outline, means you got that question
                correctly.
              </Text>
            ) : (
              <Text fontSize={{ base: "xs", lg: "sm" }}>
                All questions must be answered. <br />
                Your answers will automatically be submitted, if time elapses.
              </Text>
            )}
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
        {startQuiz && !endQuiz && (
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
        direction={{ base: "column", lg: "row" }}
      >
        <Stack order={{ base: 1, lg: 0 }} px="10" w="full" gap="2">
          {!startQuiz && !endQuiz && (
            <>
              <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="medium">
                Instructions
              </Text>

              <OrderedList>
                <ListItem py="1">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    Total Number of Questions: <b>10</b>
                  </Text>
                </ListItem>
                <ListItem py="2">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    Total time limit of <b>{formatTime(timeLeft)}</b>
                  </Text>
                </ListItem>
                <ListItem py="1">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    Must be finished at a sitting, cannot be saved for later
                  </Text>
                </ListItem>
                <ListItem py="1">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    Each question gives a total of <b>1 point</b>
                  </Text>
                </ListItem>
                <ListItem py="1">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    Will not let you finish without attempting all questions
                    except in the case where your time elapses
                  </Text>
                </ListItem>
                <ListItem py="1">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    There is a timer at the top of each question, ensure not to
                    lose track of time
                  </Text>
                </ListItem>
                <ListItem py="1">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    One question will be displayed per page
                  </Text>
                </ListItem>
                <ListItem py="1">
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="normal">
                    You can access previous question, within the alloted
                    timeframe.
                  </Text>
                </ListItem>
              </OrderedList>
            </>
          )}
          {startQuiz && !endQuiz && (
            <>
              <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="400">
                {`Question ${questionNumber} out of 10`}
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                pt="2"
                fontWeight="semibold"
              >
                {`${questionNumber}. ${questions.question}`}
              </Text>
              {questions.options.map((item, i) => (
                <chakra.div
                  w="full"
                  key={i}
                  px="2"
                  border="1px"
                  borderColor="gray.200"
                  rounded="md"
                >
                  <Radio
                    onChange={() => {
                      setChecked(item.id);
                      setDisableNext(false);
                    }}
                    // color="black"
                    colorScheme="pink"
                    isChecked={checked === item.id}
                    py={2}
                    value={item.id}
                  >
                    <chakra.span px="2" fontWeight="bold">
                      {item.id}
                    </chakra.span>
                    {item.question}
                  </Radio>
                </chakra.div>
              ))}
            </>
          )}
          {startQuiz && endQuiz && !reviewAnswers && (
            <Flex w="full" direction="column" gap="4" py="2" px="3">
              <Text fontSize={{ base: "sm", lg: "lg" }} fontWeight="medium">
                Quiz Summary
              </Text>
              <VStack
                w="full"
                color="black"
                fontSize={{ base: "sm", lg: "md" }}
                fontWeight="400"
                spacing="2"
                alignItems="start"
              >
                <Text>
                  Number of Questions : <b>10</b>
                </Text>
                <Text>
                  Total TimeSpent: <b>5:00</b>
                </Text>
                <Text>
                  Total points gotten : <b>{score} </b>
                </Text>
                <Text>
                  IQ Reward: <b>fjfj</b>
                </Text>
                <Text>
                  Percentage: <b>{(score / 10) * 100} %</b>
                </Text>
                <chakra.div
                  py="4"
                  cursor="pointer"
                  fontSize="lg"
                  color="pink.300"
                  fontWeight="medium"
                  _hover={{ color: "pink.400" }}
                  onClick={() => setReviewAnswers(true)}
                >
                  Review Your Answers
                </chakra.div>
              </VStack>
            </Flex>
          )}
          {reviewAnswers && (
            <>
              <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="400">
                {`Question ${questionNumber} out of 10`}
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                pt="2"
                fontWeight="semibold"
              >
                {`${questionNumber}. ${questions.question}`}
              </Text>
              {questions.options.map((item, i) => (
                <chakra.div
                  w="full"
                  key={i}
                  px="2"
                  border="1px"
                  borderColor={
                    BgColor(questionNumber - 1, item.id) ?? "gray.200"
                  }
                  rounded="md"
                >
                  <Radio
                    color="black"
                    colorScheme="pink"
                    py={2}
                    isChecked={Checked(questionNumber - 1, item.id)}
                    isReadOnly
                  >
                    <chakra.span px="2" fontWeight="bold">
                      {item.id}
                    </chakra.span>
                    {item.question}
                  </Radio>
                </chakra.div>
              ))}
            </>
          )}
        </Stack>
      </Flex>
      {!endQuiz && (
        <chakra.div w="full" pl="3" pt="8">
          <Button
            size="lg"
            fontSize="sm"
            rounded="none"
            px="10"
            isDisabled={startQuiz && disableNext}
            color="white"
            fontWeight="medium"
            bg="pink.300"
            _hover={{ bg: "pink.500", color: "gray.100" }}
            onClick={ContiueandNext}
          >
            {buttonText}
          </Button>
        </chakra.div>
      )}

      {reviewAnswers && (
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
            onClick={ReviewNext}
          >
            {buttonText}
          </Button>
        </chakra.div>
      )}
    </Box>
  );
};

export default QuizPage;

/// will be calling api to send content and then recieve questions and answers
