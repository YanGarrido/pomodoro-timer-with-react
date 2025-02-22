import React from "react";

interface timeDisplayProps {
  secondsLeft: number;
  modo: string;
}

export function TimeDisplay({ secondsLeft, modo }: timeDisplayProps) {
  const formatTimeLeft = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-5 bg-green-800 w-[200px] h-[200px] rounded-[50%]">
        <h2 className="font-extrabold text-5xl text-amber-200">
          {formatTimeLeft(secondsLeft)}
        </h2>
      </div>
      <div className="mt-1 text-white">
        <p>{modo === "focus" ? "Foco" : "Descaso"}</p>
      </div>
    </div>
  );
}
