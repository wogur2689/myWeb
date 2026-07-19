<script setup>
import { useCalendar } from '@/composables/useCalendar.js'

const {
  weekdays,
  monthLabel,
  calendarDays,
  prevMonth,
  nextMonth,
  goToToday,
} = useCalendar()
</script>

<template>
  <div class="calendar">
    <div class="calendar__header">
      <button type="button" class="calendar__nav" aria-label="이전 달" @click="prevMonth">
        &lt;
      </button>
      <div class="calendar__title-wrap">
        <h2 class="calendar__title">{{ monthLabel }}</h2>
        <button type="button" class="calendar__today" @click="goToToday">오늘</button>
      </div>
      <button type="button" class="calendar__nav" aria-label="다음 달" @click="nextMonth">
        &gt;
      </button>
    </div>

    <div class="calendar__weekdays">
      <div v-for="weekday in weekdays" :key="weekday" class="calendar__weekday">
        {{ weekday }}
      </div>
    </div>

    <div class="calendar__body">
      <div
        v-for="cell in calendarDays"
        :key="cell.key"
        class="calendar__cell"
        :class="{
          'calendar__cell--empty': cell.empty,
          'calendar__cell--today': cell.isToday,
        }"
      >
        <span v-if="!cell.empty">{{ cell.day }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  width: 100%;
  padding-top: 0.25rem;
}

.calendar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.calendar__title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.calendar__title {
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-primary);
}

.calendar__today {
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--ocean-glass-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-muted);
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.calendar__today:hover {
  background: rgba(255, 255, 255, 0.16);
  color: var(--text-primary);
}

.calendar__nav {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--ocean-glass-border);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}

.calendar__nav:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: scale(1.05);
}

.calendar__weekdays,
.calendar__body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.375rem;
}

.calendar__weekdays {
  margin-bottom: 0.5rem;
}

.calendar__weekday {
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  padding: 0.25rem 0;
}

.calendar__cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  font-size: 0.9375rem;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

.calendar__cell--empty {
  background: transparent;
}

.calendar__cell--today {
  background: rgba(34, 211, 238, 0.35);
  border: 1px solid var(--ocean-bright);
  font-weight: 700;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.25);
}
</style>
