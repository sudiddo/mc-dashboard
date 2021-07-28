import React from "react";

import TransactionIcon from "assets/TransactionIcon.png";
import TransactionIcon2x from "assets/TransactionIcon@2x.png";
import { TransactionsData } from "MockData";

import moment from "moment";
import numeral from "numeral";

function TransactionTable() {
  return (
    <div className="mx-3 lg:mx-8 mt-4 bg-purple px-5 pb-6 rounded-2xl max-h-80 overflow-scroll lg:max-h-full lg:min-w-340">
      <div className="flex flex-row items-center sticky top-0 z-20 bg-purple pt-6">
        <img
          src={TransactionIcon}
          srcSet={`${TransactionIcon2x} 2x`}
          className="w-5 h-5 lg:w-8 lg:h-8 object-contain"
          alt="clue"
        />
        <div className="text-white font-bold text-xl lg:text-3xl ml-1">
          Transactions
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-sm text-white mt-4 px-4">
        <div>Date</div>
        <div className="text-center">Amount</div>
        <div className="text-right">Total</div>
      </div>
      {TransactionsData.map(({ date, amount, total }, index) => {
        const isToday = moment(0, "HH").diff(date, "days") === 0;
        const time = moment(date).format(isToday ? "LT" : "D MMM YY");
        return (
          <div
            key={index * amount}
            className="grid grid-cols-3 gap-2 text-sm text-white-darker my-1 p-2 hover:bg-gray-lighter hover:text-white hover:rounded-xl"
          >
            <div>{time}</div>
            <div className="text-center">
              {numeral(amount).format("0,0.00")}
            </div>
            <div className="text-right">{numeral(total).format("$0,0.00")}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionTable;
