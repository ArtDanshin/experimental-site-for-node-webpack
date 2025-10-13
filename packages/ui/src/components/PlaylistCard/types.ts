/**
 * PlaylistCard component types
 */

export interface PlaylistCardProps {
  /**
   * Playlist title
   */
  title: string;

  /**
   * Playlist description
   */
  description?: string;

  /**
   * Playlist image URL
   */
  image: string;

  /**
   * Playlist link URL
   */
  href: string;

  /**
   * Playlist tracks length
   */
  tracksCount: number;
}

export type PlaylistCardEmits = (e: 'click') => void;
