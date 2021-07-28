import ToolTip from "components/atoms/ToolTip";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PriceChartProps {
  priceData: any[];
  matches: boolean;
}
function PriceChart({ priceData, matches }: PriceChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250} className="mt-5">
      <LineChart width={300} height={300} data={priceData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <YAxis
          style={{
            fontSize: "12px",
            fontWeight: "bold",
          }}
          strokeWidth={0}
          axisLine={false}
          allowDataOverflow={true}
        />
        <XAxis
          dataKey="time"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
          tickSize={0}
          hide={!matches}
          minTickGap={100}
          tickMargin={15}
          padding={"gap"}
        />

        <Tooltip
          content={<ToolTip />}
          label={false}
          // I'll remove the offset because if the active dot is in the highest position, it would look bad
          // offset={-64}
          cursor={false}
          itemStyle={{ backgroundColor: "red" }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#7947A5"
          strokeWidth={3}
          dot={false}
          activeDot={{
            stroke: "#000",
            strokeWidth: 2,
            r: 10,
            colorProfile: "#000",
            fill: "#000",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PriceChart;
