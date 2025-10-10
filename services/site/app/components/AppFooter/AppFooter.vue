<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-section">
          <h3 class="footer-title">ArtDanshin</h3>
          <p class="footer-description">
            Frontend разработчик, геймер и стример. Создаю современные веб-приложения.
          </p>
        </div>
        
        <!-- Navigation Section -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Навигация</h4>
          <ul class="footer-links">
            <li v-for="item in uiStore.navigationItems" :key="item.href">
              <NuxtLink :to="item.href" class="footer-link">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Social Links Section -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Социальные сети</h4>
          <div class="social-links">
            <a 
              v-for="social in uiStore.socialLinks" 
              :key="social.name"
              :href="social.href" 
              :title="social.name"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} ArtDanshin. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const uiStore = useUIStore()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-background-secondary);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  padding: 3rem 0 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
}

.footer-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.footer-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 0;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0 1.5rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
