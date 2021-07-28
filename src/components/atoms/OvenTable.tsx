import React from "react";
import { OvenData } from "MockData";
import BurnIcon from "assets/BurnIcon.png";
import BurnIcon2x from "assets/BurnIcon@2x.png";
import StackIcon from "assets/StackIcon.png";
import StackIcon2x from "assets/StackIcon@2x.png";
import ClueGray from "assets/ClueGray.png";
import ClueGray2x from "assets/ClueGray@2x.png";

import moment from "moment";
import numeral from "numeral";

interface OvenTableProps {
  matches: boolean;
}

function OvenTable({ matches }: OvenTableProps) {
  return (
    <div className="max-h-140 overflow-scroll">
      {OvenData.map(({ type, amount, time }, index) => {
        const isToday = moment(0, "HH").diff(time, "days") === 0;
        const date = moment(time).format(
          matches ? "LT / D MMMM YYYY" : isToday ? "LT" : "D MMMM YYYY"
        );
        return (
          <div
            key={index + amount}
            className="grid grid-cols-3 gap-1 text-gray-darker lg:text-black text-sm font-bold items-center my-3"
          >
            <div className="flex flex-row items-center">
              <img
                src={type === "stake" ? StackIcon : BurnIcon}
                srcSet={`${type === "stake" ? StackIcon2x : BurnIcon2x} 2x`}
                className="w-8 h-8 object-contain"
                alt="clue"
              />
              <div className="mx-2 capitalize">{type}</div>
              <img
                src={ClueGray}
                srcSet={`${ClueGray2x} 2x`}
                className="w-5 h-5 object-contain"
                alt="clue"
              />
            </div>
            <div className="text-right">{numeral(amount).format("$0,0")}</div>
            <div className="text-right">{date}</div>
          </div>
        );
      })}
    </div>
  );
}

export default OvenTable;
