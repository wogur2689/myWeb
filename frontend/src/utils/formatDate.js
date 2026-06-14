export function formatDate(isoString) {
  if (!isoString) return ''

  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(isoString))
}
