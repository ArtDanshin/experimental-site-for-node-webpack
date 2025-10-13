<script setup lang="ts">
  import { setupSocialLink } from './SocialLink';
  import type { SocialLinkProps } from './types';

  const props = defineProps<SocialLinkProps>();

  const { title, icon } = setupSocialLink(props);
</script>

<style scoped lang="scss" src="./SocialLink.scss"></style>

<template>
  <a
    :href="href"
    :title="title"
    class="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i :class="`fab fa-${ icon}`" />
  </a>
</template>
