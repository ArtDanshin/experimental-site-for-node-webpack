/**
 * SocialLink component types
 */
export type SocialLinkVariant = 'gh' | 'th' | 'yb' | 'tg' | 'vk';

export interface SocialLinkProps {
  /**
   * Avatar image URL
   */
  type: SocialLinkVariant;

  /**
   * Title for alt attr
   */
  href: string;
}
