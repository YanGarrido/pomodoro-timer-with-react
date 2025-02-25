interface CicleButtonsProps {
    count: number
}
export function CicleButtons({count}: CicleButtonsProps) {
    const totalSteps = 4;
  
  return (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`border border-amber-300 w-[10px] h-[10px] rounded-full transition-colors duration-300 ${
            index < (count % totalSteps) ? "bg-amber-300" : ""
          }`}
        ></div>
      ))}
    </div>
  );
 
}