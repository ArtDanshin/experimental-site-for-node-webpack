<template>
  <div class="articles-grid">
    <ArticleCard 
      v-for="article in displayedArticles" 
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import { useArticleGrid } from './ArticleGrid.ts'
import type { ArticleGridProps } from './types'

const props = defineProps<ArticleGridProps>()
const { displayedArticles } = useArticleGrid(props)
</script>

<style scoped>
@import './ArticleGrid.css';
</style>
