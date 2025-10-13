/**
 * Button component types
 */

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Button HTML type
   * @default 'button'
   */
  type?: ButtonType;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Full width button
   */
  fullWidth?: boolean;

  /**
   * Если кнопка является ссылкой, то это ее значение
   */
  href?: string;
}

export type ButtonEmits = (e: 'click', event: MouseEvent) => void;
