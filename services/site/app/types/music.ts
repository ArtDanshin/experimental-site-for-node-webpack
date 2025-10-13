export interface Track {
  id: string;
  position: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  services: {
    spotify?: string;
    youtube?: string;
    apple?: string;
    deezer?: string;
  };
}

export interface Playlist {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  tracks: Track[];
  tracksCount: number;
  duration: string;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
}

export interface PlaylistFilters {
  featured?: boolean;
  search?: string;
}

export interface PlaylistSearchResult {
  playlists: Playlist[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
