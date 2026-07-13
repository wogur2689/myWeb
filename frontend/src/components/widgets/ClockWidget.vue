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
  aspect-ratio: 1;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: var(--ocean-glass);
  border: 1px solid var(--ocean-glass-border);
  border-radius: 0.75rem;
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-ocean);
}

.clock__time {
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: clamp(2rem, 8vw, 2.75rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  line-height: 1;
}
</style>
