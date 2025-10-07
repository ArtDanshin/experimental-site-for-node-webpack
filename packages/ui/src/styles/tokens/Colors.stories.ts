import type { Meta, StoryObj } from '@storybook/vue3'
import './stories.css'

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const ColorPalette: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div class="color-card">
          <div class="color-swatch" style="background: var(--primary-color);"></div>
          <h3>Primary</h3>
          <p>#6366f1</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--secondary-color);"></div>
          <h3>Secondary</h3>
          <p>#ec4899</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--accent-color);"></div>
          <h3>Accent</h3>
          <p>#06b6d4</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--success-color);"></div>
          <h3>Success</h3>
          <p>#10b981</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--warning-color);"></div>
          <h3>Warning</h3>
          <p>#f59e0b</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--error-color);"></div>
          <h3>Error</h3>
          <p>#ef4444</p>
        </div>
      </div>
    `,
  }),
}

export const BackgroundColors: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div class="color-card">
          <div class="color-swatch" style="background: var(--bg-primary);"></div>
          <h3>Primary Background</h3>
          <p>#0f0f23</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--bg-secondary);"></div>
          <h3>Secondary Background</h3>
          <p>#1a1a2e</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--bg-card);"></div>
          <h3>Card Background</h3>
          <p>#1e1e3f</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--bg-hover);"></div>
          <h3>Hover Background</h3>
          <p>#2a2a4a</p>
        </div>
      </div>
    `,
  }),
}

export const TextColors: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div class="color-card">
          <div class="color-swatch" style="background: var(--text-primary);"></div>
          <h3>Primary Text</h3>
          <p>#ffffff</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--text-secondary);"></div>
          <h3>Secondary Text</h3>
          <p>#a1a1aa</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--text-muted);"></div>
          <h3>Muted Text</h3>
          <p>#71717a</p>
        </div>
      </div>
    `,
  }),
}

export const Gradients: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div class="color-card">
          <div class="color-swatch" style="background: var(--gradient-primary);"></div>
          <h3>Primary Gradient</h3>
          <p>linear-gradient(135deg, #6366f1, #ec4899)</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--gradient-secondary);"></div>
          <h3>Secondary Gradient</h3>
          <p>linear-gradient(135deg, #06b6d4, #6366f1)</p>
        </div>
        <div class="color-card">
          <div class="color-swatch" style="background: var(--gradient-bg);"></div>
          <h3>Background Gradient</h3>
          <p>linear-gradient(135deg, #0f0f23, #1a1a2e)</p>
        </div>
      </div>
    `,
  }),
}
