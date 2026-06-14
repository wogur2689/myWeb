import { ref } from 'vue'

export function useAsync(asyncFn) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function execute(...args) {
    loading.value = true
    error.value = null

    try {
      data.value = await asyncFn(...args)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, execute }
}
