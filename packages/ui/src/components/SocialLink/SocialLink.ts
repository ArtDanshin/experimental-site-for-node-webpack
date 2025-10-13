import { computed } from 'vue';

import type { SocialLinkProps } from './types';

const SOCIALS = {
  gh: {
    title: 'Github',
    icon: 'github',
  },
  th: {
    title: 'Twitch',
    icon: 'twitch',
  },
  yb: {
    title: 'YouTube',
    icon: 'youtube',
  },
  tg: {
    title: 'Telegram',
    icon: 'telegram',
  },
  vk: {
    title: 'VK',
    icon: 'vk',
  },
};

export function setupSocialLink(
  props: SocialLinkProps,
) {
  const icon = computed(() => SOCIALS[props.type].icon);
  const title = computed(() => SOCIALS[props.type].title);

  return {
    icon,
    title,
  };
}
