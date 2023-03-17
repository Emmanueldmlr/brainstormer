import {
  RiImage2Fill,
  RiMoneyCnyCircleFill,
  RiExchangeBoxFill,
  RiBitCoinFill,
  RiTeamFill,
  RiUser3Fill,
  RiAppStoreFill,
} from "react-icons/ri";

export const AllCategoriesData = [
  {
    id: "dapps",
    title: "Decentralized Applications",
    icon: RiAppStoreFill,
    description:
      "This quiz session will test your knowledge on decentralized applications (dApps), ranging from questions like Time Weighted Average Market Maker(TWAMM) like Fraxswap to Defi Lending like Aave. A deep knowing of their history,leaderships,features,funding and other related topics is important to passing the quiz.",
    heroImage: "/categories/dapps.jpg",
  },
  {
    id: "nfts",
    title: "NFTs",
    icon: RiImage2Fill,
    description: `This quiz session covers questions ranging from collection of
      non-fungible tokens(NFTs) like the bored ape yacht club to games
      like Axie infinity to artist like Beeple. A good read on their
      auctioning. mechanics, features, Architecture and other relating
      sub-topics, will make you a good fit for this quiz`,
    heroImage: "/categories/nfts-card.png",
  },
  {
    id: "defi",
    title: "Decentralized Finance",
    icon: RiMoneyCnyCircleFill,
    description: `The quiz on Decentralized Finance (DeFi) category covers
    everything from stablecoin projects like Frax Finance to concepts
    like Yield Farming to the oracles which power DeFi like Chainlink.
    hence, proper knowledge on these companies, is aguarantee to doing
    well in this quiz.`,
    heroImage: "/categories/defi-card.png",
  },
  {
    id: "people",
    title: "People in crypto",
    icon: RiUser3Fill,
    description: ` The People in Crypto quiz covers questions about everyone working
    to grow the crypto space from developers to artists to marketers
    to policy makers and everyone in between. Adequate knowledge about
    every of the individuals discussed on IQ.wiki is what is needed to
    do well in this quiz`,
    heroImage: "/categories/people-card.png",
  },
  {
    id: "exchanges",
    title: "Exchanges",
    icon: RiExchangeBoxFill,
    description: ` The Exchanges quiz category covers all questions ranging from
    crypto exchanges including both centralized exchanges like Binance
    or Coinbase and decentralized exchanges like Uniswap. A good
    knowledge of their history, products and other related headings,
    will make you stand out i this quiz.`,
    heroImage: "/categories/exchanges-card.png",
  },
  {
    id: "cryptocurrencies",
    title: "Cryptocurrencies",
    icon: RiBitCoinFill,
    description: `This cryptocurrencies quiz session will cover all questions on
      cryptocurrencies from Bitcoin to IQ. A good insight into their
      history, technology and feature will earn you estra IQ tokens.`,
    heroImage: "/categories/cryptocurrencies-card.png",
  },
];
