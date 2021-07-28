import React from "react";
import numeral from "numeral";
import { MarketStatsDataType } from "types";

interface MarketStatsCardProps {
  data: MarketStatsDataType;
}

function MarketStatsCard({ data }: MarketStatsCardProps) {
  const { circulating, marketCap, totalSupply, volume, roi } = data;
  return (
    <div className="min-w-275 min-h-240 bg-orange absolute top-0 right-0 rounded-3xl z-10">
      <div className="p-8 text-purple-darker">
        <div className="font-bold text-lg mb-5">Market Stats</div>
        <div className="flex flex-row justify-between text-sm mb-2">
          <div className="font-bold">Market Cap</div>
          <div className="font-semibold">{`${numeral(marketCap).format(
            "0,0"
          )} M`}</div>
        </div>
        <div className="flex flex-row justify-between text-sm mb-2">
          <div className="font-bold">Circulating</div>
          <div className="font-semibold">{`${numeral(circulating).format(
            "0,0"
          )} M`}</div>
        </div>
        <div className="flex flex-row justify-between text-sm mb-2">
          <div className="font-bold">Total Supply</div>
          <div className="font-semibold">{`${numeral(totalSupply).format(
            "0,0"
          )} M`}</div>
        </div>
        <div className="flex flex-row justify-between text-sm mb-2">
          <div className="font-bold">24h Volume</div>
          <div className="font-semibold">{`${numeral(volume).format(
            "0,0"
          )} M`}</div>
        </div>
        <div className="flex flex-row justify-between text-sm mb-2">
          <div className="font-bold">ROI</div>
          <div className="font-semibold">{`${roi}%`}</div>
        </div>
      </div>
    </div>
  );
}

export default MarketStatsCard;
