import React, { useState } from "react";
import { ControlButtons } from "./components/controllers-buttons-component";
import { TimeDisplay } from "./components/display-component";
import { TimeSelectorButtons } from "./components/time-select-buttons-component";
import { usePomodoroTimer } from "./hooks/usePomodoroTimer";
export default function PomodoroTimer() {
  const [focusTime, setFocusTime] = useState(25);
  const relaxTime = 5;

  const { modo, secondsLeft, isActive, toggleTimer, resetTimer } =
    usePomodoroTimer(focusTime, relaxTime);

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <TimeDisplay secondsLeft={secondsLeft} modo={modo} />
      <TimeSelectorButtons setFocusTime={setFocusTime} />
      <ControlButtons
        isActive={isActive}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}
