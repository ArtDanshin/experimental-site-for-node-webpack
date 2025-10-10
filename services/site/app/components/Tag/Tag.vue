<template>
  <span :class="tagClasses">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { useTag } from './Tag.ts'
import type { TagProps } from './types'

const props = defineProps<TagProps>()
const { tagClasses } = useTag(props)
</script>

<style scoped>
@import './Tag.css';
</style>
