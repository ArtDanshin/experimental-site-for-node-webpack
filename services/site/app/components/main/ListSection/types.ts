export type ListSectionVariant = 'light' | 'dark';

export interface ListSectionProps {
  /**
   * Visual style variant
   * @default 'light'
   */
  variant?: ListSectionVariant;

  title?: string;
  viewAllHref?: string;
  viewAllText?: string;
}
