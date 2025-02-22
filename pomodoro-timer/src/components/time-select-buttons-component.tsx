import React from "react";

interface TimeSelectorButtonsProps {
  setFocusTime: (time: number) => void;
}

export function TimeSelectorButtons({
  setFocusTime,
}: TimeSelectorButtonsProps) {
  return (
    <div>
      <button onClick={() => setFocusTime(25)}>25</button>
      <button onClick={() => setFocusTime(30)}>30</button>
      <button onClick={() => setFocusTime(60)}>60</button>
    </div>
  );
}
