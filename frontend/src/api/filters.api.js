import axios from 'axios'

export async function fetchFilters({ signal } = {}) {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return axios.get(`${import.meta.env.VITE_API_BASE_URL}filters.json`, { signal }).then(r => r.data)
}