<script setup>
import { useClock } from '@/composables/useClock.js'

const { time, dateTime } = useClock()
</script>

<template>
  <div class="clock">
    <time class="clock__time" :datetime="dateTime">{{ time }}</time>
  </div>
</template>

<style scoped>
.clock {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.clock__time {
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: clamp(2.5rem, 7vw, 4.75rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  line-height: 1;
  text-shadow: 0 8px 22px rgba(30, 41, 59, 0.28);
}

@media (max-width: 768px) {
  .clock {
    justify-content: flex-start;
  }
}
</style>
