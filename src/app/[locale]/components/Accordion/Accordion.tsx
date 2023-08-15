import { ReactNode } from "react";

interface AccordionProps {
  title: string;
  period: string;
  className?: string;
  children: ReactNode;
}

const Accordion = ({ title, period, className, children }: AccordionProps) => {
  return (
    <details
      className={`group bg-darkblue text-white px-5 py-3 rounded-lg font-medium w-full max-w-3xl ${className}`}
    >
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <div className="hidden md:flex flex-row flex-1 ps-2 pe-6 justify-between items-center">
          <span className="text-base lg:text-xl">{title}</span>{" "}
          <span className="text-base lg:text-xl text-right min-w-[8rem]">{period}</span>
        </div>

        <div className="block ps-2 pe-4 md:hidden text-base lg:text-xl">
          {title} ({period})
        </div>

        <span className="transition group-open:rotate-180">
          <svg
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <div className="text-white font-normal mt-6 px-2 group-open:animate-fadeIn">{children}</div>
    </details>
  );
};

export default Accordion;
