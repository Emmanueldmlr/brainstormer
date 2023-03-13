const config = {
  editorAddress:
    process.env.NEXT_PUBLIC_EDITOR_CONTRACT_ADDRESS ||
    '0xBE5d150ACB420c7eA010C1F525733Eb3c1d26fA1',
  wikiContractAddress:
    process.env.NEXT_PUBLIC_WIKI_CONTRACT_ADDRESS ||
    '0x94bb4c72252d0ae7a98b2b0483Dc4145C0C79059',
  blockExplorerUrl:
    process.env.NEXT_PUBLIC_BLOCK_EXPLORER_BASE_URL ||
    'https://mumbai.polygonscan.com',
  isProduction: process.env.NEXT_PUBLIC_IS_PRODUCTION || false,
  alchemyApiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
  alchemyChain: process.env.NEXT_PUBLIC_ALCHEMY_CHAIN || 'maticmum',
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID || '80001',
  chainName: process.env.NEXT_PUBLIC_CHAIN_NAME || 'Mumbai',
  ensRPC: String(process.env.NEXT_PUBLIC_ENS_RPC),
  publicDomain: String(process.env.NEXT_PUBLIC_DOMAIN),
}

export default config
