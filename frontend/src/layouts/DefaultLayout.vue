<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import AppSidebar from '@/components/common/AppSidebar.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="layout">
    <AppSidebar :open="sidebarOpen" @close="sidebarOpen = false" />
    <div class="layout__content">
      <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <main class="layout__main">
        <RouterView />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.layout__content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: 15.5rem;
}

.layout__main {
  flex: 1;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .layout__content {
    margin-left: 0;
  }
}
</style>
