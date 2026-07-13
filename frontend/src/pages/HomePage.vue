<script setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app.js'
import { homeLinks } from '@/constants/homeLinks.js'
import CalendarWidget from '@/components/widgets/CalendarWidget.vue'
import CalculatorWidget from '@/components/widgets/CalculatorWidget.vue'
import ClockWidget from '@/components/widgets/ClockWidget.vue'

const { title } = storeToRefs(useAppStore())
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
  <section class="home home--tools">
    <ClockWidget />
    <CalendarWidget />
    <CalculatorWidget />
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

.home--tools {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  min-height: auto;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
}

.home--tools > * {
  flex: 1;
  min-width: 0;
  max-width: 22rem;
}

@media (max-width: 768px) {
  .home--tools {
    flex-direction: column;
    align-items: stretch;
  }

  .home--tools > * {
    max-width: none;
  }
}
</style>
