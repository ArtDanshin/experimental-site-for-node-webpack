/**
 * ProjectCard component types
 */

export interface ProjectCardProps {
  /**
   * Project title
   */
  title: string;

  /**
   * Project description
   */
  description: string;

  /**
   * Project image URL
   */
  image: string;

  /**
   * Project link URL
   */
  href: string;

  /**
   * Project tags
   */
  tags?: string[];
}

export type ProjectCardEmits = (e: 'click') => void;
