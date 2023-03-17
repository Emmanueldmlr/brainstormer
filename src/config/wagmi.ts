import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { configureChains } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import config from "./index";

const chainArray = config.alchemyChain === "matic" ? polygon : polygonMumbai;

export const { chains, provider } = configureChains(
  [chainArray],
  [
    alchemyProvider({ alchemyId: config.alchemyApiKey, weight: 1 }),
    publicProvider({ weight: 3 }),
  ]
);

export const connectors = [
  new MetaMaskConnector({ chains, options: { shimDisconnect: true } }),
];
