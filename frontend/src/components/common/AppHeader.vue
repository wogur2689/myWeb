<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app.js'

const { title } = storeToRefs(useAppStore())
</script>

<template>
  <header class="app-header">
    <RouterLink to="/" class="app-header__logo">{{ title }}</RouterLink>
    <nav class="app-header__nav">
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.app-header__logo {
  font-size: 1.25rem;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
}

.app-header__nav a {
  color: #4b5563;
  text-decoration: none;
}

.app-header__nav a.router-link-active {
  color: #111827;
  font-weight: 500;
}
</style>
