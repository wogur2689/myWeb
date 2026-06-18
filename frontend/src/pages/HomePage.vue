<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app.js'
import { homeLinks } from '@/constants/homeLinks.js'

const { title } = storeToRefs(useAppStore())

const days = Array.from({ length: 30 }, (_, i) => i + 1);
</script>

<template>
  <section class="home">
    <div class="home__hero">
      <p class="home__greeting">안녕하세요 🌊</p>
      <h1 class="home__title">{{ title }}에 오신 것을 환영합니다</h1>
      <p class="home__desc">
        편하게 둘러보세요. 아래 링크로 이동할 수 있어요.
      </p>
    </div>

    <ul class="home__links">
      <li v-for="link in homeLinks" :key="link.id">
        <a
          v-if="link.external"
          :href="link.href"
          class="home__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="home__link-label">{{ link.label }}</span>
          <span class="home__link-desc">{{ link.description }}</span>
        </a>
        <RouterLink v-else :to="link.to" class="home__link">
          <span class="home__link-label">{{ link.label }}</span>
          <span class="home__link-desc">{{ link.description }}</span>
        </RouterLink>
      </li>
    </ul>
  </section>
  <section class="home">
    <div class="gugudan-container">
      <table class="gugudan-table">
      <thead>
        <tr>
          <th v-for="dan in 9" :key="dan">
            {{ dan }}단
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="num in 9" :key="num">
          <td v-for="dan in 9" :key="dan">
            {{ dan }} × {{ num }} = {{ dan * num }}
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  </section>
  <section class="home">
  <div class="calendar-container">
    <div class="calendar-header">
      <button>&lt;</button>
      <h2>2026년 6월</h2>
      <button>&gt;</button>
    </div>

    <div class="week-header">
      <div>일</div>
      <div>월</div>
      <div>화</div>
      <div>수</div>
      <div>목</div>
      <div>금</div>
      <div>토</div>
    </div>

    <div class="calendar-body">
      <div
        v-for="day in days"
        :key="day"
        class="day-cell"
      >
        {{ day }}
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  min-height: calc(100vh - 9rem);
}

.home__hero {
  flex: 1;
  min-width: 0;
  max-width: 28rem;
}

.home__greeting {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.home__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.home__desc {
  color: var(--text-muted);
  font-size: 1.0625rem;
}

.home__links {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  flex: 1.2;
  justify-content: flex-end;
  align-items: stretch;
}

.home__link {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  min-width: 9rem;
  flex: 1 1 9rem;
  max-width: 11rem;
  padding: 1.25rem 1rem;
  border-radius: 1rem;
  text-decoration: none;
  text-align: center;
  background: var(--ocean-glass);
  border: 1px solid var(--ocean-glass-border);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-ocean);
  transition: transform 0.15s, background 0.15s, border-color 0.15s;
}

.home__link:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.35);
}

.home__link-label {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.home__link-desc {
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .home {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }

  .home__links {
    width: 100%;
    justify-content: flex-start;
  }

  .home__link {
    max-width: none;
  }
}

.gugudan-container {
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  background: var(--ocean-glass);
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.gugudan-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--ocean-glass-border);
}

.calendar-container {
  width: 100%;
  margin: 30px auto;
  padding: 20px;
  background: var(--ocean-glass);
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.calendar-header button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: var(--ocean-glass);
  cursor: pointer;
  font-size: 18px;
}

.calendar-header h2 {
  margin: 0;
}

.week-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: var(--ocean-glass);
}

.day-cell {
  min-height: 120px;
  padding: 10px;
  background: var(--ocean-glass);
  font-size: 15px;
}

.day-cell:hover {
  background: var(--ocean-glass);
}
</style>
