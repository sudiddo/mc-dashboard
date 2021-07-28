import React from "react";
import RabbitIcon from "assets/RabbitIcon.png";
import RabbitIcon2x from "assets/RabbitIcon@2x.png";
import numeral from "numeral";

function ToolTip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const time = payload[0].payload.time;
    const price = numeral(payload[0].payload.price).format("$0,0");

    return (
      <div className="flex flex-col items-center">
        <div className="bg-purple flex flex-row justify-start items-center p-1 rounded-3xl w-44">
          <img
            src={RabbitIcon}
            srcSet={`${RabbitIcon2x} 2x`}
            alt="rabbit icon"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col items-start justify-center w-full ml-1">
            <p className="text-white font-bold text-lg mb-1">{`${price}`}</p>
            <p className="text-white text-xs">{`${time}`}</p>
          </div>
        </div>
        {/* Not adding this bottom triangle because it would look bad on the design */}
        {/* <div className="w-4 overflow-hidden inline-block">
              <div className=" h-3 w-3 bg-purple -rotate-45 transform origin-top-left"></div>
            </div> */}
      </div>
    );
  }

  return null;
}

export default ToolTip;
