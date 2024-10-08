import { Anime } from "@/lib/types";
import Image from "next/image";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const placeholderImage = "/img/placeholder/placeholder_no_image.jpg";

  return (
    <div className="anime-card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
      <div className="flex-grow">
        <Image
          src={anime?.coverImage?.large || placeholderImage}
          alt={anime?.title?.english || anime?.title?.romaji || "Unknown Anime"}
          width={300}
          height={400}
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-end">
        <h3 className="text-md text-gray-800 text-center mb-4">
          {anime?.title?.english || anime?.title?.romaji || "Unknown Title"}
        </h3>
      </div>
    </div>
  );
};

export default AnimeCard;
