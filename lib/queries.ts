import { gql } from "@apollo/client";

export const GET_ANIME_BY_FILTERS = gql`
  query GetAnimeByFilters(
    $genre: [String]
    $year: Int
    $season: MediaSeason
    $format: MediaFormat
  ) {
    Page(page: 1, perPage: 16) {
      media(
        genre_in: $genre
        seasonYear: $year
        season: $season
        format: $format
        type: ANIME
      ) {
        id
        title {
          romaji
          english
        }
        description
        coverImage {
          large
        }
        episodes
        genres
        season
        seasonYear
      }
    }
  }
`;
