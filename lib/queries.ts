import { gql } from "@apollo/client";

export const GET_SEARCHED_ANIME = gql`
  query SearchAnime($search: String!) {
    Page {
      media(search: $search, type: ANIME) {
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

export const GET_RANDOM_ANIME = gql`
  query GetRandomAnime {
    Page(page: 1, perPage: 5) {
      media {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
        description
      }
    }
  }
`;
