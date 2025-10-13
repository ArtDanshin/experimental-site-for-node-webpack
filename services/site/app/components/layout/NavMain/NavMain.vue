<script setup lang="ts">
  import { setupNavMain } from './NavMain'

  const { isActiveRoute, uiStore } = setupNavMain()
</script>

<style scoped lang="scss" src="./NavMain.scss" />

<template>
  <div class='nav-main'>
    <!-- Navigation -->
    <nav class="nav-main__body" :class="{ '_open': uiStore.isMobileMenuOpen }">
      <ul class="nav-main__list">
        <li 
          v-for="item in uiStore.navigationItems" 
          :key="item.href"
          class="nav-main__item"
        >
          <NuxtLink :to="item.href" class="nav-main__link" :class="{ '_active': isActiveRoute(item.href) }" @click="uiStore.closeMobileMenu">
            <i :class="item.icon"></i>
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Toggle -->
    <button 
      class="nav-main__mobile-toggle"
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
