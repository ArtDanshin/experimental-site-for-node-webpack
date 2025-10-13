<script setup lang="ts">
  import { Logo } from '@artdanshin/ui';
</script>

<style scoped lang="scss" src="./AppHeader.scss" />

<template>
  <header class="header">
    <div class="header__content">
      <!-- Logo -->
      <NuxtLink to="/" class="header__logo-link">
        <Logo />
      </NuxtLink>
      
      <!-- Navigation -->
      <div class="header__nav">
        <NavMain />
      </div>
    </div>
  </header>
</template>
