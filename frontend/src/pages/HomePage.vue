<script setup>
import { onMounted } from 'vue'
import { useAsync } from '@/composables/useAsync.js'
import { fetchHealth } from '@/services/healthService.js'
import { formatDate } from '@/utils/formatDate.js'

const { data, error, loading, execute } = useAsync(fetchHealth)

onMounted(() => {
  execute()
})
</script>

<template>
  <section class="home">
    <h1>Hello World</h1>
    <p class="home__desc">Vue 프론트엔드가 준비되었습니다.</p>

    <div v-if="loading" class="home__status">서버 상태 확인 중...</div>
    <div v-else-if="error" class="home__status home__status--error">
      API 연결 실패: {{ error }}
    </div>
    <div v-else-if="data" class="home__status home__status--success">
      {{ data.message }} ({{ formatDate(data.timestamp) }})
    </div>
  </section>
</template>

<style scoped>
.home h1 {
  margin-bottom: 0.5rem;
}

.home__desc {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.home__status {
  padding: 1rem;
  border-radius: 0.5rem;
  background: #f3f4f6;
  font-size: 0.875rem;
}

.home__status--success {
  background: #ecfdf5;
  color: #065f46;
}

.home__status--error {
  background: #fef2f2;
  color: #991b1b;
}
</style>
