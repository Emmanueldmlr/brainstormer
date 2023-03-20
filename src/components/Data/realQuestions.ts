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
];

//   "Question 10": {
//     id: 10,
//     question: "What proposal went up for voting on October 11, 2022?",
//     answer: [
//       {
//         id: "A",
//         question: "IQIP-14: New IQ Tokenomics for the IQ.wiki Platform",
//         isAnswer: true,
//       },
//     ],
//     options: [
//       {
//         id: "A",
//         question: "IQIP-14: New IQ Tokenomics for the IQ.wiki Platform",
//         isAnswer: false,
//       },
//       { id: "B", question: "Sushiswap's oSushi Token", isAnswer: false },
//       { id: "C", question: "wiki Platform", isAnswer: false },
//       {
//         id: "D",
//         question: "Setting up new tokenomics for the IQ token",
//         isAnswer: false,
//       },
//     ],
//   },

//     "braindao": [
//         {
//             "question": "When did BrainDAO launch IQ.wiki?",
//             "answer": "October 11, 2022",
//             "distractors": [
//                 "January 11, 2022",
//                 "wiki?",
//                 "December 11, 2022",
//                 "April 11, 2022",
//                 "October 11, 2022"
//             ]
//         },
//         {
//             "question": "What is the mission of BrainDAO?",
//             "answer": "To build a more intelligent future through the IQ token",
//             "distractors": [
//                 "To build a more intelligent future through the IQ token",
//                 "To act as the treasury of the IQ token",
//                 "To manage the IQ token and govern the IQ stakers",
//                 "To create the IQ.wiki platform"
//             ]
//         },
//         {
//             "question": "What is the flagship decentralized application of the IQ ecosystem?",
//             "answer": "IQ.wiki",
//             "distractors": [
//                 "BrainDAO",
//                 "Chief Brain Officer Cesar Rodriguez",
//                 "IQ.wiki",
//                 "wiki",
//                 "Galaxy Brain Navin Vethanayagam"
//             ]
//         },
//         {
//             "question": "How much Wrapped Ethereum was in BrainDAO's treasury by September 2022?",
//             "answer": "$2 million",
//             "distractors": [
//                 "$4 million",
//                 "$10 million",
//                 "$2 million",
//                 "$1 million"
//             ]
//         },
//         {
//             "question": "What is one way that BrainDAO's treasury accumulated ETH?",
//             "answer": "Olympus Pro bonds",
//             "distractors": [
//                 "Bond Protocol bonds",
//                 "Time-Weighted Average Market Maker (TWAMM)",
//                 "Olympus Pro bonds",
//                 "Fraxswap"
//             ]
//         },
//         {
//             "question": "What did BrainDAO do in March 2022?",
//             "answer": "Pass a proposal to diversify the BrainDAO treasury by acquiring Blue Chip NFTs.",
//             "distractors": [
//                 "Distribute NFT Derivatives and Intellectual Property to IQ Stakers.",
//                 "Make its first Blue Chip NFT acquisition.",
//                 "Pass a proposal to diversify the BrainDAO treasury by acquiring Blue Chip NFTs.",
//                 "Pass a proposal to diversify the BrainDAO treasury by selling Blue Chip NFTs."
//             ]
//         },
//         {
//             "question": "Where does BrainApe serve as the mascot?",
//             "answer": "BrainDAO and IQ.wiki",
//             "distractors": [
//                 "BrainApe and NFTs",
//                 "DAO and BAYC holders",
//                 "BrainDAO and IQ.wiki",
//                 "4T pink fur Ape and IQ holders",
//                 "wiki"
//             ]
//         },
//         {
//             "question": "What did BrainDAO acquire in November 2022?",
//             "answer": "Pudgy Penguin #2614",
//             "distractors": [
//                 "An advertising campaign",
//                 "A film franchise",
//                 "Licensing fees",
//                 "Pudgy Penguin #2614"
//             ]
//         },
//         {
//             "question": "When did Pudgy Penguins launch?",
//             "answer": "July 2021",
//             "distractors": [
//                 "August 2021",
//                 "May 2021",
//                 "July 2021",
//                 "December 2020"
//             ]
//         },
//         {
//             "question": "Why did the DAO acquire the Hashmask?",
//             "answer": "To be one of the first generative art NFTs to gain traction.",
//             "distractors": [
//                 "To have Pudgy Penguin #2614's baby pink skin.",
//                 "To have a hub for crypto knowledge and education.",
//                 "To be one of the first generative art NFTs to gain traction.",
//                 "To have the rare pink turtleneck trait."
//             ]
//         }
//     ],
//     "theodor-forselius": [
//         {
//             "question": "At what age did Theodor Forselius co-found IQ.wiki?",
//             "answer": "19",
//             "distractors": [
//                 "19",
//                 "20",
//                 "18",
//                 "21",
//                 "wiki?"
//             ]
//         },
//         {
//             "question": "At what age did he found an online gaming community?",
//             "answer": "11",
//             "distractors": [
//                 "10",
//                 "8",
//                 "9",
//                 "11"
//             ]
//         },
//         {
//             "question": "How did Theodor and Sam Kazemian initially meet?",
//             "answer": "Through a mutual acquaintance in 2013",
//             "distractors": [
//                 "At high school",
//                 "Through social networking",
//                 "Through a mutual acquaintance in 2013",
//                 "As colleagues at the same IT company"
//             ]
//         },
//         {
//             "question": "When did Theodor and Sam first begin discussing the original idea behind Everipedia?",
//             "answer": "Summer of 2014",
//             "distractors": [
//                 "Fall of 2014",
//                 "Summer of 2014",
//                 "Summer of 2013",
//                 "Winter of 2014"
//             ]
//         },
//         {
//             "question": "Who were the co-founders that joined in the spring of 2015?",
//             "answer": "Mahbod Moghadam and Travis Moore",
//             "distractors": [
//                 "Mahbod Moghadam and Travis Moore",
//                 "Theodor and Travis Moore",
//                 "Larry Sanger and Mahbod Moghadam",
//                 "Larry Sanger and Theodor"
//             ]
//         },
//         {
//             "question": "How much money did Everipedia raise in February 2018?",
//             "answer": "$30 million",
//             "distractors": [
//                 "$20 million",
//                 "$30 million",
//                 "$15 million",
//                 "$25 million"
//             ]
//         },
//         {
//             "question": "For what purpose was the oracle service OraQles originally launched in 2020?",
//             "answer": "To record events from US elections to the Super Bowl on Ethereum.",
//             "distractors": [
//                 "To record events from US elections to the Super Bowl on Ethereum.",
//                 "To power a database for web analytics.",
//                 "To provide encyclopedia-related content.",
//                 "To focus solely on blockchain-related content."
//             ]
//         },
//         {
//             "question": "What was the date when Everipedia's encyclopedia product rebranded to IQ.wiki?",
//             "answer": "October 11, 2022",
//             "distractors": [
//                 "December 11, 2020",
//                 "June 11, 2022",
//                 "wiki?",
//                 "August 11, 2021",
//                 "October 11, 2022"
//             ]
//         },
//         {
//             "question": "What position did Suchet Dhindsa assume after the launch of the new IQ.wiki platform?",
//             "answer": "CFO and COO of Everipedia",
//             "distractors": [
//                 "CEO of Brainfund",
//                 "Founder of IQ.wiki",
//                 "CFO and COO of Everipedia",
//                 "CTO of Everipedia",
//                 "wiki platform?"
//             ]
//         },
//         {
//             "question": "Theodor Mauritz Forselius is the Chief Executive Officer of Google.",
//             "answer": "False",
//             "distractors": [
//                 "True",
//                 "Maybe",
//                 "Not Sure",
//                 "Soon",
//                 "False"
//             ]
//         }
//     ],
//     "frax-finance": [
//         {
//             "question": "What kind of currency does Frax Finance currently issue?",
//             "answer": "FRAX, a USD pegged asset.",
//             "distractors": [
//                 "Euros",
//                 "The Frax Price Index (FPI) stablecoin",
//                 "FRAX, a USD pegged asset.",
//                 "Yen"
//             ]
//         },
//         {
//             "question": "What is FraxEther (frxETH) primarily used for?",
//             "answer": "A replacement for WETH in smart contracts",
//             "distractors": [
//                 "A replacement for WETH in smart contracts",
//                 "Collaterilized parts of its supply",
//                 "A fractional algorithmic stablecoin",
//                 "A subprotocol within the Frax Protocol"
//             ]
//         },
//         {
//             "question": "On what day did the Frax Finance protocol officially launch on the Ethereum mainnet?",
//             "answer": "Monday, December 21, 2020.",
//             "distractors": [
//                 "Sunday, December 20, 2020",
//                 "November 16, 2020",
//                 "Monday, December 21, 2020.",
//                 "February 23rd, 2023"
//             ]
//         },
//         {
//             "question": "What is the 5th most liquid token on Uniswap as of January 19, 2021?",
//             "answer": "Frax Finance",
//             "distractors": [
//                 "Wrapped Bitcoin",
//                 "FRAX Tokens",
//                 "$43 Million",
//                 "Frax Finance"
//             ]
//         },
//         {
//             "question": "What date did Frax Finance expand its collaboration with Chainlink to bring the U.S. CPI data on-chain in support of the Frax Price Index?",
//             "answer": "January 2022",
//             "distractors": [
//                 "February 17, 2021",
//                 "S. CPI data on-chain in support of the Frax Price Index?",
//                 "January 2022",
//                 "9:00 AM (UTC)",
//                 "February 18, 2021"
//             ]
//         },
//         {
//             "question": "What type of decentralized stablecoin is FRAX?",
//             "answer": "Fractional-algorithmic",
//             "distractors": [
//                 "Fractional-algorithmic",
//                 "No collateral",
//                 "Fiat collateralized",
//                 "Overcollateralized with cryptocurrency"
//             ]
//         },
//         {
//             "question": "What is the purpose of the Frax protocol?",
//             "answer": "To transition from fully collateralized to varying levels of fractional backing.",
//             "distractors": [
//                 "To keep the price of the FRAX token at $1.",
//                 "To transition from fully collateralized to varying levels of fractional backing.",
//                 "To mint tokens and buy back coins to keep the price stable.",
//                 "To ensure a fully collateralized system."
//             ]
//         },
//         {
//             "question": "What is the third token in the two-token system of the Frax protocol?",
//             "answer": "Frax Bonds token (FXB)",
//             "distractors": [
//                 "Frax Bonds token (FXB)",
//                 "Governance rights",
//                 "Stablecoin Frax (FRAX)",
//                 "Frax Share token (FXS)"
//             ]
//         },
//         {
//             "question": "What does the Chainlink oracle allow Frax to do?",
//             "answer": "Stay stable against the United States dollar.",
//             "distractors": [
//                 "Get the true price of USD from Uniswap.",
//                 "Use a weighted average of existing stablecoins only.",
//                 "Stay stable against the United States dollar.",
//                 "Connect to the Ethereum Protocol."
//             ]
//         },
//         {
//             "question": "What percentage of all FXS tokens are allocated to the Project Treasury?",
//             "answer": "5%",
//             "distractors": [
//                 "15%",
//                 "5%",
//                 "25%",
//                 "10%"
//             ]
//         }
//     ],
//     "lens-protocol": [
//         {
//             "question": "How does Lens Protocol enable users to monetize their content?",
//             "answer": "By setting up DAO accounts",
//             "distractors": [
//                 "By reducing carbon footprint",
//                 "By controlling their content",
//                 "By transferring data",
//                 "By setting up DAO accounts"
//             ]
//         },
//         {
//             "question": "What was the main reason Stani Kulechov created Lens Protocol?",
//             "answer": "To provide digital identity control.",
//             "distractors": [
//                 "To provide digital identity control.",
//                 "To determine what information they view.",
//                 "To restrict user content.",
//                 "To boost user data."
//             ]
//         },
//         {
//             "question": "When did Lens Protocol go live on Polygon Mainnet?",
//             "answer": "18th May 2022",
//             "distractors": [
//                 "7th February 2022",
//                 "PeckShield audit",
//                 "Github",
//                 "18th May 2022"
//             ]
//         },
//         {
//             "question": "What is the relationship between Lens Culinaris and certain soil bacteria?",
//             "answer": "Symbiotic",
//             "distractors": [
//                 "Parasitic",
//                 "Compensatory",
//                 "Symbiotic",
//                 "Mutualistic"
//             ]
//         },
//         {
//             "question": "What is tokenization on Lens Protocol?",
//             "answer": "ERC721 NFTs",
//             "distractors": [
//                 "Monetizing social media",
//                 "ERC721 NFTs",
//                 "Trading and collecting NFTs",
//                 "Deploying applications to any chain"
//             ]
//         },
//         {
//             "question": "What is the core entry point for interactions in the Lens Protocol?",
//             "answer": "The LensHub upgradeable contract",
//             "distractors": [
//                 "ERC721 NFT contract",
//                 "Profile NFTs",
//                 "Composable interactions",
//                 "The LensHub upgradeable contract"
//             ]
//         },
//         {
//             "question": "How can an application requiring multiple user profiles obtain assistance?",
//             "answer": "Contacting the team via Discord.",
//             "distractors": [
//                 "Whitelisting addresses through governance.",
//                 "Storing data on the token.",
//                 "Owning multiple profile NFTs.",
//                 "Contacting the team via Discord."
//             ]
//         },
//         {
//             "question": "What does the Publication Lens Protocol use the term \"Publication\" to refer to?",
//             "answer": "Content such as videos, photos, music, and text that can be posted onto a Profile NFT.",
//             "distractors": [
//                 "Collect Collects that allow creators to monetize their content.",
//                 "Profiles of individuals being followed.",
//                 "",
//                 "Content such as videos, photos, music, and text that can be posted onto a Profile NFT.",
//                 "Utilities tools such as voting rights."
//             ]
//         },
//         {
//             "question": "What does the Collect Module allow other users to do?",
//             "answer": "Mint NFTs that link to the publication's ContentURI",
//             "distractors": [
//                 "Create new content in the Lens Protocol",
//                 "Follow the user that posted the publication",
//                 "Mint NFTs that link to the publication's ContentURI",
//                 "Set a price for the publication"
//             ]
//         },
//         {
//             "question": "What protocols are partner of the Lens Protocol?",
//             "answer": "Arweave, IPFS, LitProtocol, XMTP, Dispatch, OpenSea, Zerion, Alchemy, ENS, and Gelato.",
//             "distractors": [
//                 "Arweave, IPFS, LitProtocol, XMTP, Dispatch, ENS",
//                 "Arweave, IPFS, LitProtocol, XMTP, Dispatch, Zerion",
//                 "Arweave, IPFS, LitProtocol, XMTP, Dispatch, OpenSea",
//                 "Arweave, IPFS, LitProtocol, XMTP, Dispatch, OpenSea, Zerion, Alchemy, ENS, and Gelato."
//             ]
//         }
//     ],
//     "aave": [
//         {
//             "question": "What is Aave?",
//             "answer": "A DeFi lending protocol.",
//             "distractors": [
//                 "A DeFi lending protocol.",
//                 "A peer-to-peer lending platform",
//                 "A cryptocurrency investment platform",
//                 "A blockchain-based loan platform"
//             ]
//         },
//         {
//             "question": "What was the original name of the company founded by Stani Kulechov in 2017?",
//             "answer": "ETHLend",
//             "distractors": [
//                 "CryptoLend",
//                 "Aave",
//                 "Ethererum",
//                 "ETHLend"
//             ]
//         },
//         {
//             "question": "What milestone did Aave reach on August 15, 2020?",
//             "answer": "$1 billion in TVL",
//             "distractors": [
//                 "$1 billion in users",
//                 "$1 billion in TVL",
//                 "$1 billion in assets",
//                 "$1 billion in lending and borrowing purposes"
//             ]
//         },
//         {
//             "question": "What did Aave raise funds for?",
//             "answer": "To bring DeFi closer to institutional use and to expand the team size to serve the growth in Asian markets.",
//             "distractors": [
//                 "To bring DeFi closer to institutional use and to expand the team size to serve the growth in Asian markets.",
//                 "To purchase non-DeFi related assets",
//                 "To fund research into DeFi products",
//                 "To cover operating costs in the European markets"
//             ]
//         },
//         {
//             "question": "What is Aave investing in?",
//             "answer": "Pixelcraft Studios",
//             "distractors": [
//                 "Tamagotchi-inspired Non-Fungible Token (NFT) collectibles game",
//                 "Aave NFT from the game",
//                 "Axie universe",
//                 "Pixelcraft Studios"
//             ]
//         },
//         {
//             "question": "What is AavegotechDAO governed by?",
//             "answer": "GHST",
//             "distractors": [
//                 "GHST",
//                 "Aave",
//                 "Asset Manager",
//                 "Balancer"
//             ]
//         },
//         {
//             "question": "What is Aave Protocol?",
//             "answer": "An open-source non-custodial protocol that allows the creation of money markets",
//             "distractors": [
//                 "An open-source non-custodial protocol that allows the creation of money markets",
//                 "A platform for trading 16 different assets",
//                 "A liquidity pool for Balancer",
//                 "A custodial protocol for generating tokens"
//             ]
//         },
//         {
//             "question": "What is the main feature of Aave's protocol?",
//             "answer": "Flash loans",
//             "distractors": [
//                 "Lending pools",
//                 "Real-time interest",
//                 "Tokenized deposits",
//                 "Flash loans"
//             ]
//         },
//         {
//             "question": "What token was introduced by Aave in 2017?",
//             "answer": "LEND",
//             "distractors": [
//                 "DAI",
//                 "Ethereum",
//                 "USD Coin",
//                 "LEND"
//             ]
//         },
//         {
//             "question": "How many tokens were allocated to the Aave ecosystem reserve?",
//             "answer": "3 million",
//             "distractors": [
//                 "16.2 million",
//                 "1.3 billion",
//                 "3 million",
//                 "13 million"
//             ]
//         }
//     ],
//     "binance-smart-chain": [
//         {
//             "question": "What does BNB Chain allow developers to do?",
//             "answer": "Build decentralized applications (apps)",
//             "distractors": [
//                 "Build decentralized applications (apps)",
//                 "Create a blockchain",
//                 "Stake BNB",
//                 "Vote on BNB governance"
//             ]
//         },
//         {
//             "question": "What consensus does Binance Chain use?",
//             "answer": "Delegated proof-of-stake",
//             "distractors": [
//                 "Proof-of-Importance",
//                 "Delegated proof-of-stake",
//                 "Proof-of-Authority",
//                 "Proof-of-Work"
//             ]
//         },
//         {
//             "question": "What consensus mechanism does Binance Smart Chain use?",
//             "answer": "Proof-of-Staked-Authority",
//             "distractors": [
//                 "Proof-of-Work",
//                 "Proof-of-Authority",
//                 "Delegated-Proof-Of-Stake",
//                 "Proof-of-Staked-Authority"
//             ]
//         },
//         {
//             "question": "When did Binance Chain and Binance Smart Chain merge to become BNB Chain?",
//             "answer": "February 15, 2022",
//             "distractors": [
//                 "November 9, 2021",
//                 "April 1, 2021",
//                 "February 15, 2022",
//                 "October 12, 2020"
//             ]
//         },
//         {
//             "question": "What happened on October 6, 2022?",
//             "answer": "The Binance bridge was hacked.",
//             "distractors": [
//                 "Digital assets were transferred from one blockchain to another.",
//                 "The Binance bridge was hacked.",
//                 "BNB Smart Chain upgraded its network.",
//                 "Changpeng Zhao announced the hack."
//             ]
//         },
//         {
//             "question": "What is BNB Chain comprised of?",
//             "answer": "BNB Beacon Chain (previously Binance Chain) - BNB Chain Governance ( staking, voting)",
//             "distractors": [
//                 "BNB Beacon Chain (previously Binance Token) - BNB Token Governance ( staking, voting)",
//                 "BNB Beacon Chain (previously Binance Chain) - BNB Chain Minting (minting new tokens)",
//                 "BNB Token Chain (previously Binance Token) - BNB Chain Governance ( staking, voting)",
//                 "BNB Beacon Chain (previously Binance Chain) - BNB Chain Governance ( staking, voting)"
//             ]
//         },
//         {
//             "question": "What is the main goal of BNB Smart Chain?",
//             "answer": "Scaling from one chain to multi-chain and boosting the throughput of BSC.",
//             "distractors": [
//                 "Creating hubs to access multiple networks",
//                 "Offering a gaming experience with GameFi",
//                 "",
//                 "Increasing the security of the BSC",
//                 "Scaling from one chain to multi-chain and boosting the throughput of BSC."
//             ]
//         },
//         {
//             "question": "What protocol is most criticized for not being fully decentralized?",
//             "answer": "Proof-of-Authority",
//             "distractors": [
//                 "On-Chain Governance",
//                 "Expanding the Validator Set",
//                 "Proof-of-Stake",
//                 "Proof-of-Authority"
//             ]
//         },
//         {
//             "question": "What does it mean that Binance Chain and Binance Smart Chain share the same token universe?",
//             "answer": "Tokens can circulate on both networks, and flow between them bi-directionally via a cross-chain communication mechanism.",
//             "distractors": [
//                 "Tokens can circulate on both networks, and flow between them bi-directionally via a cross-chain communication mechanism.",
//                 "Staking-based governance is used to determine token circulation.",
//                 "Tokens can only exist on one network, but cannot flow between them.",
//                 "Validator sets are elected out of BNB and BEP-2 tokens."
//             ]
//         },
//         {
//             "question": "What technology is used on the Binance Network to link two tokens and secure the total supply of the token?",
//             "answer": "Native Token (BNB) Binance Coin",
//             "distractors": [
//                 "BSC and BC",
//                 "Ethereum",
//                 "BNB Chain",
//                 "Native Token (BNB) Binance Coin"
//             ]
//         }
//     ],
//     "bored-ape-yacht-club": [
//         {
//             "question": "When was Bored Ape Yacht Club released?",
//             "answer": "2021",
//             "distractors": [
//                 "2019",
//                 "2021",
//                 "2020",
//                 "2018"
//             ]
//         },
//         {
//             "question": "Who founded ApeCoin DAO in March 2022?",
//             "answer": "Zeshan Ali, Kerem Atalay, Greg Solano, and Wylie Aronow",
//             "distractors": [
//                 "Wylie Aronow, Kerem Atalay, and Greg Solano",
//                 "Zeshan Ali, Kerem Atalay, Greg Solano, and Wylie Aronow",
//                 "Greg Solano and Wylie Aronow",
//                 "Zeshan Ali, Kerem Atalay, and Greg Solano"
//             ]
//         },
//         {
//             "question": "Where was the first event of the Bored Ape Yacht Club project's first annual Ape Fest held?",
//             "answer": "New York City",
//             "distractors": [
//                 "Toronto",
//                 "Los Angeles",
//                 "New York City",
//                 "Chicago"
//             ]
//         },
//         {
//             "question": "How are Bored Apes stored?",
//             "answer": "As ERC-721 tokens on the Ethereum blockchain.",
//             "distractors": [
//                 "Encrypted in a database.",
//                 "As ERC-721 tokens on the Ethereum blockchain.",
//                 "As audio files.",
//                 "On a physical server."
//             ]
//         },
//         {
//             "question": "What is the origin of the NFT project created by four friends with aliases Gargamel, Gordon Goner, Emperor Tomato Ketchup, and Sass?",
//             "answer": "They originally came up with a different idea for an NFT project.",
//             "distractors": [
//                 "They originally came up with a different idea for an NFT project.",
//                 "They had backgrounds in art and painting.",
//                 "They had backgrounds in finance and accounting.",
//                 "They wanted to create an investment project."
//             ]
//         },
//         {
//             "question": "What type of NFTs was Bored Ape Kennel Club (BAKC)?",
//             "answer": "Not for sale and offered for adoption.",
//             "distractors": [
//                 "Free for all Bored Ape owners.",
//                 "Part of the BAYC Team benefits program.",
//                 "Not for sale and offered for adoption.",
//                 "Sold to Bored Ape owners at a discounted price."
//             ]
//         },
//         {
//             "question": "Which of the following is true about Mutant Ape Yacht Club?",
//             "answer": "Every BAYC member was given a mutant serum.",
//             "distractors": [
//                 "The opportunity to claim Kennel NFTs only lasted a week.",
//                 "Mutant serum is a potion that will turn an ape into a mutant.",
//                 "Mutant Ape Yacht Club was created by minting a Mutant Ape.",
//                 "Every BAYC member was given a mutant serum."
//             ]
//         },
//         {
//             "question": "How did the M3 serum affect the look of an ape?",
//             "answer": "It completely changed the look of an ape.",
//             "distractors": [
//                 "It increased the ape's strength and agility.",
//                 "It had no effect on their look.",
//                 "It completely changed the look of an ape.",
//                 "It made them look like humans."
//             ]
//         },
//         {
//             "question": "What is one requirement for non-holders of the Mutant Cartel?",
//             "answer": "Complete KYC checks, including providing full name and address.",
//             "distractors": [
//                 "Complete KYC checks, including providing full name and address.",
//                 "Have a confirmed wallet.",
//                 "Become a Mutant.",
//                 "Join the Bored Ape Yacht Club."
//             ]
//         },
//         {
//             "question": "What is ApeCoin?",
//             "answer": "A reward for holding one of the Club's NFTs.",
//             "distractors": [
//                 "Airdropped to BAYC NFT holders in March 2022",
//                 "An autonomous entity operating alongside the BAYC",
//                 "A narrative universe spun by the BAYC",
//                 "A reward for holding one of the Club's NFTs."
//             ]
//         }
//     ],
//     "ethdenver": [
//         {
//             "question": "What is the mantra of ETHDenver?",
//             "answer": "#BUIDL",
//             "distractors": [
//                 "#HACK",
//                 "#BUIDL",
//                 "#NETWORK",
//                 "#BUILD"
//             ]
//         },
//         {
//             "question": "What city was chosen to host the Bitcoin Meetup event by John Paller?",
//             "answer": "Denver",
//             "distractors": [
//                 "New York",
//                 "Denver",
//                 "Austin",
//                 "San Francisco"
//             ]
//         },
//         {
//             "question": "What has Colorado never received recognition for?",
//             "answer": "Hosting the most prominent meetups in the country",
//             "distractors": [
//                 "Becoming the go-to destination for Web3 development",
//                 "Having an abundance of people",
//                 "Web3 innovation and development",
//                 "Hosting the most prominent meetups in the country"
//             ]
//         },
//         {
//             "question": "What is the main activity of ETHDenver?",
//             "answer": "Hackathon",
//             "distractors": [
//                 "Technical Workshops",
//                 "Networking",
//                 "Free Registration",
//                 "Hackathon"
//             ]
//         },
//         {
//             "question": "How much can bounty prizes in the Bounty Track range up to?",
//             "answer": "$10,000 USD",
//             "distractors": [
//                 "$20,000 USD",
//                 "$10,000 USD",
//                 "$1,000 USD",
//                 "$5,000 USD"
//             ]
//         },
//         {
//             "question": "Which track allows participants to engineer any project they wish without limitations?",
//             "answer": "Open Track",
//             "distractors": [
//                 "Open Track",
//                 "Unlimited Track",
//                 "Flexible Track",
//                 "Impact Track"
//             ]
//         },
//         {
//             "question": "What is the minimum prize pool available to the top 5 projects in the Impact Track?",
//             "answer": "$15,000 in cash or ETH equivalent",
//             "distractors": [
//                 "$15,000 in cash or ETH equivalent",
//                 "Existing projects are not eligible",
//                 "$20,000 in cash or ETH equivalent",
//                 "$10,000 in cash or ETH equivalent"
//             ]
//         },
//         {
//             "question": "What is the goal of ColoradoJam?",
//             "answer": "To create projects that can make a positive impact on society and the environment.",
//             "distractors": [
//                 "To encourage participants to network with other Jammers.",
//                 "To create projects that can make a positive impact on society and the environment.",
//                 "To provide solutions for public infrastructure challenges faced by the state of Colorado.",
//                 "To provide participants with a platform to showcase their creativity."
//             ]
//         },
//         {
//             "question": "What technology can participants use for their projects in the challenge?",
//             "answer": "Web2 or Web3",
//             "distractors": [
//                 "Web2 or Web3",
//                 "Java",
//                 "C++",
//                 "SQL"
//             ]
//         },
//         {
//             "question": "What were some of the issues experienced during the event?",
//             "answer": "Multiple technical difficulties and a loose structure.",
//             "distractors": [
//                 "Long queues for food",
//                 "Unprofessional keynote speech",
//                 "Poor WiFi connection",
//                 "Multiple technical difficulties and a loose structure."
//             ]
//         }
//     ],
//     "satoshi-nakamoto": [
//         {
//             "question": "Who designed bitcoin and created its original reference implementation?",
//             "answer": "Satoshi Nakamoto",
//             "distractors": [
//                 "Elon Musk",
//                 "Satoshi Nakamoto",
//                 "Jeff Bezos",
//                 "Bill Gates"
//             ]
//         },
//         {
//             "question": "Who is likely to be the true identity of Nakamoto?",
//             "answer": "Cryptography and computer science experts of non-Japanese accent living in the US and Europe",
//             "distractors": [
//                 "A computer scientist living in Japan",
//                 "A man living in Japan born on April 5th 1975",
//                 "Cryptography and computer science experts of non-Japanese accent living in the US and Europe",
//                 "A woman living in Europe"
//             ]
//         },
//         {
//             "question": "How many bitcoins did Nakamoto own by November 2017?",
//             "answer": "Approximately one million",
//             "distractors": [
//                 "Approximately one million",
//                 "500,000",
//                 "5 million",
//                 "21 million"
//             ]
//         },
//         {
//             "question": "How many Bitcoin coins did Satoshi Nakamoto own as of October 2008?",
//             "answer": "None",
//             "distractors": [
//                 "Bitcoin: A Peer-to-Peer Electronic Cash System",
//                 "One million Bitcoin Gold coins",
//                 "None",
//                 "One million Bitcoin Cash coins"
//             ]
//         },
//         {
//             "question": "When was the first version of Bitcoin software released?",
//             "answer": "9 January 2009",
//             "distractors": [
//                 "January 2010",
//                 "2007",
//                 "9 January 2009",
//                 "January 2009"
//             ]
//         },
//         {
//             "question": "What programming language was used by Nakamoto in developing the Bitcoin software?",
//             "answer": "C++",
//             "distractors": [
//                 "C++",
//                 "Python",
//                 "Java",
//                 "Pascal"
//             ]
//         },
//         {
//             "question": "Who was responsible for all modification to the Bitcoin source code before Nakamoto's absence and handover?",
//             "answer": "Nakamoto",
//             "distractors": [
//                 "Nakamoto",
//                 "All of the above",
//                 "Gavin Andresen",
//                 "Prominent members of the Bitcoin community"
//             ]
//         },
//         {
//             "question": "When was the first mined block created?",
//             "answer": "3 January 2009",
//             "distractors": [
//                 "4 January 2009",
//                 "3 January 2009",
//                 "2 January 2009",
//                 "10 December 2008"
//             ]
//         },
//         {
//             "question": "When was the genesis block created?",
//             "answer": "18:15:05 GMT on 3 January 2009.",
//             "distractors": [
//                 "18:15:05 GMT on 4 January 2009.",
//                 "18:15:05 GMT on 2 January 2009.",
//                 "18:15:05 GMT on 3 January 2009.",
//                 "18:15:05 GMT on 5 January 2009."
//             ]
//         },
//         {
//             "question": "How much worth were the bitcoins held by Nakamoto as of 15th November 2017?",
//             "answer": "$7,239,000,000",
//             "distractors": [
//                 "$7,000,000",
//                 "$1,000,000",
//                 "$7,239,000,000",
//                 "$7,239,000"
//             ]
//         }
//     ]
// }
