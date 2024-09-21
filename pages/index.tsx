import { useState } from "react";
import { useQuery } from "@apollo/client";
import Filters from "./Filters";
import { GET_ANIME_BY_FILTERS } from "@/lib/queries";

const Home = () => {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [season, setSeason] = useState("");
  const [format, setFormat] = useState("");

  const { data, loading, error } = useQuery(GET_ANIME_BY_FILTERS, {
    variables: {
      genre: genre !== "" && genre !== "Any" ? [genre] : null,
      year: year !== "" ? parseInt(year) : null,
      season: season !== "" && season !== "Any" ? season : null,
      format: format !== "" && format !== "Any" ? format : null,
    },
    skip: !genre && !year && !season && !format,
  });

  return (
    <div className="container mx-auto">
      <Filters
        genre={genre}
        year={year}
        season={season}
        format={format}
        setGenre={setGenre}
        setYear={setYear}
        setSeason={setSeason}
        setFormat={setFormat}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && console.log(data)}
    </div>
  );
};

export default Home;
