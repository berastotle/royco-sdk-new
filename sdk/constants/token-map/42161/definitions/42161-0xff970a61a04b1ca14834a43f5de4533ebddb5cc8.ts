import { defineToken } from "@/sdk/constants";

export default defineToken({
  id: "42161-0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
  chain_id: 42161,
  contract_address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
  name: "Arbitrum Bridged USDC (Arbitrum)",
  symbol: "USDC.e",
  image:
    "https://coin-images.coingecko.com/coins/images/30691/large/usdc.png?1696529560",
  decimals: 6,
  source: "coingecko",
  search_id: "usd-coin-ethereum-bridged",
  type: "token",
});
