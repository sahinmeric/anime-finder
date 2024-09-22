import { useState } from "react";
import { useQuery } from "@apollo/client";
import Filters from "./Filters";
import { GET_ANIME_BY_FILTERS, GET_SEARCHED_ANIME } from "@/lib/queries";
import SearchResults from "./SearchResults";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [season, setSeason] = useState("");
  const [format, setFormat] = useState("");

  const {
    data: filterData,
    loading: filterLoading,
    error: filterError,
  } = useQuery(GET_ANIME_BY_FILTERS, {
    variables: {
      search: searchTerm !== "" ? searchTerm : null,
      genre: genre !== "" && genre !== "Any" ? [genre] : null,
      year: year !== "" ? parseInt(year) : null,
      season: season !== "" && season !== "Any" ? season : null,
      format: format !== "" && format !== "Any" ? format : null,
    },
    skip: !!searchTerm,
  });

  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useQuery(GET_SEARCHED_ANIME, {
    variables: { search: searchTerm, sort: ["SEARCH_MATCH"] },
    skip: !searchTerm,
  });

  console.log({ searchTerm, genre, year, season, format });

  return (
    <>
      <Filters
        searchTerm={searchTerm}
        genre={genre}
        year={year}
        season={season}
        format={format}
        setSearchTerm={setSearchTerm}
        setGenre={setGenre}
        setYear={setYear}
        setSeason={setSeason}
        setFormat={setFormat}
      />
      <SearchResults
        data={searchData ?? filterData}
        loading={searchLoading ?? filterLoading}
        error={searchError ?? filterError}
      />
    </>
  );
};

export default Home;
