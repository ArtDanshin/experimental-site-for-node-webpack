import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from './Button.vue'

describe('Button', () => {
  describe('Props', () => {
    it('renders with default variant (primary)', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Click me',
        },
      })
      
      expect(wrapper.classes()).toContain('btn-primary')
      expect(wrapper.text()).toBe('Click me')
    })

    it('applies custom variant class', () => {
      const wrapper = mount(Button, {
        props: {
          variant: 'secondary',
        },
      })
      
      expect(wrapper.classes()).toContain('btn-secondary')
    })

    it('applies size classes', () => {
      const wrapperSm = mount(Button, { props: { size: 'sm' } })
      const wrapperMd = mount(Button, { props: { size: 'md' } })
      const wrapperLg = mount(Button, { props: { size: 'lg' } })
      
      expect(wrapperSm.classes()).toContain('btn-sm')
      expect(wrapperMd.classes()).toContain('btn-md')
      expect(wrapperLg.classes()).toContain('btn-lg')
    })

    it('respects disabled state', () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
      })
      
      expect(wrapper.classes()).toContain('btn-disabled')
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('applies full width class', () => {
      const wrapper = mount(Button, {
        props: {
          fullWidth: true,
        },
      })
      
      expect(wrapper.classes()).toContain('btn-full-width')
    })

    it('sets button type attribute', () => {
      const wrapper = mount(Button, {
        props: {
          type: 'submit',
        },
      })
      
      expect(wrapper.attributes('type')).toBe('submit')
    })
  })

  describe('Events', () => {
    it('emits click event', async () => {
      const wrapper = mount(Button)
      
      await wrapper.trigger('click')
      
      expect(wrapper.emitted('click')).toBeTruthy()
      expect(wrapper.emitted('click')?.length).toBe(1)
    })

    it('does not emit click when disabled', async () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
      })
      
      await wrapper.trigger('click')
      
      expect(wrapper.emitted('click')).toBeFalsy()
    })
  })

  describe('Slots', () => {
    it('renders default slot content', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Button Text',
        },
      })
      
      expect(wrapper.text()).toBe('Button Text')
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA attributes when disabled', () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
      })
      
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('is keyboard accessible', () => {
      const wrapper = mount(Button)
      const button = wrapper.find('button')
      
      expect(button.element.tagName).toBe('BUTTON')
    })
  })
})
