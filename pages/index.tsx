import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SEARCHED_ANIME } from "@/lib/queries";
import Image from "next/image";
import { Anime } from "@/lib/types";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedTerm, setSubmittedTerm] = useState("");

  const { data, loading, error } = useQuery(GET_SEARCHED_ANIME, {
    variables: { search: submittedTerm },
    skip: !submittedTerm,
  });

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSubmittedTerm(searchTerm.trim());
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Anime Search</h1>
      <form className="flex justify-center mb-8" onSubmit={handleSearchClick}>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            className="w-full px-4 py-2 text-black rounded-md outline-none shadow focus:ring-2 focus:ring-blue-500"
            placeholder="Enter anime name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full bg-blue-500 text-white font-bold px-3 py-1 rounded-r-md hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
          >
            Search
          </button>
        </div>
      </form>
      {loading && <p className="text-center">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}

      {data && (
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
      )}
    </div>
  );
};

export default Home;
