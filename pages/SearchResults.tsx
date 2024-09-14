import { Anime } from "@/lib/types";
import Image from "next/image";

interface SearchResultsProps {
  data: { Page: { media: Anime[] } };
  loading: boolean;
  error: any;
}
const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  loading,
  error,
}) => {
  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  if (!data || !data.Page || !data.Page.media) {
    return <p className="text-center text-gray-500">No results found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.Page.media.map((anime: Anime) => (
        <div
          key={anime.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:scale-105 duration-300 ease-in-out"
        >
          <Image
            src={anime.coverImage.large}
            alt={anime.title.romaji}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800">
              {anime.title.romaji}
            </h3>
            <p className="text-gray-500 mt-2">
              {anime.description.substring(0, 100)}...
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Episodes: {anime.episodes}
            </p>
            <p className="text-sm text-gray-600">
              Genres: {anime.genres.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
