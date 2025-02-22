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
      <div className="my-5 flex items-center justify-between w-[200px]">
        <button
          className="bg-gray-800 p-3 rounded-2xl text-white"
          onClick={toggleTimer}
        >
          {isActive ? "PAUSE" : "START"}
        </button>
        <button
          className="bg-gray-800 p-3 rounded-2xl text-white"
          onClick={resetTimer}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
