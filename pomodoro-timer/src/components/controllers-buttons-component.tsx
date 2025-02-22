import React from "react";

interface ControlButtonsProps {
  isActive: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
}

export function ControlButtons({
  isActive,
  toggleTimer,
  resetTimer,
}: ControlButtonsProps) {
  return (
    <div>
      <button onClick={toggleTimer}>{isActive ? "PAUSE" : "START"}</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
