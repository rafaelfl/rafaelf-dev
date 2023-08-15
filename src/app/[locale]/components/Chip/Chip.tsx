import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
}

const Chip = ({ children }: ChipProps) => {
  return (
    <div className="text-sm inline-flex justify-center items-center h-5 min-w-[7rem] font-normal text-darkblue bg-cyan rounded-2xl whitespace-nowrap overflow-hidden px-3 py-0 leading-none">
      {children}
    </div>
  );
};

export default Chip;
