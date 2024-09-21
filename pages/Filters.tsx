import React from "react";
import { GENRES, YEARS, SEASONS, FORMATS } from "@/lib/constants";

interface FiltersProps {
  genre: string;
  year: string;
  season: string;
  format: string;
  setGenre: (genre: string) => void;
  setYear: (year: string) => void;
  setSeason: (season: string) => void;
  setFormat: (format: string) => void;
}

const Filters = ({
  genre,
  year,
  season,
  format,
  setGenre,
  setYear,
  setSeason,
  setFormat,
}: FiltersProps) => {
  return (
    <div className="filter-container grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {/* Genre Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Genre</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any</option>
          {GENRES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Year Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Season Filter */}
      <div>
        <label className="block text-sm font-medium">Season</label>
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any</option>
          {SEASONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Format Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Format
        </label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any</option>
          {FORMATS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
