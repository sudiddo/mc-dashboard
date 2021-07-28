import { useEffect, useState } from "react";
import "./App.css";
import Moonicon from "assets/Moonicon.png";
import Moonicon2x from "assets/Moonicon@2x.png";
import RabbitIcon from "assets/RabbitIcon.png";
import RabbitIcon2x from "assets/RabbitIcon@2x.png";

import InfoCard from "components/atoms/InfoCard";
import MarketStatsCard from "components/atoms/MarketStatsCard";
import {
  MarketStatsData,
  InfoCardData,
  PriceDuration,
  selectStyle,
} from "MockData";

import moment from "moment";
import { useMediaQuery } from "@react-hook/media-query";
import Select from "react-select";
import TransactionTable from "components/atoms/TransactionTable";
import OvenTable from "components/atoms/OvenTable";
import PriceChart from "components/molecules/PriceChart";
import DurationButtons from "components/molecules/DurationButtons";
import { getMarketData } from "api/getMarketData";
import { Duration } from "types";

function App() {
  const matches = useMediaQuery("only screen and (min-width: 1024px)");

  const [isShowInfo, setIsShowInfo] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(
    PriceDuration[0] as Duration
  );
  const toggleInfo = () => {
    setIsShowInfo(!isShowInfo);
  };
  const [priceData, setPriceData] = useState([] as any);

  useEffect(() => {
    const getData = async () => {
      try {
        let marketData = await getMarketData(
          selectedDuration.value!.toString(),
          selectedDuration.label
        );

        const result = marketData.prices;
        const prices = result.map((priceData: any) => {
          let time: string = "";
          let price: number = priceData[1];
          switch (selectedDuration.label) {
            case "hourly":
              time = moment(priceData[0]).format("h:mm:ss a");
              break;
            default:
              time = moment(priceData[0]).format("D MMMM YYYY");
              break;
          }
          return {
            time,
            price,
          };
        });
        setPriceData([...prices]);
      } catch (err) {
        console.log("err api call", err);
      }
    };

    getData();
  }, [selectedDuration]);

  return (
    <div className="bg-purple-lighter min-h-screen py-5 px-3 lg:px-8">
      <div className="bg-gray py-5 lg:py-8 min-h-full relative rounded-3xl shadow-lg">
        {/* Header */}
        <div className="px-3 flex justify-between items-center flex-row lg:px-8">
          <p className="font-bold text-xl lg:text-3xl">The Dashboard</p>
          <img
            onClick={toggleInfo}
            src={Moonicon}
            srcSet={`${Moonicon2x} 2x`}
            alt="moon icon"
            className="w-10 h-10 object-contain absolute right-5 z-20"
          />
          {isShowInfo && <MarketStatsCard data={MarketStatsData} />}
        </div>

        {/* Info Card */}
        <div className="pl-3 lg:pl-8 lg:justify-between flex flex-row flex-shrink-0 overflow-auto overflow-x-scroll mt-5 scrollbar-hide">
          {InfoCardData.map((info) => {
            return <InfoCard key={info.id} type={info.type} data={info.data} />;
          })}
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="mt-4 flex flex-col lg:flex-grow">
            {/* Price Overview Header */}
            <div className="px-3 lg:px-8 py-3 flex justify-between items-center  flex-row">
              <p className="font-bold text-xl lg:text-3xl">Price Overview</p>
              <div className="flex flex-row items-center justify-center">
                <img
                  src={RabbitIcon}
                  srcSet={`${RabbitIcon2x} 2x`}
                  alt="rabbit icon"
                  className="w-7 h-7 lg:w-8 lg:h-8 object-contain -mt-2"
                />
                <div className="font-bold text-lg lg:text-2xl ml-1">$ 0.54</div>
              </div>
            </div>

            {/* Duration Filter Option */}
            <DurationButtons
              selectDuration={setSelectedDuration}
              selectedDuration={selectedDuration}
            />

            <Select
              styles={selectStyle}
              className="text-sm hidden lg:flex mx-8"
              placeholder="Duration"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e!)}
              //@ts-ignore
              options={PriceDuration}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
              }}
            />

            {/* Price Line Chart */}
            <div className="lg:px-5">
              <PriceChart matches={matches} priceData={priceData} />
            </div>

            {/* Oven Activities */}
            <div className="mt-4 px-3 lg:px-8">
              <div className="py-3 flex justify-between items-center flex-row">
                <p className="font-bold text-xl lg:text-3xl">Oven Activities</p>
              </div>
              <OvenTable matches={matches} />
            </div>
          </div>

          {/* Transaction */}
          <TransactionTable />
        </div>

        {/* Price Overview Section*/}
      </div>
    </div>
  );
}

export default App;
