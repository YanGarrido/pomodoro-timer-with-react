import { useState } from "react";
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
    <div className="flex justify-center items-center flex-col h-screen bg-gray-900 border-solid ">
      <div className="bg-green-900 w-[300px] text-center flex justify-center items-center flex-col rounded-3xl">
        <h1 className="font-bold text-5xl text-amber-200">Pomodoro Timer</h1>
        <TimeDisplay secondsLeft={secondsLeft} modo={modo} />
        <TimeSelectorButtons setFocusTime={setFocusTime} />
        <ControlButtons
          isActive={isActive}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
}
