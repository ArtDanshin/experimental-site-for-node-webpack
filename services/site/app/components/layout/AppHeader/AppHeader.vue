<template>
  <header class="header">
    <div class="header__content">
      <!-- Logo -->
      <NuxtLink to="/" class="logo-link">
        <Logo />
      </NuxtLink>
      
      <!-- Navigation -->
      <AppNav />
    </div>
  </header>
</template>

<style scoped lang="scss" src="./AppHeader.scss" />
