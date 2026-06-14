<script setup>
</script>

<template>
  <section class="not-found">
    <h1>404</h1>
    <p>페이지를 찾을 수 없습니다.</p>
    <RouterLink to="/">홈으로 돌아가기</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

.not-found h1 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

.not-found p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.not-found a {
  color: #2563eb;
}
</style>
