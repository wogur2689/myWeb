<script setup>
import { useCalculator } from '@/composables/useCalculator.js'

const { display, buttons, handleButton } = useCalculator()
</script>

<template>
  <div class="calculator">
    <div class="calculator__display" aria-live="polite">{{ display }}</div>

    <div class="calculator__keypad">
      <button
        v-for="(button, index) in buttons"
        :key="`${button.label}-${index}`"
        type="button"
        class="calculator__key"
        :class="{
          'calculator__key--utility': button.variant === 'utility',
          'calculator__key--operator': button.variant === 'operator',
          'calculator__key--equals': button.variant === 'equals',
          'calculator__key--zero': button.span === 2,
        }"
        :style="button.variant === 'equals' ? { gridRow: 'span 2' } : undefined"
        @click="handleButton(button)"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  width: 100%;
  padding-top: 0.25rem;
}

.calculator__display {
  min-height: 3.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  color: var(--text-primary);
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  text-align: right;
  word-break: break-all;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.calculator__keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.calculator__key {
  min-height: 3rem;
  border: 1px solid var(--ocean-glass-border);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
  font-size: 1.0625rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}

.calculator__key:hover {
  background: rgba(255, 255, 255, 0.16);
}

.calculator__key:active {
  transform: scale(0.97);
}

.calculator__key--utility {
  color: var(--text-muted);
}

.calculator__key--operator {
  background: rgba(34, 211, 238, 0.15);
  color: var(--ocean-bright);
}

.calculator__key--operator:hover {
  background: rgba(34, 211, 238, 0.25);
}

.calculator__key--equals {
  background: rgba(34, 211, 238, 0.35);
  color: var(--text-primary);
  font-weight: 700;
}

.calculator__key--equals:hover {
  background: rgba(34, 211, 238, 0.45);
}

.calculator__key--zero {
  grid-column: span 2;
}
</style>
