<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <NuxtLink v-if="viewAllHref" :to="viewAllHref" class="section-link">
      {{ viewAllText }}
      <i class="fas fa-arrow-right"></i>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useSectionHeader } from './SectionHeader.ts'
import type { SectionHeaderProps } from './types'

const props = defineProps<SectionHeaderProps>()
const { viewAllText } = useSectionHeader(props)
</script>

<style scoped>
@import './SectionHeader.css';
</style>
