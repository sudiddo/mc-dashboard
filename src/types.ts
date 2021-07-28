export interface Duration {
  unit: string;
  label: string;
  value: string;
}

export type MarketStatsDataType = {
  marketCap: number;
  circulating: number;
  totalSupply: number;
  volume: number;
  roi: number;
};
