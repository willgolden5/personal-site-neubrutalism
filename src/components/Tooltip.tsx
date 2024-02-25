type Margin = {
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
};

type Props = {
  elementToHover: React.ReactNode;
  tooltip: React.ReactNode;
  margin?: Margin;
};

export default function Tooltip({ elementToHover, tooltip, margin }: Props) {
  return (
    <div className="group relative inline-block cursor-default text-center font-bold">
      {elementToHover}
      <div
        className={`pointer-events-none absolute bottom-8 z-10 ${
          margin?.bottom ? margin.bottom : "mb-6"
        } 
        ${margin?.top ? margin.top : ""}
        ${margin?.left ? margin.left : ""}
        ${margin?.right ? margin.right : ""}
        rounded-md border-2 border-black bg-[#A682FF] px-3 py-2 text-center text-xs opacity-0 transition-all group-hover:opacity-100`}
      >
        {tooltip}
      </div>
    </div>
  );
}
