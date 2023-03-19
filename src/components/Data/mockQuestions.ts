export type Question = {
  id: number;
  question: string;
  options: { id: string; question: string; isAnswer: boolean }[];
  answer: { id: string; question: string; isAnswer: boolean }[];
};

export type Quiz = {
  [key: string]: Question;
};

export const Questions: Quiz = {
  "Question 1": {
    id: 1,
    question: "This is Question 1",
    options: [
      { id: "A", question: "Choose Me", isAnswer: true },
      { id: "B", question: "I like You", isAnswer: false },
      { id: "C", question: "No  its me", isAnswer: false },
      { id: "D", question: "Yes me!!!", isAnswer: false },
    ],
    answer: [{ id: "A", question: "Choose Me", isAnswer: true }],
  },
  "Question 2": {
    id: 2,
    question: "This is Question 2",
    options: [
      { id: "A", question: "What's your name?", isAnswer: false },
      { id: "B", question: "How old are you?", isAnswer: false },
      { id: "C", question: "Where are you from?", isAnswer: true },
      { id: "D", question: "What's your favorite color?", isAnswer: false },
    ],
    answer: [{ id: "C", question: "Where are you from?", isAnswer: true }],
  },
  "Question 3": {
    id: 3,
    question: "This is Question 3",
    options: [
      { id: "A", question: "Which is the capital of Spain?", isAnswer: false },
      {
        id: "B",
        question: "What's the tallest mountain in the world?",
        isAnswer: false,
      },
      {
        id: "C",
        question: "What's the smallest country in the world?",
        isAnswer: true,
      },
      {
        id: "D",
        question: "What's the longest river in the world?",
        isAnswer: false,
      },
    ],
    answer: [
      {
        id: "C",
        question: "What's the smallest country in the world?",
        isAnswer: true,
      },
    ],
  },
  "Question 4": {
    id: 4,
    question: "This is Question 4",
    options: [
      {
        id: "A",
        question: "What's the largest planet in our solar system?",
        isAnswer: true,
      },
      {
        id: "B",
        question: "What's the closest planet to the sun?",
        isAnswer: false,
      },
      {
        id: "C",
        question: "What's the only planet in our solar system with rings?",
        isAnswer: false,
      },
      {
        id: "D",
        question: "What's the fifth planet from the sun?",
        isAnswer: false,
      },
    ],
    answer: [
      {
        id: "A",
        question: "What's the largest planet in our solar system?",
        isAnswer: true,
      },
    ],
  },
  "Question 5": {
    id: 5,
    question: "This is Question 5",
    options: [
      {
        id: "A",
        question: "What's the chemical symbol for gold?",
        isAnswer: true,
      },
      {
        id: "B",
        question: "What's the chemical symbol for silver?",
        isAnswer: false,
      },
      {
        id: "C",
        question: "What's the chemical symbol for iron?",
        isAnswer: false,
      },
      {
        id: "D",
        question: "What's the chemical symbol for copper?",
        isAnswer: false,
      },
    ],
    answer: [
      {
        id: "A",
        question: "What's the chemical symbol for gold?",
        isAnswer: true,
      },
    ],
  },
  "Question 6": {
    id: 6,
    question: "This is Question 6",
    options: [
      {
        id: "A",
        question: "Who is the founder of Microsoft?",
        isAnswer: false,
      },
      { id: "B", question: "Who is the founder of Apple?", isAnswer: false },
      { id: "C", question: "Who is the founder of Amazon?", isAnswer: true },
      { id: "D", question: "Who is the founder of Google?", isAnswer: false },
    ],
    answer: [
      { id: "C", question: "Who is the founder of Amazon?", isAnswer: true },
    ],
  },
  "Question 7": {
    id: 7,
    question: "This is Question 7",
    options: [
      {
        id: "A",
        question: "Who is the current president of the United States?",
        isAnswer: false,
      },
      {
        id: "B",
        question: "Who is the current prime minister of the United Kingdom?",
        isAnswer: false,
      },
      {
        id: "C",
        question: "Who is the current president of China?",
        isAnswer: true,
      },
      {
        id: "D",
        question: "Who is the current prime minister of India?",
        isAnswer: false,
      },
    ],
    answer: [
      {
        id: "C",
        question: "Who is the current president of China?",
        isAnswer: true,
      },
    ],
  },
  "Question 8": {
    id: 8,
    question: "This is Question 8",
    options: [
      {
        id: "A",
        question: "What's the highest-grossing movie of all time?",
        isAnswer: true,
      },
      {
        id: "B",
        question: "What's the most-watched TV show of all time?",
        isAnswer: false,
      },
      {
        id: "C",
        question: "What's the bestselling book of all time?",
        isAnswer: false,
      },
      {
        id: "D",
        question: "What's the bestselling video game of all time?",
        isAnswer: false,
      },
    ],
    answer: [
      {
        id: "A",
        question: "What's the highest-grossing movie of all time?",
        isAnswer: true,
      },
    ],
  },
  "Question 9": {
    id: 9,
    question: "This is Question 9",
    options: [
      {
        id: "A",
        question: "What's the largest animal on Earth?",
        isAnswer: false,
      },
      { id: "B", question: "What's the fastest land animal?", isAnswer: false },
      { id: "C", question: "What's the heaviest bird?", isAnswer: true },
      { id: "D", question: "What's the longest snake?", isAnswer: false },
    ],
    answer: [
      { id: "C", question: "What's the heaviest bird?", isAnswer: true },
    ],
  },
  "Question 10": {
    id: 10,
    question: "This is Question 1",
    options: [
      { id: "A", question: "What's the largest continent?", isAnswer: false },
      { id: "B", question: "What's the smallest continent?", isAnswer: false },
      {
        id: "C",
        question: "What's the most populous continent?",
        isAnswer: true,
      },
      {
        id: "D",
        question: "What's the most sparsely populated continent?",
        isAnswer: false,
      },
    ],
    answer: [
      {
        id: "C",
        question: "What's the most populous continent?",
        isAnswer: true,
      },
    ],
  },
};
