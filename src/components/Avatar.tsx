import { ReactNode } from "react";

export default function Avatar({
  imageUrl,
  children,
  styles = "",
}: {
  imageUrl: string;
  children?: ReactNode;
  styles?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`${styles} h-[300px] w-[300px] rounded-full border-2 border-black bg-cover bg-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
    >
      {children}
    </div>
  );
}
