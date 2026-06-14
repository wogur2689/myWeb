import { api } from './api.js'

export function fetchHealth() {
  return api.get('/health')
}
