import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SEARCHED_ANIME } from "@/lib/queries";
import Hero from "./Hero";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const Home = () => {
  const [submittedTerm, setSubmittedTerm] = useState("");

  const { data, loading, error } = useQuery(GET_SEARCHED_ANIME, {
    variables: { search: submittedTerm },
    skip: !submittedTerm,
  });

  const handleSearch = (term: string) => {
    setSubmittedTerm(term);
  };

  return (
    <div className="container mx-auto">
      <Hero />
      <SearchForm onSearch={handleSearch} />
      <SearchResults data={data} loading={loading} error={error} />
    </div>
  );
};

export default Home;
