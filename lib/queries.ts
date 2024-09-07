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
