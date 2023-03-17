import { WalletBalanceType } from "../components/wallet/types";
import { tokenDetails } from "../components/wallet/wallet-data";

export const fetchTokenRate = async (
  tokenName: string,
  versusCurrency = "usd"
) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${tokenName}&vs_currencies=${versusCurrency}`
  );
  return (await res.json())[tokenName][versusCurrency];
};

export const fetchRateAndCalculateTotalBalance = async (
  walletDetails: WalletBalanceType[]
) => {
  const prices = walletDetails.map(async (wallet) => {
    try {
      const tokenName: string | undefined =
        wallet.data?.symbol && tokenDetails[wallet.data?.symbol].name;
      if (tokenName) {
        const rate = await fetchTokenRate(tokenName);
        return {
          price: rate * Number(wallet.data?.formatted),
          token: wallet.data?.symbol,
        };
      }
    } catch (err) {
      return null;
    }
    return null;
  });
  return Promise.all(prices);
};
