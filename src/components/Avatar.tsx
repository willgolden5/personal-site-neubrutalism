export default function Avatar({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="h-64 w-64 rounded-full border-2 border-black bg-cover bg-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    ></div>
  );
}
