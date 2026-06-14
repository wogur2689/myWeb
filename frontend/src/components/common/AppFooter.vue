<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <p>&copy; {{ year }} 나만의 웹사이트</p>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 1.25rem 2rem;
  border-top: 1px solid var(--ocean-glass-border);
  background: var(--ocean-glass);
  backdrop-filter: blur(12px);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.875rem;
}
</style>
