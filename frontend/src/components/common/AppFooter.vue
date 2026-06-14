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
  padding: 1.5rem 2rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>
