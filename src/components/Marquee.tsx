export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex overflow-x-hidden border-b-2 border-t-2 border-black bg-white font-bold">
      <div className="animate-marquee whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute animate-marquee2 whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-4xl">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
