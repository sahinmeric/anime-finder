import { gql } from "@apollo/client";

export const GET_SEARCHED_ANIME = gql`
  query SearchAnime($search: String, $sort: [MediaSort]) {
    Page {
      media(search: $search, type: ANIME, sort: $sort) {
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
      }
    }
  }
`;

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
