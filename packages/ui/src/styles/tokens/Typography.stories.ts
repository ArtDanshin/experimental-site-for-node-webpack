import type { Meta, StoryObj } from '@storybook/vue3';

import './stories.scss';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h2 style="font-size: var(--font-size-3xl); margin: 0;">Heading 1 - 3xl</h2>
          <p style="color: var(--text-secondary); margin: 0;">1.875rem</p>
        </div>
        <div>
          <h3 style="font-size: var(--font-size-2xl); margin: 0;">Heading 2 - 2xl</h3>
          <p style="color: var(--text-secondary); margin: 0;">1.5rem</p>
        </div>
        <div>
          <h4 style="font-size: var(--font-size-xl); margin: 0;">Heading 3 - xl</h4>
          <p style="color: var(--text-secondary); margin: 0;">1.25rem</p>
        </div>
        <div>
          <p style="font-size: var(--font-size-lg); margin: 0;">Large text - lg</p>
          <p style="color: var(--text-secondary); margin: 0;">1.125rem</p>
        </div>
        <div>
          <p style="font-size: var(--font-size-base); margin: 0;">Base text - base</p>
          <p style="color: var(--text-secondary); margin: 0;">1rem</p>
        </div>
        <div>
          <p style="font-size: var(--font-size-sm); margin: 0;">Small text - sm</p>
          <p style="color: var(--text-secondary); margin: 0;">0.875rem</p>
        </div>
        <div>
          <p style="font-size: var(--font-size-xs); margin: 0;">Extra small text - xs</p>
          <p style="color: var(--text-secondary); margin: 0;">0.75rem</p>
        </div>
      </div>
    `,
  }),
};

export const FontWeights: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="font-weight: var(--font-weight-light); margin: 0;">Light - 300</p>
        </div>
        <div>
          <p style="font-weight: var(--font-weight-normal); margin: 0;">Normal - 400</p>
        </div>
        <div>
          <p style="font-weight: var(--font-weight-medium); margin: 0;">Medium - 500</p>
        </div>
        <div>
          <p style="font-weight: var(--font-weight-semibold); margin: 0;">Semibold - 600</p>
        </div>
        <div>
          <p style="font-weight: var(--font-weight-bold); margin: 0;">Bold - 700</p>
        </div>
      </div>
    `,
  }),
};

export const LineHeights: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="line-height: var(--leading-tight); margin: 0; border: 1px solid var(--border-color); padding: 0.5rem;">
            Tight line height (1.25) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <p style="line-height: var(--leading-snug); margin: 0; border: 1px solid var(--border-color); padding: 0.5rem;">
            Snug line height (1.375) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <p style="line-height: var(--leading-normal); margin: 0; border: 1px solid var(--border-color); padding: 0.5rem;">
            Normal line height (1.5) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <p style="line-height: var(--leading-relaxed); margin: 0; border: 1px solid var(--border-color); padding: 0.5rem;">
            Relaxed line height (1.625) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <p style="line-height: var(--leading-loose); margin: 0; border: 1px solid var(--border-color); padding: 0.5rem;">
            Loose line height (2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    `,
  }),
};
