<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Recent Articles -->
    <ListSection
      title="Последние статьи"
      view-all-href="/articles"
      view-all-text="Все статьи"
    >
      <ArticleGrid :articles="articles" />
    </ListSection>

    <!-- Featured Projects -->
    <ListSection
      title="Избранные проекты"
      view-all-href="/projects"
      view-all-text="Все проекты"
      variant="dark"
    >
      <ProjectGrid :projects="projects" />
    </ListSection>

    <!-- Music Section -->
    <ListSection
      title="Музыкальные плейлисты"
      view-all-href="/music"
      view-all-text="Все плейлисты"
    >
      <PlaylistGrid :playlists="playlists" />
    </ListSection>
  </div>
</template>

<script setup lang="ts">

// SEO для главной страницы
  useSeo({
    title: 'ArtDanshin - Frontend Developer',
    description: 'Frontend разработчик, геймер и стример. Создаю современные веб-приложения и делюсь опытом в статьях.',
    image: '/images/og-image.jpg',
    url: 'https://artdanshin.ru',
    type: 'website',
  });

  // Fetch data from API
  const { data: articles } = await $fetch('/api/articles/featured');
  const { data: projects } = await $fetch('/api/projects/featured');
  const { data: playlists } = await $fetch('/api/music/featured');
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.recent-articles,
.featured-projects,
.music-preview {
  padding: 4rem 0;
}

.recent-articles {
  background: var(--color-background);
}

.featured-projects {
  background: var(--color-background-secondary);
}

.music-preview {
  background: var(--color-background);
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  color: var(--color-text-secondary);
  font-size: 1.125rem;
}

.loading i {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .recent-articles,
  .featured-projects,
  .music-preview {
    padding: 2rem 0;
  }
}
</style>
