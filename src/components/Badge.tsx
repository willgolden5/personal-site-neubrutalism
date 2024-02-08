export default function Badge({
  badgeText,
  color,
}: {
  badgeText: string;
  color?: string;
}) {
  return (
    <div
      className={`w-min rounded-full border-2 border-black bg-[${
        color ? color : "#A682FF"
      }] px-3 py-1 text-xs mb-1 font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none`}
    >
      {badgeText}
    </div>
  );
}
