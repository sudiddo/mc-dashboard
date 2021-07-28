import React from "react";
import DurationButton from "components/atoms/DurationButton";
import { PriceDuration } from "MockData";
import { Duration } from "types";

interface DurationButtonsProps {
  selectedDuration: Duration;
  selectDuration: (e: Duration) => void;
}

function DurationButtons({
  selectDuration,
  selectedDuration,
}: DurationButtonsProps) {
  return (
    <div className="flex flex-row justify-between px-3 lg:hidden">
      {PriceDuration.map((duration) => {
        const isSelected = selectedDuration === duration;
        return (
          <DurationButton
            key={duration.unit}
            isSelected={isSelected}
            duration={duration}
            selectDuration={selectDuration}
          />
        );
      })}
    </div>
  );
}

export default DurationButtons;
