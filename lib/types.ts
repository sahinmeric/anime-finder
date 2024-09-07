export type Anime = {
  id: number;
  title: {
    romaji: string;
    english: string | null;
  };
  description: string;
  coverImage: {
    large: string;
  };
  episodes: number | null;
  genres: string[];
};

export type PageInfo = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
};

export type MediaTitle = {
  romaji: string;
  english: string | null;
};

export type MediaCoverImage = {
  large: string;
};

export type Media = {
  id: number;
  title: MediaTitle;
  description: string;
  coverImage: MediaCoverImage;
  episodes: number | null;
  genres: string[];
};

export type Page = {
  media: Media[];
};

export type AniListResponse = {
  Page: Page;
};
