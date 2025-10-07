<template>
  <div>
    <NuxtRouteAnnouncer />
    <Button variant="primary" size="lg" >
      Основная кнопка
    </Button>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
  import '@artdanshin/ui/styles'
  import { Button } from '@artdanshin/ui'
</script>