import { Anime } from "@/lib/types";
import AnimeCard from "./AnimeCard";

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
    return (
      <p className="text-center text-red-500">
        Error on fetching animes. Please try again.
      </p>
    );

  if (!data || !data.Page || !data.Page.media) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-6 p-4">
      {data.Page.media.map((anime: Anime) => (
        <AnimeCard anime={anime} key={anime.id} />
      ))}
    </div>
  );
};

export default SearchResults;
