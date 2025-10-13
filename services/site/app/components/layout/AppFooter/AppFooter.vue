<script setup lang="ts">
  import { SocialLink } from '@artdanshin/ui';

  const uiStore = useUIStore();
  const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss" src="./AppFooter.scss" />

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <!-- Brand Section -->
        <div class="footer__section">
          <h3 class="footer__title">
            ArtDanshin
          </h3>
          <p class="footer__description">
            Frontend разработчик, геймер и стример. Создаю современные веб-приложения.
          </p>
        </div>

        <!-- Navigation Section -->
        <div class="footer__section">
          <h4 class="footer__subtitle">
            Навигация
          </h4>
          <ul class="footer__links">
            <li
              v-for="item in uiStore.navigationItems"
              :key="item.href"
            >
              <NuxtLink
                :to="item.href"
                class="footer__link"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links Section -->
        <div class="footer__section">
          <h4 class="footer__subtitle">
            Социальные сети
          </h4>
          <div class="footer__social-links">
            <SocialLink
              v-for="social in uiStore.socialLinks"
              :key="social.type"
              :type="social.type"
              :href="social.href"
            />
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer__bottom">
        <p>&copy; {{ currentYear }} ArtDanshin. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>
