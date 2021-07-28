import axios from "axios";

const getMarketData = async (days: string, interval: string) => {
  const res = await axios(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
  );
  return res.data;
};

export { getMarketData };
