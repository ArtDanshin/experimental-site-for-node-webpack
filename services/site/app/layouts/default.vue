<template>
  <div class="app-layout">
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  // SEO для всех страниц
  useSeo({
    title: 'ArtDanshin - Frontend Developer',
    description: 'Frontend разработчик, геймер и стример. Создаю современные веб-приложения и делюсь опытом в статьях.',
    image: '/images/og-image.jpg',
    url: 'https://artdanshin.ru',
    type: 'website'
  })
</script>

<style scoped>
  .app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
  }
</style>
