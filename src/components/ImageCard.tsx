type Props = {
  imageUrl: string;
  children: React.ReactNode;
  padding?: boolean;
  color?: string;
};

export default function ImageCard({ imageUrl, children, padding = true, color = 'bg-offWhite' }: Props) {
  return (
    <figure className={`w-[340px] overflow-hidden rounded-md border-2 border-black ${color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
            <img className={`w-full ${padding ? 'p-8' : ''}`} src={imageUrl} alt="image" />
            {children}
        </figure>
    );
}
