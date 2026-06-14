import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const title = ref('나만의 웹사이트')

  function setTitle(value) {
    title.value = value
  }

  return { title, setTitle }
})
