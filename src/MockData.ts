import { Duration } from "types";

const InfoCardData = [
  {
    id: 1,
    type: "oven",
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 2.5 },
      { x: 4, y: 3 },
    ],
  },
  {
    id: 2,
    type: "burned",
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 2.5 },
      { x: 4, y: 3 },
    ],
  },
  {
    id: 3,
    type: "stacked",
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
    ],
  },
  {
    id: 4,
    type: "rewards",
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 2.5 },
      { x: 4, y: 9 },
    ],
  },
];

const MarketStatsData = {
  marketCap: 29827,
  circulating: 11881,
  totalSupply: 11881,
  volume: 11118,
  roi: 100,
};

const PriceDuration: Duration[] = [
  { unit: "24H", label: "hourly", value: "1" },
  { unit: "7d", label: "daily", value: "7" },
  { unit: "30d", label: "weekly", value: "30" },
  { unit: "90d", label: "monthly", value: "90" },
  { unit: "1y", label: "quarterly", value: "365" },
  { unit: "all", label: "yearly", value: "max" },
];

const OvenData = [
  { type: "burn", amount: 286000, time: "July 29, 2021 00:42 PM" },
  { type: "stake", amount: 286000, time: "7/24/2021" },
  { type: "burn", amount: 286000, time: "6/25/2021" },
  { type: "burn", amount: 286000, time: "5/3/2021" },
  { type: "stake", amount: 286000, time: "4/25/2021" },
  { type: "stake", amount: 286000, time: "12/18/2020" },
  { type: "stake", amount: 286000, time: "7/14/2020" },
];

const TransactionsData = [
  { total: 126, amount: 12, date: "July 29, 2021 00:41 PM" },
  { total: 126, amount: 12, date: "July 29, 2021 00:42 PM" },
  { total: 126, amount: 12, date: "July 29, 2021 00:43 PM" },
  { total: 126, amount: 12, date: "July 29, 2021 00:45 PM" },
  { total: 126, amount: 12, date: "7/24/2021" },
  { total: 126, amount: 12, date: "6/25/2021" },
  { total: 126, amount: 12, date: "5/3/2021" },
  { total: 126, amount: 12, date: "4/25/2021" },
  { total: 126, amount: 12, date: "12/18/2020" },
  { total: 126, amount: 12, date: "7/14/2020" },
];

const selectStyle = {
  control: (base: any) => ({
    ...base,
    minHeight: "initial",
    borderRadius: "150px",
    backgroundColor: "#F0F1F3",
    boxShadow: "1px 3px 1px rgba(0, 0, 0, 0.1)",
  }),
  valueContainer: (base: any) => ({
    ...base,
    height: "33px",
    width: "130px",
    padding: "0 8px",
    textTransform: "capitalize",
    fontWeight: "bold",
  }),
  clearIndicator: (base: any) => ({
    ...base,
    padding: `${(42 - 20 - 1 - 1) / 2}px`,
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    padding: `${(42 - 20 - 1 - 1) / 2}px`,
    color: "#000",
  }),
  option: (styles: any, { data, isFocused }: any) => {
    return {
      ...styles,
      color: "#000",
      backgroundColor: isFocused ? "#F0F1F3" : "#FFF",
      textTransform: "capitalize",
    };
  },
};

export {
  MarketStatsData,
  InfoCardData,
  PriceDuration,
  OvenData,
  TransactionsData,
  selectStyle,
};
