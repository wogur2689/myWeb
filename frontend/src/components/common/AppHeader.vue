<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app.js'
import { headerLinks } from '@/constants/headerLinks.js'

const { title } = storeToRefs(useAppStore())
const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
  <header class="app-header">
    <div class="app-header__identity">
      <button type="button" class="app-header__menu" aria-label="사이드바 열기" @click="emit('toggle-sidebar')">
        <span />
        <span />
        <span />
      </button>
      <RouterLink to="/" class="app-header__logo">{{ title }}</RouterLink>
    </div>
    <nav class="app-header__nav">
      <a
        v-for="link in headerLinks"
        :key="link.id"
        :href="link.href"
        class="app-header__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: var(--ocean-glass);
  border-bottom: 1px solid var(--ocean-glass-border);
  backdrop-filter: blur(12px);
}

.app-header__identity {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.app-header__menu {
  display: none;
  width: 2.35rem;
  height: 2.35rem;
  padding: 0.55rem;
  border: 1px solid var(--ocean-glass-border);
  border-radius: 0.65rem;
  background: rgba(255, 255, 255, 0.07);
  cursor: pointer;
}

.app-header__menu span {
  display: block;
  height: 2px;
  margin: 3px 0;
  border-radius: 999px;
  background: var(--text-primary);
}

.app-header__logo {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  white-space: nowrap;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.app-header__link {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9375rem;
  border: 1px solid transparent;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.app-header__link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--ocean-glass-border);
}

@media (max-width: 900px) {
  .app-header__menu {
    display: block;
  }
}

@media (max-width: 600px) {
  .app-header {
    padding: 0.8rem 1rem;
  }

  .app-header__nav {
    display: none;
  }
}
</style>
