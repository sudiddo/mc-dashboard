import React from "react";
import { Duration } from "types";

interface DurationButtonProps {
  duration: Duration;
  selectDuration: (e: Duration) => void;
  isSelected: boolean;
}

function DurationButton({
  duration,
  selectDuration,
  isSelected,
}: DurationButtonProps) {
  return (
    <button
      onClick={() => selectDuration(duration)}
      className={`text-sm w-12 items-center justify-center flex font-bold uppercase ${
        isSelected
          ? "bg-purple text-white px-2 py-1 rounded-2xl "
          : "text-purple"
      }`}
    >
      {duration.unit}
    </button>
  );
}

export default DurationButton;
