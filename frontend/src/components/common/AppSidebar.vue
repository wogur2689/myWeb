<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const toolGroups = [
  {
    label: 'Developer Tools',
    items: [
      { icon: '{ }', label: 'JSON 도구' },
      { icon: 'Aa', label: '텍스트 도구' },
      { icon: '</>', label: '인코더 · 디코더' },
      { icon: '#', label: '색상 도구' },
    ],
  },
]
</script>

<template>
  <div v-if="open" class="sidebar-backdrop" @click="emit('close')" />

  <aside class="sidebar" :class="{ 'sidebar--open': open }">
    <div class="sidebar__brand">
      <span class="sidebar__brand-mark" aria-hidden="true">D</span>
      <div>
        <strong>Dev Station</strong>
        <span>Personal toolkit</span>
      </div>
      <button type="button" class="sidebar__close" aria-label="사이드바 닫기" @click="emit('close')">×</button>
    </div>

    <nav class="sidebar__nav" aria-label="사이드바 메뉴">
      <p class="sidebar__group-label">Workspace</p>
      <a href="#overview" class="sidebar__item sidebar__item--active" @click="emit('close')">
        <span class="sidebar__icon" aria-hidden="true">⌂</span>
        <span>대시보드</span>
      </a>
      <a href="#quick-links" class="sidebar__item" @click="emit('close')">
        <span class="sidebar__icon" aria-hidden="true">↗</span>
        <span>빠른 링크</span>
      </a>
      <a href="#widgets" class="sidebar__item" @click="emit('close')">
        <span class="sidebar__icon" aria-hidden="true">▦</span>
        <span>내 위젯</span>
        <span class="sidebar__count">3</span>
      </a>

      <template v-for="group in toolGroups" :key="group.label">
        <p class="sidebar__group-label sidebar__group-label--spaced">{{ group.label }}</p>
        <button
          v-for="item in group.items"
          :key="item.label"
          type="button"
          class="sidebar__item sidebar__item--disabled"
          disabled
        >
          <span class="sidebar__icon sidebar__icon--text" aria-hidden="true">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </button>
      </template>
    </nav>

    <div class="sidebar__footer">
      <div class="sidebar__status-dot" aria-hidden="true" />
      <div>
        <strong>Workspace ready</strong>
        <span>도구를 추가해보세요</span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  z-index: 30;
  inset: 0 auto 0 0;
  display: flex;
  flex-direction: column;
  width: 15.5rem;
  padding: 1.25rem 0.9rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(3, 35, 55, 0.9);
  box-shadow: 12px 0 40px rgba(2, 22, 35, 0.18);
  backdrop-filter: blur(18px);
}

.sidebar__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 0.55rem 1.25rem;
}

.sidebar__brand-mark {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  box-shadow: 0 8px 20px rgba(34, 211, 238, 0.2);
  color: white;
  font-size: 1.05rem;
  font-weight: 900;
}

.sidebar__brand strong,
.sidebar__brand span,
.sidebar__footer strong,
.sidebar__footer span {
  display: block;
}

.sidebar__brand strong {
  color: var(--text-primary);
  font-size: 0.95rem;
}

.sidebar__brand div > span {
  color: var(--text-muted);
  font-size: 0.68rem;
}

.sidebar__close {
  display: none;
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--text-muted);
  font-size: 1.75rem;
  cursor: pointer;
}

.sidebar__nav {
  flex: 1;
  overflow-y: auto;
}

.sidebar__group-label {
  padding: 0 0.75rem;
  margin-bottom: 0.45rem;
  color: rgba(165, 243, 252, 0.52);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.sidebar__group-label--spaced {
  margin-top: 1.55rem;
}

.sidebar__item {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 2.65rem;
  gap: 0.7rem;
  padding: 0.55rem 0.7rem;
  border: 1px solid transparent;
  border-radius: 0.7rem;
  background: transparent;
  color: rgba(236, 254, 255, 0.72);
  font: inherit;
  font-size: 0.82rem;
  text-align: left;
  text-decoration: none;
  transition: 0.15s ease;
}

a.sidebar__item:hover {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.07);
  color: var(--text-primary);
}

.sidebar__item--active {
  border-color: rgba(34, 211, 238, 0.18);
  background: linear-gradient(90deg, rgba(124, 58, 237, 0.26), rgba(34, 211, 238, 0.1));
  color: white;
}

.sidebar__item--disabled {
  cursor: default;
  opacity: 0.56;
}

.sidebar__icon {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 1.5rem;
  color: var(--ocean-bright);
  font-size: 1.05rem;
}

.sidebar__icon--text {
  font-family: ui-monospace, monospace;
  font-size: 0.7rem;
  font-weight: 800;
}

.sidebar__count {
  margin-left: auto;
  padding: 0.08rem 0.45rem;
  border-radius: 999px;
  background: rgba(34, 211, 238, 0.13);
  color: var(--ocean-bright);
  font-size: 0.68rem;
}

.sidebar__footer {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 1rem;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
}

.sidebar__status-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.7);
}

.sidebar__footer strong {
  color: var(--text-primary);
  font-size: 0.7rem;
}

.sidebar__footer span {
  color: var(--text-muted);
  font-size: 0.62rem;
}

.sidebar-backdrop {
  display: none;
}

@media (max-width: 900px) {
  .sidebar {
    width: min(18rem, 84vw);
    transform: translateX(-105%);
    transition: transform 0.22s ease;
  }

  .sidebar--open {
    transform: translateX(0);
  }

  .sidebar__close {
    display: block;
  }

  .sidebar-backdrop {
    position: fixed;
    z-index: 29;
    inset: 0;
    display: block;
    background: rgba(2, 20, 32, 0.62);
    backdrop-filter: blur(3px);
  }
}
</style>
