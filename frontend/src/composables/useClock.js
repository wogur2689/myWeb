import { onMounted, onUnmounted, ref } from 'vue'

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

export function useClock() {
  const time = ref(formatTime(new Date()))
  const dateTime = ref(new Date().toISOString())
  let timerId = null

  function updateTime() {
    const now = new Date()
    time.value = formatTime(now)
    dateTime.value = now.toISOString()
  }

  onMounted(() => {
    updateTime()
    timerId = window.setInterval(updateTime, 1000)
  })

  onUnmounted(() => {
    if (timerId !== null) {
      window.clearInterval(timerId)
    }
  })

  return { time, dateTime }
}
