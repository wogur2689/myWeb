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
  <section id="overview" class="home">
    <div class="home__hero">
      <p class="home__greeting">안녕하세요 🌊</p>
      <h1 class="home__title">{{ title }}에 오신 것을 환영합니다</h1>
      <p class="home__desc">
        편하게 둘러보세요. 아래 링크로 이동할 수 있어요.
      </p>
    </div>

    <ul id="quick-links" class="home__links">
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
  <section id="widgets" class="widget-dashboard" aria-labelledby="widget-dashboard-title">
    <div class="widget-dashboard__heading">
      <div>
        <p class="widget-dashboard__eyebrow">MY WIDGETS</p>
        <h2 id="widget-dashboard-title" class="widget-dashboard__title">오늘의 대시보드</h2>
      </div>
      <p class="widget-dashboard__description">필요한 도구를 한곳에서 빠르게 확인하세요.</p>
    </div>

    <div class="widget-dashboard__grid">
      <article class="widget-card widget-card--clock">
        <div class="widget-card__header widget-card__header--compact">
          <div class="widget-card__icon" aria-hidden="true">◷</div>
          <div>
            <p class="widget-card__label">현재 시간</p>
            <h3 class="widget-card__title">Clock</h3>
          </div>
        </div>
        <ClockWidget />
      </article>

      <article class="widget-card widget-card--calendar">
        <div class="widget-card__header">
          <div>
            <p class="widget-card__label">일정 확인</p>
            <h3 class="widget-card__title">Calendar</h3>
          </div>
          <span class="widget-card__badge">MONTH</span>
        </div>
        <CalendarWidget />
      </article>

      <article class="widget-card widget-card--calculator">
        <div class="widget-card__header">
          <div>
            <p class="widget-card__label">빠른 계산</p>
            <h3 class="widget-card__title">Calculator</h3>
          </div>
          <span class="widget-card__badge">TOOLS</span>
        </div>
        <CalculatorWidget />
      </article>
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

.widget-dashboard {
  width: 100%;
  max-width: 72rem;
  margin: 0 auto 4rem;
  padding-top: 1rem;
}

.widget-dashboard__heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
}

.widget-dashboard__eyebrow {
  margin-bottom: 0.25rem;
  color: var(--ocean-bright);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.widget-dashboard__title {
  color: var(--text-primary);
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  line-height: 1.2;
}

.widget-dashboard__description {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.widget-dashboard__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(17rem, 0.85fr);
  gap: 1.25rem;
}

.widget-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 1.15rem;
  background: rgba(4, 47, 74, 0.38);
  box-shadow: 0 16px 40px rgba(3, 34, 52, 0.22);
  backdrop-filter: blur(14px);
}

.widget-card--clock {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(11rem, 0.55fr) minmax(0, 1.45fr);
  align-items: center;
  min-height: 9rem;
  background:
    radial-gradient(circle at 88% 18%, rgba(255, 255, 255, 0.27), transparent 24%),
    linear-gradient(115deg, rgba(124, 58, 237, 0.88), rgba(14, 165, 233, 0.86));
}

.widget-card--calendar {
  background: linear-gradient(145deg, rgba(4, 47, 74, 0.5), rgba(8, 145, 178, 0.2));
}

.widget-card--calculator {
  background: linear-gradient(145deg, rgba(4, 47, 74, 0.5), rgba(124, 58, 237, 0.18));
}

.widget-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.widget-card__header--compact {
  justify-content: flex-start;
  margin-bottom: 0;
}

.widget-card__icon {
  display: grid;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.17);
  font-size: 1.8rem;
}

.widget-card__label {
  margin-bottom: 0.15rem;
  color: rgba(236, 254, 255, 0.72);
  font-size: 0.75rem;
  font-weight: 600;
}

.widget-card__title {
  color: var(--text-primary);
  font-size: 1.05rem;
  line-height: 1.2;
}

.widget-card__badge {
  padding: 0.35rem 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: var(--text-muted);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .widget-dashboard__heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
  }

  .widget-dashboard__grid {
    grid-template-columns: 1fr;
  }

  .widget-card--clock {
    grid-column: auto;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
