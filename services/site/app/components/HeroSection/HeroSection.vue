<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Привет! Я <span class="highlight">ArtDanshin</span>
          </h1>
          <p class="hero-subtitle">
            Frontend разработчик, геймер и стример. Создаю современные веб-приложения 
            и делюсь опытом в статьях.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/projects" class="btn btn-primary">
              <i class="fas fa-code"></i>
              Мои проекты
            </NuxtLink>
            <NuxtLink to="/articles" class="btn btn-secondary">
              <i class="fas fa-blog"></i>
              Читать статьи
            </NuxtLink>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-avatar">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              alt="ArtDanshin" 
              class="avatar-img"
            >
            <div class="status-indicator online"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHeroSection } from './HeroSection.ts'
import type { HeroSectionProps } from './types'

const props = defineProps<HeroSectionProps>()
const { mergedProps } = useHeroSection(props)
</script>

<style scoped>
@import './HeroSection.css';
</style>
