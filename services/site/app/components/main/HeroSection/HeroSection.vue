<script setup lang="ts">
  import { Button, HeroAvatar } from '@artdanshin/ui';
</script>

<style scoped lang="scss" src="./HeroSection.scss" />

<template>
  <section class="hero-section">
    <div class="hero-section__content">
      <div class="hero-section__text">
        <h1 class="hero-section__title">
          Привет! Я <span class="hero-section__highlight">ArtDanshin</span>
        </h1>
        <p class="hero-section__subtitle">
          Frontend разработчик, геймер и стример. Создаю современные веб-приложения 
          и делюсь опытом в статьях.
        </p>
        <div class="hero-section__actions">
          <NuxtLink to="/projects" class="btn btn-primary">
            <Button>
              <i class="fas fa-code"></i>
              Мои проекты
            </Button>
          </NuxtLink>
          <NuxtLink to="/articles" class="btn btn-secondary">
            <Button variant="secondary">
              <i class="fas fa-blog"></i>
              Читать статьи
            </Button>
          </NuxtLink>
        </div>
      </div>
      <div class="hero-section__image">
        <HeroAvatar 
          image-url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
          title="ArtDanshin"
        />
      </div>
    </div>
  </section>
</template>
