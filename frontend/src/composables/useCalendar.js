import { computed, ref } from 'vue'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate()
  )
}

export function useCalendar(initialDate = new Date()) {
  const today = new Date()
  const viewDate = ref(new Date(initialDate.getFullYear(), initialDate.getMonth(), 1))

  const monthLabel = computed(() => {
    const year = viewDate.value.getFullYear()
    const month = viewDate.value.getMonth() + 1
    return `${year}년 ${month}월`
  })

  const calendarDays = computed(() => {
    const year = viewDate.value.getFullYear()
    const month = viewDate.value.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startPadding = firstDay.getDay()
    const daysInMonth = lastDay.getDate()

    const days = []

    for (let i = 0; i < startPadding; i += 1) {
      days.push({ key: `empty-${i}`, empty: true })
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day)
      days.push({
        key: `${year}-${month}-${day}`,
        day,
        isToday: isSameDay(date, today),
      })
    }

    return days
  })

  function prevMonth() {
    const year = viewDate.value.getFullYear()
    const month = viewDate.value.getMonth()
    viewDate.value = new Date(year, month - 1, 1)
  }

  function nextMonth() {
    const year = viewDate.value.getFullYear()
    const month = viewDate.value.getMonth()
    viewDate.value = new Date(year, month + 1, 1)
  }

  function goToToday() {
    viewDate.value = new Date(today.getFullYear(), today.getMonth(), 1)
  }

  return {
    weekdays: WEEKDAYS,
    monthLabel,
    calendarDays,
    prevMonth,
    nextMonth,
    goToToday,
  }
}
