import React, { useState } from "react";
import OvenIcon from "assets/OvenIcon.png";
import OvenIcon2x from "assets/OvenIcon@2x.png";
import StackedIcon from "assets/StackedIcon.png";
import StackedIcon2x from "assets/StackedIcon@2x.png";
import BurnedIcon from "assets/BurnedIcon.png";
import BurnedIcon2x from "assets/BurnedIcon@2x.png";
import RewardsIcon from "assets/RewardsIcon.png";
import RewardsIcon2x from "assets/RewardsIcon@2x.png";
import Clue from "assets/Clue.png";
import Clue2x from "assets/Clue@2x.png";

import { Line, LineChart } from "recharts";

interface InfoCardType {
  type: string;
  data: { x: number; y: number }[];
}

function InfoCard({ type, data }: InfoCardType) {
  const [isClicked, setIsClicked] = useState(false);

  let label: string = "";
  let icon: string = "";
  let icon2x: string = "";
  let nominal: string = "";
  let description: string = "";

  switch (type) {
    case "oven":
      label = "Oven Balance";
      icon = OvenIcon;
      icon2x = OvenIcon2x;
      nominal = "moon";
      description =
        "$MOON accumulated by the oven’s 1% transaction tax to be swapped to $CAKE and staked in the manual $CAKE <> $SYRUP pool";
      break;
    case "burned":
      label = "Total Burned";
      icon = BurnedIcon;
      icon2x = BurnedIcon2x;
      nominal = "moon";
      description = "Total $MOON burned by the Mooncake Oven overtime";
      break;
    case "stacked":
      label = "Total Stacked";
      icon = StackedIcon;
      icon2x = StackedIcon2x;
      nominal = "cake";
      description =
        "Current $CAKE staked in the manual $CAKE <> $SYRUP pool by the Mooncake Oven";
      break;
    case "rewards":
      label = "Pending Rewards";
      icon = RewardsIcon;
      icon2x = RewardsIcon2x;
      nominal = "cake";
      description =
        "Current pending $CAKE rewards from the manual  $CAKE <> $SYRUP pool";
      break;
  }

  const toggleCard = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={toggleCard}
      className={`${
        isClicked ? "bg-purple" : "bg-white"
      } rounded-3xl mr-7 min-w-280 min-h-150 flex p-5 flex-col shadow-lg my-5 focus:animate-flip `}
    >
      {isClicked ? (
        <div>
          <div className="text-white flex flex-row justify-between w-full">
            <p className="font-bold">{label}</p>
            <div className="flex items-start justify-start px-2 py-1">
              <p className="font-semibold text-lg transform rotate-45">+</p>
            </div>
          </div>
          <div className="text-white text-xs text-left mt-2">{description}</div>
        </div>
      ) : (
        <>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row">
              <img
                src={icon}
                srcSet={`${icon2x} 2x`}
                className="h-[50px] w-[50px]"
                alt="info icon"
              />
              <p className="ml-3 font-bold">{label}</p>
            </div>
            <img
              src={Clue}
              srcSet={`${Clue2x} 2x`}
              className="w-5 h-5 object-contain"
              alt="clue"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="font-bold text-gray-darker text-2xl uppercase mt-3">
                0000 {nominal}
              </div>
              <div className="text-gray-darker text-sm capitalize mt-3 text-left">
                $ 0000 value
              </div>
            </div>
            <div className="flex justify-center items-start ml-4">
              <LineChart width={80} height={60} data={data}>
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#7947A5"
                  strokeWidth={4}
                  dot={false}
                />
              </LineChart>
            </div>
          </div>
        </>
      )}
    </button>
  );
}

export default InfoCard;
