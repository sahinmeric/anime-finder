import { useState } from "react";

interface SearchFormProps {
  onSearch: (term: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="search-form-container py-4">
      <form className="flex justify-center" onSubmit={handleSearchClick}>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            className="w-full px-4 py-2 text-black rounded-md outline-none shadow focus:ring-2 focus:ring-blue-500"
            placeholder="Search for Naruto, One Piece, and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 transition shadow"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
