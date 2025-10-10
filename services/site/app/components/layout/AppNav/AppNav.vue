<template>
  <div class='nav'>
    <!-- Navigation -->
    <nav class="nav__body" :class="{ '_open': uiStore.isMobileMenuOpen }">
      <ul class="nav__list">
        <li 
          v-for="item in uiStore.navigationItems" 
          :key="item.href"
          class="nav__item"
        >
          <NuxtLink :to="item.href" class="nav__link" :class="{ '_active': isActiveRoute(item.href) }" @click="uiStore.closeMobileMenu">
            <i :class="item.icon"></i>
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Toggle -->
    <button 
      class="nav__mobile-toggle"
      :class="{ '_open': uiStore.isMobileMenuOpen }"
      @click="uiStore.toggleMobileMenu"
      aria-label="Toggle mobile menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { setupAppHeader } from './AppHeader'

  const { isActiveRoute, uiStore } = setupAppHeader(props)
</script>

<style scoped lang="scss" src="./AppHeader.scss" />
