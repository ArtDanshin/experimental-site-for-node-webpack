/**
 * Tag component types
 */
export type TagVariant = 'default' | 'tech';

export interface TagProps {
  /**
   * Tag variant
   * @default 'primary'
   */
  variant?: TagVariant;
}
