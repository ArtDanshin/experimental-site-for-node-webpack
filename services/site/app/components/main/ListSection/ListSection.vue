<script setup lang="ts">
  import { setupListSection } from './ListSection'
  import type { ListSectionProps } from './types'
  
  const props = withDefaults(defineProps<ListSectionProps>(), {
    variant: 'light',
    viewAllText: 'Смотреть все'
  });

  const { sectionClasses } = setupListSection(props)
</script>

<style scoped lang="scss" src="./ListSection.scss" />

<template>
  <section :class="sectionClasses">
    <div class="list-section__container">
      <div class="list-section__header">
        <h2 class="list-section__title">{{ title }}</h2>
        <NuxtLink v-if="viewAllHref" :to="viewAllHref" class="list-section__link">
          {{ viewAllText }}
          <i class="fas fa-arrow-right"></i>
        </NuxtLink>
      </div>
      <slot />
    </div>
  </section>
</template>
