type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: number;
};

export default function Button({ children, onClick, primary = 1 }: Props) {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className={`flex cursor-pointer items-center rounded-md border-2 border-black ${
        primary === 1
          ? "bg-purple"
          : primary === 2
          ? "bg-yellow"
          : primary === 3
          ? "bg-green"
          : "bg-white"
      } px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`}
    >
      {children}
    </button>
  );
}
