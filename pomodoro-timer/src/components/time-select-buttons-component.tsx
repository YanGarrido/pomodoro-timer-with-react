import React from "react";

interface TimeSelectorButtonsProps {
  setFocusTime: (time: number) => void;
}

export function TimeSelectorButtons({
  setFocusTime,
}: TimeSelectorButtonsProps) {
  return (
    <div>
      <div className="flex justify-between items-center w-[200px] mt-5 text-white">
        <button
          className="bg-emerald-600 p-4 rounded-2xl"
          onClick={() => setFocusTime(25)}
        >
          25
        </button>
        <button
          className="bg-emerald-600 p-4 rounded-2xl"
          onClick={() => setFocusTime(30)}
        >
          30
        </button>
        <button
          className="bg-emerald-600 p-4 rounded-2xl"
          onClick={() => setFocusTime(60)}
        >
          60
        </button>
      </div>
    </div>
  );
}
