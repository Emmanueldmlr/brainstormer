export type Quiz = {
  id: string;
  name: string;
  questions: {
    id: number;
    question: string;
    answer: string;
    options: {
      [key: string]: string;
    }[];
  }[];
}[];

export type answers = {
  scripts: answerScripts[];
  exam_id: string;
};
export type answerScripts = {
  id: number;
  question: string;
  selectedAnswer: string;
};
export const Questions: Quiz = [
  {
    id: " iq_token",
    name: "IQ Token",
    questions: [
      {
        id: 1,
        question: "What feature powers IQ.wiki?",
        answer: "D",
        options: [
          { A: "DeFi and governance token" },
          { B: "Cryptocurrency" },
          { C: "wiki?" },
          { D: "Artificial intelligence" },
        ],
      },
      {
        id: 2,
        question: "What is the purpose of the IQ Token?",
        answer: "D",
        options: [
          {
            A: "To trade digital assets such as stablecoins and blue chip NFTs",
          },
          { B: "To be part of IQ.wiki." },
          { C: "To be managed by BrainDAO." },
          {
            D: "To vote on governance decisions involving both the platform and token itself.",
          },
        ],
      },
      {
        id: 3,
        question:
          "When did IQ.wiki become one of the first decentralized applications to integrate artificial intelligence?",
        answer: "C",
        options: [
          { A: "January 2012" },
          { B: "December 2020" },
          { C: "February 2023" },
          { D: "January 2021" },
        ],
      },
      {
        id: 4,
        question: "What is the BrainDAO team's plan for the AI integration?",
        answer: "A",
        options: [
          {
            A: "To build a system around training artificial intelligence and incentivize its testing and development.",
          },
          {
            B: "To summarize large pages like the wiki on the Bored Ape Yacht Club in seconds.",
          },
          { C: "To create a blog post announcing the integration." },
          { D: "To provide rewards in the form of IQ tokens." },
        ],
      },
      {
        id: 5,
        question: "What will BrainDAO focus on in 2023?",
        answer: "B",
        options: [
          {
            A: "Rewarding contributions to the IQ.wiki encyclopedia with money",
          },
          {
            B: "Integrating AI into the IQ.wiki platform and building a system around training artificial intelligence",
          },
          { C: "Developing new software for artificial intelligence" },
          { D: "Focusing exclusively on AI integration into other platforms" },
        ],
      },
      {
        id: 6,
        question: "What backs the value of the IQ token?",
        answer: "D",
        options: [
          { A: "Physical assets" },
          { B: "Bitcoin" },
          { C: "IQ Stakers" },
          {
            D: "BrainDAO's portfolio of Ethereum, IQ tokens, stablecoins, blue chip NFTs, and other digital assets",
          },
        ],
      },
      {
        id: 7,
        question: "In which exchanges is the IQ token listed?",
        answer: "B",
        options: [
          { A: "Coinbase" },
          { B: "Binance, Crypto.com, and Upbit" },
          { C: "KuCoin" },
          { D: "Kraken" },
        ],
      },
      {
        id: 8,
        question:
          "What is the first constant product automated market maker with an embedded time-weighted average market maker (TWAMM)?",
        answer: "A",
        options: [
          { A: "Fraxswap" },
          { B: "Bitcoin" },
          { C: "Bitcoin" },
          { D: "Uniswap" },
        ],
      },
      {
        id: 9,
        question: "What does the HiIQ staking system allow holders to choose?",
        answer: "C",
        options: [
          { A: "When they should stake their IQ tokens" },
          { B: "The amount of IQ token holders receive" },
          {
            C: "How long they want to lock up their IQ for and the number of IQ tokens they would like to stake",
          },
          { D: "How many tokens they should lock up" },
        ],
      },
      {
        id: 10,
        question: "What proposal went up for voting on October 11, 2022?",
        answer: "A",
        options: [
          { A: "IQIP-14: New IQ Tokenomics for the IQ.wiki Platform" },
          { B: "Sushiswap's oSushi Token" },
          { C: "wiki Platform" },
          { D: "Setting up new tokenomics for the IQ token" },
        ],
      },
    ],
  },
  {
    id: " braindao",
    name: "Braindao",
    questions: [
      {
        id: 1,
        question: "When did BrainDAO launch IQ.wiki?",
        answer: "D",
        options: [
          { A: "January 11, 2022" },
          { B: "wiki?" },
          { C: "December 11, 2022" },
          { D: "October 11, 2022" },
        ],
      },
      {
        id: 2,
        question: "What is the mission of BrainDAO?",
        answer: "A",
        options: [
          {
            A: "To build a more intelligent future through the IQ token",
          },
          { B: "To act as the treasury of the IQ token" },
          { C: "To manage the IQ token and govern the IQ stakers" },
          {
            D: "To create the IQ.wiki platform",
          },
        ],
      },
      {
        id: 3,
        question:
          "What is the flagship decentralized application of the IQ ecosystem?",
        answer: "A",
        options: [
          { A: "IQ.wiki" },
          { B: "Chief Brain Officer Cesar Rodriguez" },
          { C: "Galaxy Brain Navin Vethanayagam" },
          { D: "January 2021" },
        ],
      },
      {
        id: 4,
        question:
          "How much Wrapped Ethereum was in BrainDAO's treasury by September 2022?",
        answer: "C",
        options: [
          {
            A: "$4 million",
          },
          {
            B: "$10 million",
          },
          { C: "$2 million" },
          { D: "$1 million" },
        ],
      },
      {
        id: 5,
        question: "What is one way that BrainDAO's treasury accumulated ETH?",
        answer: "C",
        options: [
          {
            A: "Bond Protocol bonds",
          },
          {
            B: "Time-Weighted Average Market Maker (TWAMM)",
          },
          { C: "Olympus Pro bonds" },
          { D: "Fraxswap" },
        ],
      },
      {
        id: 6,
        question: "What did BrainDAO do in March 2022?",
        answer: "D",
        options: [
          {
            A: "Distribute NFT Derivatives and Intellectual Property to IQ Stakers.",
          },
          { B: "Make its first Blue Chip NFT acquisition." },
          {
            C: "Pass a proposal to diversify the BrainDAO treasury by acquiring Blue Chip NFTs.",
          },
          {
            D: "Pass a proposal to diversify the BrainDAO treasury by selling Blue Chip NFTs.",
          },
        ],
      },
      {
        id: 7,
        question: "Where does BrainApe serve as the mascot?",
        answer: "C",
        options: [
          { A: "BrainApe and NFTs" },
          { B: "DAO and BAYC holders" },
          { C: "BrainDAO and IQ.wiki" },
          { D: "4T pink fur Ape and IQ holders" },
        ],
      },
      {
        id: 8,
        question: "What did BrainDAO acquire in November 2022?",
        answer: "D",
        options: [
          { A: "An advertising campaign" },
          { B: "A film franchise" },
          { C: "Licensing fees" },
          { D: "Pudgy Penguin #2614" },
        ],
      },
      {
        id: 9,
        question: "When did Pudgy Penguins launch?",
        answer: "C",
        options: [
          { A: "August 2021" },
          { B: "May 2021" },
          {
            C: "July 2021",
          },
          { D: "December 2020" },
        ],
      },
      {
        id: 10,
        question: "Why did the DAO acquire the Hashmask?",
        answer: "C",
        options: [
          { A: "To have Pudgy Penguin #2614's baby pink skin." },
          { B: "To have a hub for crypto knowledge and education." },
          { C: "To be one of the first generative art NFTs to gain traction." },
          { D: "To have the rare pink turtleneck trait." },
        ],
      },
    ],
  },
  {
    id: " theodor-forselius",
    name: "Theodor Forselius",
    questions: [
      {
        id: 1,
        question: "At what age did Theodor Forselius co-found IQ.wiki?",
        answer: "A",
        options: [{ A: "19" }, { B: "20" }, { C: "18" }, { D: "21" }],
      },
      {
        id: 2,
        question: "At what age did he found an online gaming community?",
        answer: "A",
        options: [
          {
            A: "11",
          },
          { B: "8" },
          { C: "9" },
          {
            D: "11",
          },
        ],
      },
      {
        id: 3,
        question: "How did Theodor and Sam Kazemian initially meet?",
        answer: "C",
        options: [
          { A: "At high school" },
          { B: "Through social networking" },
          { C: "Through a mutual acquaintance in 2013" },
          { D: "As colleagues at the same IT company" },
        ],
      },
      {
        id: 4,
        question:
          "When did Theodor and Sam first begin discussing the original idea behind Everipedia?",
        answer: "B",
        options: [
          {
            A: "Fall of 2014",
          },
          {
            B: "Summer of 2014",
          },
          { C: "Summer of 2013" },
          { D: "Winter of 2014" },
        ],
      },
      {
        id: 5,
        question: "Who were the co-founders that joined in the spring of 2015?",
        answer: "A",
        options: [
          {
            A: "Mahbod Moghadam and Travis Moore",
          },
          {
            B: "Theodor and Travis Moore",
          },
          { C: "Larry Sanger and Mahbod Moghadam" },
          { D: "Larry Sanger and Theodor" },
        ],
      },
      {
        id: 6,
        question: "How much money did Everipedia raise in February 2018?",
        answer: "B",
        options: [
          {
            A: "$20 million",
          },
          { B: "$30 million" },
          {
            C: "$15 million.",
          },
          {
            D: "$25 million",
          },
        ],
      },
      {
        id: 7,
        question:
          "For what purpose was the oracle service OraQles originally launched in 2020?",
        answer: "A",
        options: [
          {
            A: "To record events from US elections to the Super Bowl on Ethereum",
          },
          { B: "To power a database for web analytics." },
          { C: "To provide encyclopedia-related content." },
          { D: "To focus solely on blockchain-related content." },
        ],
      },
      {
        id: 8,
        question:
          "What was the date when Everipedia's encyclopedia product rebranded to IQ.wiki?",
        answer: "D",
        options: [
          { A: "December 11, 2020" },
          { B: "June 11, 2022" },
          { C: "August 11, 2021" },
          { D: "October 11, 2022" },
        ],
      },
      {
        id: 9,
        question:
          "What position did Suchet Dhindsa assume after the launch of the new IQ.wiki platform?",
        answer: "C",
        options: [
          { A: "CEO of Brainfund" },
          { B: "CTO of Everipedia" },
          {
            C: "CFO and COO of Everipedia",
          },
          { D: "wiki platform?" },
        ],
      },
      {
        id: 10,
        question:
          "Theodor Mauritz Forselius is the Chief Executive Officer of Google.",
        answer: "C",
        options: [{ A: "True" }, { B: "Maybe" }, { C: "Soon" }, { D: "False" }],
      },
    ],
  },
];
